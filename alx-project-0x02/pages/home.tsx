import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

const HomePage = () => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <h1 className="text-center">Home Page</h1>
      <div className="flex gap-4">
        <Card title="Example Title" content="Neque porro quisquam est." />
        <Card title="Example Title 2" content="Neque porro quisquam est." />
        <Card title="Example Title 3" content="Neque porro quisquam est." />
      </div>
    </div>
  );
};

export default HomePage;
