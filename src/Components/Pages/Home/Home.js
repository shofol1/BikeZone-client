import React from "react";
import AllReviews from "../../ALLReviews/AllReviews";
import Banner from "../../Banner/Banner";
import ExtraSection from "../../ExtraSection/ExtraSection";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Products from "../../Products/Products";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <AllReviews></AllReviews>
      <ExtraSection></ExtraSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;
