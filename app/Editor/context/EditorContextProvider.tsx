import React from "react";
import EditorContext from "./EditorContext";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";

interface EditorContextProviderI {
  children: React.ReactNode;
}

const EditorContextProvider = ({ ...props }: EditorContextProviderI) => {
  const { children } = props;
  const editor = useEditor({
    extensions: [StarterKit, Underline, TextAlign, Image],
    content: "<p>Hello World! 🌎️</p>",
  });
  return (
    <EditorContext.Provider
      value={{
        editor: editor,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorContextProvider;
