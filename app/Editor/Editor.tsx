"use client";

import React from "react";
import EditorContextProvider from "./context/EditorContextProvider";
import EditorComposer from "./components/EditorComposer";

const Editor = () => {
  return (
    <EditorContextProvider>
      <EditorComposer />
    </EditorContextProvider>
  );
};

export default Editor;
