import Head from "next/head";
import styles from "../styles/home.module.css";
import About from "../components/about";
import CustomCursor from "../components/cursor";
import Herosection from "../components/herosection";
import Howwehelp from "../components/howwehelp";
import Navbar from "../components/navbar";
import Whoweare from "../components/whoweare";
import Footer from "../components/footer";
import Globalappearance from "../components/globalappearance";
import CounterTheSucess from "../components/counterTheSucess";

export default function Home() {
  return (
    <div className={styles.main_container}>
      <Head>
        <title>Samaksh Trade Consultants</title>
        <meta
          name="description"
          content="we provide web and app services, Software Services, Business Marketing(B2B,B2E), Digital Marketing, Video Marketing, Search Engine Optimization(SEO), Graphics Design, Business To Customer Services(B2C)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomCursor />
      <Navbar />
      <div className={styles.homepagecontainer}>
        <div className={styles.lines}></div>
        <Herosection />
        <About />
        <Howwehelp />
        <CounterTheSucess />
        <Whoweare />
        <Globalappearance />
      </div>
      <Footer />
    </div>
  );
}
