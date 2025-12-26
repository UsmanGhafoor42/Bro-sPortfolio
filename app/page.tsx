import Process from "./(root)/process/page";
import Hero from "./(root)/hero/page";
import Work from "./(root)/work/page";
import Testimonial from "./(root)/testimonial/page";
import Contact from "./(root)/contact/page";
import Footer from "./components/shared/footer";

const MainPage = () => {
  return (
    <>
      <Hero />
      <Work />
      <Process />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default MainPage;
