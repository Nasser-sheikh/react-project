import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/mainContent";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="This is the home page" />
        <link rel="canonical" href="https://www.tacobell.com" />
      </Helmet>
      <Header />
      <MainContent pageName="Home Page" designer="Nasser Sheikh" />
      <Footer />
    </>
  );
};

export default Home;
