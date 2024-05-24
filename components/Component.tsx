import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

function Component({ className }: Props) {
  return <div className={cn("", className)}></div>;
}

export default Component;
