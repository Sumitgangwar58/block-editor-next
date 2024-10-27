"use client";

import React from "react";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorContextProvider from "./context/EditorContextProvider";
import EditorComposer from "./components/EditorComposer";

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  });

  if (!editor) return null;

  return (
    <EditorContextProvider>
      <EditorComposer />
    </EditorContextProvider>
  );
};

export default Editor;
