import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { CardProps } from "@/interfaces";
import { title } from "process";
import { useState } from "react";

const HomePage = () => {
  const initialPosts = [
    { title: "Example Title", content: "Neque porro quisquam est." },
    { title: "Example Title 2", content: "Neque porro quisquam est." },
    { title: "Example Title 3", content: "Neque porro quisquam est." },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>(initialPosts);
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <button
        className="border border-blue-400 self-end hover:cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        Add Post
      </button>
      <h1 className="text-center">Home Page</h1>
      <div className="flex gap-4">
        {posts.map((post) => (
          <Card title={post.title} content={post.content} key={Math.random()} />
        ))}
      </div>
      {isModalOpen && (
        <PostModal
          onClose={() => setIsModalOpen(false)}
          onSave={(title: string, content: string) =>
            setPosts((prevPosts) => [{ title, content }, ...prevPosts])
          }
        />
      )}
    </div>
  );
};

export default HomePage;
