import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-end p-4">
      <nav>
        <Link href="/home" className="m-4 underline">
          Home
        </Link>
        <Link href="/about" className="m-4 underline">
          About
        </Link>
        <Link href="/posts" className="m-4 underline">
          Posts
        </Link>
      </nav>
    </div>
  );
};

export default Header;
