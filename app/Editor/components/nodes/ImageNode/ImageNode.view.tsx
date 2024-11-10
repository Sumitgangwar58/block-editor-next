import Image from "next/image";
import { NodeViewProps, NodeViewWrapper } from "@tiptap/react";
// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ImageNodeView = ({ node, updateAttributes }: NodeViewProps) => {
  const handleUrlUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      updateAttributes({ url: URL.createObjectURL(event.target.files[0]) });
    }
  };
  return (
    <NodeViewWrapper>
      <div>
        {!node.attrs.url && (
          <div
            contentEditable={false}
            className="bg-slate-50 h-[300px] w-[100%] flex items-center justify-center"
          >
            <Input id="picture" type="file" onChange={handleUrlUpdate} />
          </div>
        )}
        {node.attrs.url && (
          <Image
            src={node.attrs.url}
            alt={""}
            style={{ objectFit: "cover", width: "100%", height: "300px" }}
            width={`${100}`}
            height={`${100}`}
            className="rounded-sm"
          />
        )}
      </div>
    </NodeViewWrapper>
  );
};

export default ImageNodeView;
