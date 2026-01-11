import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, LogOut, Home } from "lucide-react";
import { Link } from "react-router-dom";
import ImageUpload from "@/components/ImageUpload";

interface BakeryProduct {
  id: string;
  name_es: string;
  name_en: string;
  description_es: string | null;
  description_en: string | null;
  price: number | null;
  image_url: string | null;
  available: boolean;
  display_order: number;
}

interface GalleryImage {
  id: string;
  title_es: string | null;
  title_en: string | null;
  description_es: string | null;
  description_en: string | null;
  image_url: string;
  category: string | null;
  display_order: number;
}

const Admin = () => {
  const { t, language } = useLanguage();
  const { user, isAdmin, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  
  const [products, setProducts] = useState<BakeryProduct[]>([]);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Product form state
  const [editingProduct, setEditingProduct] = useState<BakeryProduct | null>(null);
  const [productDialogOpen, setProductDialogOpen] = useState(false);
  const [productForm, setProductForm] = useState({
    name_es: "",
    name_en: "",
    description_es: "",
    description_en: "",
    price: "",
    image_url: "",
    available: true,
  });

  // Gallery form state
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const [imageForm, setImageForm] = useState({
    title_es: "",
    title_en: "",
    description_es: "",
    description_en: "",
    image_url: "",
    category: "general",
  });

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/admin-login");
    }
  }, [authLoading, user, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchData();
    }
  }, [user, isAdmin]);

  const fetchData = async () => {
    setLoading(true);
    
    const [productsRes, galleryRes] = await Promise.all([
      supabase.from("bakery_products").select("*").order("display_order"),
      supabase.from("gallery_images").select("*").order("display_order"),
    ]);

    if (productsRes.data) setProducts(productsRes.data);
    if (galleryRes.data) setGalleryImages(galleryRes.data);
    
    setLoading(false);
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  // Product handlers
  const openProductDialog = (product?: BakeryProduct) => {
    if (product) {
      setEditingProduct(product);
      setProductForm({
        name_es: product.name_es,
        name_en: product.name_en,
        description_es: product.description_es || "",
        description_en: product.description_en || "",
        price: product.price?.toString() || "",
        image_url: product.image_url || "",
        available: product.available,
      });
    } else {
      setEditingProduct(null);
      setProductForm({
        name_es: "",
        name_en: "",
        description_es: "",
        description_en: "",
        price: "",
        image_url: "",
        available: true,
      });
    }
    setProductDialogOpen(true);
  };

  const saveProduct = async () => {
    const data = {
      name_es: productForm.name_es,
      name_en: productForm.name_en,
      description_es: productForm.description_es || null,
      description_en: productForm.description_en || null,
      price: productForm.price ? parseFloat(productForm.price) : null,
      image_url: productForm.image_url || null,
      available: productForm.available,
    };

    if (editingProduct) {
      const { error } = await supabase
        .from("bakery_products")
        .update(data)
        .eq("id", editingProduct.id);

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Producto actualizado");
        setProductDialogOpen(false);
        fetchData();
      }
    } else {
      const { error } = await supabase
        .from("bakery_products")
        .insert([{ ...data, display_order: products.length }]);

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Producto añadido");
        setProductDialogOpen(false);
        fetchData();
      }
    }
  };

  const deleteProduct = async (id: string) => {
    if (!confirm("¿Eliminar este producto?")) return;
    
    const { error } = await supabase.from("bakery_products").delete().eq("id", id);
    
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Producto eliminado");
      fetchData();
    }
  };

  // Gallery handlers
  const openImageDialog = (image?: GalleryImage) => {
    if (image) {
      setEditingImage(image);
      setImageForm({
        title_es: image.title_es || "",
        title_en: image.title_en || "",
        description_es: image.description_es || "",
        description_en: image.description_en || "",
        image_url: image.image_url,
        category: image.category || "general",
      });
    } else {
      setEditingImage(null);
      setImageForm({
        title_es: "",
        title_en: "",
        description_es: "",
        description_en: "",
        image_url: "",
        category: "general",
      });
    }
    setImageDialogOpen(true);
  };

  const saveImage = async () => {
    if (!imageForm.image_url) {
      toast.error("La URL de imagen es requerida");
      return;
    }

    const data = {
      title_es: imageForm.title_es || null,
      title_en: imageForm.title_en || null,
      description_es: imageForm.description_es || null,
      description_en: imageForm.description_en || null,
      image_url: imageForm.image_url,
      category: imageForm.category,
    };

    if (editingImage) {
      const { error } = await supabase
        .from("gallery_images")
        .update(data)
        .eq("id", editingImage.id);

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Imagen actualizada");
        setImageDialogOpen(false);
        fetchData();
      }
    } else {
      const { error } = await supabase
        .from("gallery_images")
        .insert([{ ...data, display_order: galleryImages.length }]);

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Imagen añadida");
        setImageDialogOpen(false);
        fetchData();
      }
    }
  };

  const deleteImage = async (id: string) => {
    if (!confirm("¿Eliminar esta imagen?")) return;
    
    const { error } = await supabase.from("gallery_images").delete().eq("id", id);
    
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Imagen eliminada");
      fetchData();
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">{t("admin.no-access")}</p>
          <Link to="/" className="text-primary hover:underline">
            {t("nav.home")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="font-heading text-xl font-semibold text-foreground">
              {t("admin.dashboard")}
            </h1>
            <div className="flex items-center gap-4">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                <Home size={20} />
              </Link>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut size={18} className="mr-2" />
                {t("admin.logout")}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="products" className="space-y-6">
          <TabsList>
            <TabsTrigger value="products">{t("admin.products")}</TabsTrigger>
            <TabsTrigger value="gallery">{t("admin.gallery")}</TabsTrigger>
          </TabsList>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="font-heading text-2xl font-semibold">{t("admin.products")}</h2>
              <Button onClick={() => openProductDialog()}>
                <Plus size={18} className="mr-2" />
                {t("admin.add-product")}
              </Button>
            </div>

            {loading ? (
              <p className="text-muted-foreground">Loading...</p>
            ) : (
              <div className="grid gap-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border"
                  >
                    {product.image_url && (
                      <img
                        src={product.image_url}
                        alt={product.name_es}
                        className="w-16 h-16 object-cover rounded"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground truncate">
                        {language === "es" ? product.name_es : product.name_en}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {product.price ? `${product.price}€` : "—"}
                        {" • "}
                        <span className={product.available ? "text-green-600" : "text-red-600"}>
                          {product.available ? t("admin.available") : t("admin.not-available")}
                        </span>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" onClick={() => openProductDialog(product)}>
                        <Pencil size={16} />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => deleteProduct(product.id)}>
                        <Trash2 size={16} className="text-destructive" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="font-heading text-2xl font-semibold">{t("admin.gallery")}</h2>
              <Button onClick={() => openImageDialog()}>
                <Plus size={18} className="mr-2" />
                {t("admin.add-image")}
              </Button>
            </div>

            {loading ? (
              <p className="text-muted-foreground">Loading...</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryImages.map((image) => (
                  <div
                    key={image.id}
                    className="relative group bg-card rounded-lg border border-border overflow-hidden"
                  >
                    <img
                      src={image.image_url}
                      alt={image.title_es || "Gallery image"}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <Button variant="secondary" size="sm" onClick={() => openImageDialog(image)}>
                        <Pencil size={16} />
                      </Button>
                      <Button variant="secondary" size="sm" onClick={() => deleteImage(image.id)}>
                        <Trash2 size={16} className="text-destructive" />
                      </Button>
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-medium truncate">
                        {language === "es" ? image.title_es : image.title_en || "Sin título"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>

      {/* Product Dialog */}
      <Dialog open={productDialogOpen} onOpenChange={setProductDialogOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingProduct ? t("admin.edit-product") : t("admin.add-product")}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>{t("admin.name-es")}</Label>
                <Input
                  value={productForm.name_es}
                  onChange={(e) => setProductForm({ ...productForm, name_es: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>{t("admin.name-en")}</Label>
                <Input
                  value={productForm.name_en}
                  onChange={(e) => setProductForm({ ...productForm, name_en: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>{t("admin.desc-es")}</Label>
              <Textarea
                value={productForm.description_es}
                onChange={(e) => setProductForm({ ...productForm, description_es: e.target.value })}
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label>{t("admin.desc-en")}</Label>
              <Textarea
                value={productForm.description_en}
                onChange={(e) => setProductForm({ ...productForm, description_en: e.target.value })}
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>{t("admin.price")}</Label>
                <Input
                  type="number"
                  step="0.01"
                  value={productForm.price}
                  onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                />
              </div>
              <div className="space-y-2 flex items-end">
                <div className="flex items-center gap-2">
                  <Switch
                    checked={productForm.available}
                    onCheckedChange={(checked) => setProductForm({ ...productForm, available: checked })}
                  />
                  <Label>{t("admin.available")}</Label>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label>{t("admin.image")}</Label>
              <ImageUpload
                value={productForm.image_url}
                onChange={(url) => setProductForm({ ...productForm, image_url: url })}
                folder="products"
              />
            </div>
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setProductDialogOpen(false)}>
                {t("admin.cancel")}
              </Button>
              <Button onClick={saveProduct}>
                {t("admin.save")}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Gallery Dialog */}
      <Dialog open={imageDialogOpen} onOpenChange={setImageDialogOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingImage ? t("admin.edit-image") : t("admin.add-image")}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>{t("admin.image")} *</Label>
              <ImageUpload
                value={imageForm.image_url}
                onChange={(url) => setImageForm({ ...imageForm, image_url: url })}
                folder="gallery"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>{t("admin.title-es")}</Label>
                <Input
                  value={imageForm.title_es}
                  onChange={(e) => setImageForm({ ...imageForm, title_es: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>{t("admin.title-en")}</Label>
                <Input
                  value={imageForm.title_en}
                  onChange={(e) => setImageForm({ ...imageForm, title_en: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>{t("admin.desc-es")}</Label>
              <Textarea
                value={imageForm.description_es}
                onChange={(e) => setImageForm({ ...imageForm, description_es: e.target.value })}
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label>{t("admin.desc-en")}</Label>
              <Textarea
                value={imageForm.description_en}
                onChange={(e) => setImageForm({ ...imageForm, description_en: e.target.value })}
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label>{t("admin.category")}</Label>
              <Input
                value={imageForm.category}
                onChange={(e) => setImageForm({ ...imageForm, category: e.target.value })}
              />
            </div>
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setImageDialogOpen(false)}>
                {t("admin.cancel")}
              </Button>
              <Button onClick={saveImage}>
                {t("admin.save")}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;
