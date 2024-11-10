import { FloatingMenu } from "@tiptap/react";
import { Editor } from "@tiptap/core";
import React, { useState } from "react";
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { EditorState } from "@tiptap/pm/state";

interface CustomFloatingMenuProps {
  editor: Editor;
}

const CustomFloatingMenu = ({ editor }: CustomFloatingMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const removeSlash = () => {
    const { state, view } = editor;
    const { $from } = state.selection;

    // Only remove the slash if the current selection is the slash
    if ($from.parent.textContent === "/") {
      const transaction = state.tr.delete($from.pos - 1, $from.pos); // Delete the slash
      view.dispatch(transaction);
    }
  };

  const menuItems = [
    {
      label: "Heading 1",
      command: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    },
    { label: "Bold", command: () => editor.chain().focus().toggleBold().run() },
    {
      label: "Italic",
      command: () => editor.chain().focus().toggleItalic().run(),
    },
    {
      label: "Insert Card Node",
      command: () => editor?.chain().focus().createCardNode().run(),
    },
  ];

  const handleDropdownOpen = ({ state }: { state: EditorState }) => {
    const { $from } = state.selection;

    const isBlock = $from.parent.type.isBlock;
    const isSlashOnly = $from.parent.textContent === "/";

    // Show the dropdown when '/' is typed
    const shouldOpen = isBlock && isSlashOnly;

    setIsOpen(shouldOpen);
    return shouldOpen;
  };

  return (
    <FloatingMenu
      editor={editor}
      tippyOptions={{ duration: 100 }}
      shouldShow={handleDropdownOpen}
    >
      {isOpen && (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          {/* Use an invisible trigger to comply with DropdownMenu API */}
          <DropdownMenuTrigger asChild>
            <span />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            sideOffset={5}
            className="p-2 max-w-[200px] bg-white border rounded shadow-md"
          >
            {menuItems.map((item, index) => (
              <DropdownMenuItem
                key={index}
                onSelect={() => {
                  removeSlash();
                  item.command();
                  setIsOpen(false); // Close menu after selection
                }}
                className="cursor-pointer"
              >
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </FloatingMenu>
  );
};

export default CustomFloatingMenu;
