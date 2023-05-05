import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/mainContent";
import { Helmet } from "react-helmet-async";

const Javascript = () => {
  return (
    <>
      <Helmet>
        <title>Javascript Page</title>
        <meta name="description" content="This is the Javascript page" />

        <link rel="canonical" href="https://www.tacobell.com" />
      </Helmet>
      <Header />
      <MainContent pageName="Javascript Page" designer="Nasser Sheikh" />
      <Footer />
    </>
  );
};

export default Javascript;
