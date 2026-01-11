import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface ImageUploadProps {
  value?: string;
  onChange: (url: string) => void;
  folder: "products" | "gallery";
}

const ImageUpload = ({ value, onChange, folder }: ImageUploadProps) => {
  const [uploading, setUploading] = useState(false);

  const uploadImage = async (file: File) => {
    setUploading(true);

    const path = `${folder}/${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("images")
      .upload(path, file, {
        upsert: false,
      });

    if (error) {
      toast.error(error.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage
      .from("images")
      .getPublicUrl(path);

    onChange(data.publicUrl);
    setUploading(false);
  };

  return (
    <div className="space-y-3">
      {value && (
        <img
          src={value}
          alt="Uploaded"
          className="w-full max-h-48 object-cover rounded-md border"
        />
      )}

      <input
        type="file"
        accept="image/*"
        disabled={uploading}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) uploadImage(file);
        }}
      />

      {uploading && <p className="text-sm text-muted-foreground">Uploading…</p>}

      <Button
        type="button"
        variant="outline"
        disabled={uploading}
        onClick={() => onChange("")}
      >
        Clear
      </Button>
    </div>
  );
};

export default ImageUpload;
