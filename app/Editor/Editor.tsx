"use client";

import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  });

  if (!editor) return null;

  return (
    <div className=" m-auto max-w-[600px] flex flex-col p-5">
      <div className="flex flex-wrap gap-2 border border-b-0 p-4">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`px-4 py-2 border rounded-md ${
            editor.isActive("bold")
              ? "bg-gray-500 text-white"
              : "bg-transparent-200 text-black"
          } ${
            !editor.can().chain().focus().toggleBold().run()
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          <strong>B</strong>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`px-4 py-2 border rounded-md ${
            editor.isActive("italic")
              ? "bg-gray-500 text-white"
              : "bg-transparent-200 text-black"
          } ${
            !editor.can().chain().focus().toggleBold().run()
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          <em>I</em>
        </button>
      </div>
      <div className="w-full border ">
        <EditorContent
          className="p-4 focus:outline-none min-h-[300px]"
          editor={editor}
        />
      </div>
    </div>
  );
};

export default Editor;
