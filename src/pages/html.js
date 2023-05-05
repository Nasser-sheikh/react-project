import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/mainContent";
import { Helmet } from "react-helmet-async";

const Html = () => {
  return (
    <>
      <Helmet>
        <title>HTML Page</title>
        <meta name="description" content="This is the HTML page" />

        <link rel="canonical" href="https://www.tacobell.com" />
      </Helmet>
      <Header />
      <MainContent pageName="HTML Page" designer="Nasser Sheikh" />
      <Footer />
    </>
  );
};

export default Html;
