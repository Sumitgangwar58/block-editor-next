import React from "react";
import EditorContext from "./EditorContext";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { ImageExtension } from "../components/extensions/ImageExtension";
import { TextAlignExtension } from "../components/extensions/TextAlignExtension";
import { PlaceholderExtension } from "../components/extensions/PlaceholderExtension";
import CardNode from "../components/nodes/CardNode/CardNode";
import ImageNode from "../components/nodes/ImageNode/ImageNode";
import DescriptionNode from "../components/nodes/DescriptionNode/DescriptionNode";
import TitleNode from "../components/nodes/TitleNode/TitleNode";

interface EditorContextProviderI {
  children: React.ReactNode;
}

const EditorContextProvider = ({ ...props }: EditorContextProviderI) => {
  const { children } = props;
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      TextAlignExtension,
      ImageExtension,
      PlaceholderExtension,
      CardNode,
      ImageNode,
      DescriptionNode,
      TitleNode,
    ],
    editorProps: {
      handleDrop: function (view, event, slice, moved) {
        if (
          !moved &&
          event.dataTransfer &&
          event.dataTransfer.files &&
          event.dataTransfer.files[0]
        ) {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64data = reader.result;
            if (editor && typeof base64data === "string") {
              console.log(view, editor);
              editor
                .chain()
                .focus()
                .setImage({
                  src: base64data,
                  //   alt: event.dataTransfer?.files[0].name,
                })
                .run();
            }
          };
          reader.readAsDataURL(event.dataTransfer?.files[0]);
          return true; // handled
        }
        return false; // not handled use default behaviour
      },
    },
    content: "",
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
