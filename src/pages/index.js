import RootLayout from "@/components/Layout/RootLayout";

const HomePage = () => {
  return <div className="text-red-500">HomePage</div>;
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout> {page}</RootLayout>;
};
