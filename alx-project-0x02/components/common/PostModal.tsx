import { PostModalProps } from "@/interfaces";
import { FormEvent } from "react";

const PostModal = ({ onClose, onSave }: PostModalProps) => {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const title = form.get("title") as string;
    const content = form.get("content") as string;
    onSave(title, content);
    onClose();
  }
  return (
    <div className="fixed inset-0  z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <form className=" w-80 bg-white rounded-lg p-8" onSubmit={onSubmit}>
        <div className="flex mb-12">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="border border-black ml-12"
            name="title"
          />
        </div>
        <div className="flex">
          <label htmlFor="content">Content</label>
          <input
            type="text"
            id="content"
            className="border border-black ml-5"
            name="content"
          />
        </div>
        <div className="flex justify-between mt-12">
          <button
            className="border border-black rounded-lg p-1"
            onClick={onClose}
          >
            Cancel
          </button>
          <input
            type="submit"
            value="Add post"
            className="border border-black rounded-lg p-1"
          />
        </div>
      </form>
    </div>
  );
};

export default PostModal;
