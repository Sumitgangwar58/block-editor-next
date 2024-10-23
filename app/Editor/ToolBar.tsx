import { useContext } from "react";
import EditorContext from "./context/EditorContext";
import { Button, buttonVariants } from "@/components/ui/button";
import classNames from "classnames";

type commandsT = {
  [key: string]: {
    label: React.ReactNode;
    action: () => boolean | undefined;
    isActive: boolean;
    canRun: boolean;
  };
};

const EditorToolbar = () => {
  const { editor } = useContext(EditorContext);
  // Create an object for all the commands
  const commands: commandsT = {
    bold: {
      label: <strong>B</strong>,
      action: () => editor?.chain().focus().toggleBold().run(),
      isActive: editor?.isActive("bold") ?? false,
      canRun: editor?.can().chain().focus().toggleBold().run() ?? false,
    },
    italic: {
      label: <em>I</em>,
      action: () => editor?.chain().focus().toggleItalic().run(),
      isActive: editor?.isActive("italic") ?? false,
      canRun: editor?.can().chain().focus().toggleItalic().run() ?? false,
    },
    // underline: {
    //   label: <u>U</u>,
    //   action: () => editor?.chain().focus().toggleUnderline().run(),
    //   isActive: editor?.isActive("underline"),
    //   canRun: editor?.can().chain().focus().toggleUnderline().run(),
    // },
    strike: {
      label: <s>S</s>,
      action: () => editor?.chain().focus().toggleStrike().run(),
      isActive: editor?.isActive("strike") ?? false,
      canRun: editor?.can().chain().focus().toggleStrike().run() ?? false,
    },
    bulletList: {
      label: "Bullet List",
      action: () => editor?.chain().focus().toggleBulletList().run(),
      isActive: editor?.isActive("bulletList") ?? false,
      canRun: editor?.can().chain().focus().toggleBulletList().run() ?? false,
    },
    orderedList: {
      label: "Ordered List",
      action: () => editor?.chain().focus().toggleOrderedList().run(),
      isActive: editor?.isActive("orderedList") ?? false,
      canRun: editor?.can().chain().focus().toggleOrderedList().run() ?? false,
    },
    // alignLeft: {
    //   label: "Left Align",
    //   action: () => editor?.chain().focus().setTextAlign("left").run(),
    //   isActive: editor?.isActive({ textAlign: "left" }),
    //   canRun: editor?.can().chain().focus().setTextAlign("left").run(),
    // },
    // alignCenter: {
    //   label: "Center Align",
    //   action: () => editor?.chain().focus().setTextAlign("center").run(),
    //   isActive: editor?.isActive({ textAlign: "center" }),
    //   canRun: editor?.can().chain().focus().setTextAlign("center").run(),
    // },
    // alignRight: {
    //   label: "Right Align",
    //   action: () => editor?.chain().focus().setTextAlign("right").run(),
    //   isActive: editor?.isActive({ textAlign: "right" }),
    //   canRun: editor?.can().chain().focus().setTextAlign("right").run(),
    // },
    // justify: {
    //   label: "Justify",
    //   action: () => editor?.chain().focus().setTextAlign("justify").run(),
    //   isActive: editor?.isActive({ textAlign: "justify" }),
    //   canRun: editor?.can().chain().focus().setTextAlign("justify").run(),
    // },
  };

  return (
    <div className="flex flex-wrap gap-2 border border-b-0 p-4">
      {Object.keys(commands).map((commandKey) => {
        const command = commands[commandKey as keyof typeof commands];
        const variant = buttonVariants({ variant: "outline" });
        return (
          <Button
            key={commandKey}
            onClick={command.action}
            disabled={!command.canRun}
            className={classNames({
              [variant]: true,
              active: command.isActive,
              "opacity-50 cursor-not-allowed": !command.canRun,
            })}
          >
            {command.label}
          </Button>
        );
      })}
    </div>
  );
};

export default EditorToolbar;
