import TextAlign from "@tiptap/extension-text-align";

export const TextAlignPlugin = TextAlign.configure({
  types: ["heading", "paragraph"],
  alignments: ["left", "right", "center"],
});
