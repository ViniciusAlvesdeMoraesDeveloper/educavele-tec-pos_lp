import Banner from "./components/banner"
import EdutecHero from "./components/herosection";
import ContactForm from "./components/ContactForm";
import Testimonials from "./components/testmonial";
import BottomUpper from "./components/bottomupper";

export default function Home() {
  return (
    <main>



        <Banner />
        <EdutecHero />
        <BottomUpper />
        <Testimonials />
        <ContactForm />
       
    </main>
  );
}
