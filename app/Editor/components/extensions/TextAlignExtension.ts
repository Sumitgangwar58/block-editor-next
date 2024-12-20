import TextAlign from "@tiptap/extension-text-align";

export const TextAlignExtension = TextAlign.configure({
  types: ["heading", "paragraph"],
  alignments: ["left", "right", "center"],
});
