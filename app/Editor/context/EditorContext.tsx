import { createContext } from "react";
import { Editor } from "@tiptap/react";

export type EditorContextT = {
  editor: Editor | null;
};
const initialValue: EditorContextT = {
  editor: null,
};
const EditorContext = createContext(initialValue);

export default EditorContext;
