import React, { useContext, useState } from "react";
import EditorContext from "../context/EditorContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  //   DialogDescription,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddImage = () => {
  const { editor } = useContext(EditorContext);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(event.target.files[0]);
  };

  const handleAddImage = async () => {
    if (!file) return;

    // Convert the file to a URL or use any upload logic here
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

    // Close the dialog and reset the file input
    setFile(null);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"} onClick={handleAddImage}>
          Image
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Insert Image</DialogTitle>
        </DialogHeader>
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" onChange={handleFileChange} />
        <DialogFooter>
          <DialogClose>
            <Button
              type="submit"
              variant={"default"}
              onClick={() => {
                handleAddImage();
              }}
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
