import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/mainContent";
import { Helmet } from "react-helmet-async";
const Css = () => {
  return (
    <>
      <Helmet>
        <title>CSS Page</title>
        <meta name="description" content="This is the CSS page" />

        <link rel="canonical" href="https://www.tacobell.com" />
      </Helmet>
      <Header />
      <MainContent pageName="CSS Page" designer="Nasser Sheikh" />
      <Footer />
    </>
  );
};

export default Css;
