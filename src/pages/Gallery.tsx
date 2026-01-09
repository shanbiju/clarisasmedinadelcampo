import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryImage {
  id: string;
  title_es: string | null;
  title_en: string | null;
  description_es: string | null;
  description_en: string | null;
  image_url: string;
  category: string | null;
}

const Gallery = () => {
  const { language, t } = useLanguage();
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const { data, error } = await supabase
      .from("gallery_images")
      .select("*")
      .order("display_order", { ascending: true });

    if (error) {
      console.error("Error fetching gallery images:", error);
    } else {
      setImages(data || []);
    }
    setLoading(false);
  };

  const getTitle = (image: GalleryImage) => 
    language === "es" ? image.title_es : image.title_en;
  
  const getDescription = (image: GalleryImage) => 
    language === "es" ? image.description_es : image.description_en;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold animate-fade-in">
            {t("gallery.title")}
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-delayed">
            {t("gallery.subtitle")}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-[4/3] bg-muted animate-pulse rounded-lg" />
              ))}
            </div>
          ) : images.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">
              {t("gallery.empty")}
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.image_url}
                    alt={getTitle(image) || "Gallery image"}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                      {getTitle(image) && (
                        <h3 className="font-heading text-lg font-semibold">
                          {getTitle(image)}
                        </h3>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background">
          {selectedImage && (
            <div>
              <img
                src={selectedImage.image_url}
                alt={getTitle(selectedImage) || "Gallery image"}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              {(getTitle(selectedImage) || getDescription(selectedImage)) && (
                <div className="p-4 md:p-6">
                  {getTitle(selectedImage) && (
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {getTitle(selectedImage)}
                    </h3>
                  )}
                  {getDescription(selectedImage) && (
                    <p className="mt-2 text-muted-foreground">
                      {getDescription(selectedImage)}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Gallery;
