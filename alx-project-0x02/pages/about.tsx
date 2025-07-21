import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About = () => {
  return (
    <div className="flex h-screen flex-col">
      <Header /> <h1 className="text-center">About Page</h1>
      <Button title="Button 1" shape="rounded-sm" size="small" />
      <Button title="Button 2" shape="rounded-md" size="medium" />
      <Button title="Button 3" shape="rounded-full" size="large" />
    </div>
  );
};

export default About;
