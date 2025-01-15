import styles from "../styles/AboutUs.module.css";
import Imag from "next/image";
import Head from "next/head";
import aboutimg from "../public/images/aboutusimg.jpg";

import Navbar from "../components/navbar";
import CustomCursor from "../components/Cursor";
import About from "../components/about";
import Footer from "../components/footer";
import OurMission from "../components/OurMission";
import Partners from "../components/Partners";
import { motion } from "framer-motion";

function AboutUs() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const toptobottom = {
    hidden: { y: 10, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.99, 0.99, 0.95],
        duration: 0.5,
      },
    },
  };
  const toptobottom1 = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.99, 0.99, 0.95],
        duration: 0.5,
      },
    },
  };
  const fadein = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };
  return (
    <div>
      <Head>
        <title>About Us - Samaksh Trade Consultants</title>
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
        <motion.div
          className={styles.about_img_wrapper}
          initial="hidden"
          animate="show"
          variants={container}
        >
          <div className={styles.about_img_container}>
            <motion.div className={styles.about_img} variants={toptobottom1}>
              <Imag src={aboutimg} className={styles.backgroundimg} alt="hero image about us" />
            </motion.div>
            <motion.div
              className={styles.overlay_of_abouthero}
              variants={fadein}
            ></motion.div>
            <div className={styles.imagedetailes}>
              <h1>
                <motion.span variants={toptobottom}>About</motion.span>
                <motion.span variants={toptobottom}>&nbsp;</motion.span>
                <motion.span variants={toptobottom}>Us</motion.span>
              </h1>
              <p>
                <motion.span variants={toptobottom}>Home</motion.span>
                <motion.span variants={toptobottom}>&nbsp;</motion.span>
                <motion.span variants={toptobottom}>/</motion.span>
                <motion.span variants={toptobottom}>&nbsp;</motion.span>
                <motion.span variants={toptobottom}>About</motion.span>
                <motion.span variants={toptobottom}>&nbsp;</motion.span>
                <motion.span variants={toptobottom}>Us</motion.span>
              </p>
            </div>
          </div>
        </motion.div>
        <About />
        <OurMission />
        <Partners />
      </div>
      <Footer />
    </div>
  );
}
export default AboutUs;
