import Image from "@tiptap/extension-image";

export const ImageExtension = Image.configure({
  HTMLAttributes: {
    allowBase64: true,
    inline: true,
    class: "editor-image",
  },
});
