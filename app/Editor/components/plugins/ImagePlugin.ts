import Image from "@tiptap/extension-image";

export const ImagePlugin = Image.configure({
  HTMLAttributes: {
    allowBase64: true,
    inline: true,
    class: "editor-image",
  },
});
