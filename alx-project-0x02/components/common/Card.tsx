import { CardProps } from "@/interfaces";

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="flex flex-col gap-16 border border-gray-400 rounded-md">
      <p className="text-center">{title}</p>
      <p>{content}</p>
    </div>
  );
};

export default Card;
