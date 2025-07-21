export interface CardProps {
  title: string;
  content: string;
}
export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  title: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSave: (title: string, content: string) => void;
}
