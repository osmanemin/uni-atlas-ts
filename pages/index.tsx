import Main from "../components/templates/Main/Main";

import { NextPage } from "next";
import { Head } from "../components/molecules/Head";

const HomePage: NextPage = () => {
  return (
    <>
      <Head />
      <Main />
    </>
  );
};

export default HomePage;
