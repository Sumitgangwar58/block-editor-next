import React, { useContext, useState } from "react";
import EditorContext from "../context/EditorContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const AddImage = () => {
  const { editor } = useContext(EditorContext);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      setPreview(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleAddImage = async () => {
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64data = reader.result;
      if (editor && typeof base64data === "string") {
        editor
          .chain()
          .focus()
          .setImage({ src: base64data, alt: file.name })
          .run();
      }
    };
    reader.readAsDataURL(file);

    setFile(null);
    setPreview(null);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>Image</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Insert Image</DialogTitle>
        </DialogHeader>

        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" onChange={handleFileChange} />

        {preview && (
          <div className="image-preview" style={{ marginTop: "16px" }}>
            <Image
              height={200}
              width={200}
              src={preview}
              alt="Preview"
              style={{ maxWidth: "100%" }}
            />
          </div>
        )}

        <DialogFooter>
          <DialogClose>
            <Button
              type="submit"
              variant={"default"}
              onClick={handleAddImage}
              disabled={!file}
            >
              Insert
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddImage;
