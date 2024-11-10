import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react";

const CardNodeView = ({ deleteNode }: NodeViewProps) => {
  return (
    <NodeViewWrapper>
      <Card className="w-[350px]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Custom Card</CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={"outline"}>Options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={deleteNode}>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <CardDescription>Custom Block</CardDescription>
        </CardHeader>
        <CardContent>
          <NodeViewContent as={"div"} className="flex flex-col gap-4" />
        </CardContent>
      </Card>
    </NodeViewWrapper>
  );
};

export default CardNodeView;
