import styles from "../styles/FreeConsultation.module.css";
import Head from "next/head";
import Navbar from "../components/navbar";
import CustomCursor from "../components/Cursor";
import Footer from "../components/footer";
import Iframe from "react-iframe";
import Contact from "../components/contect";
import { motion } from "framer-motion";
function FreeConsultation() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const toptobottom = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.99, 0.99, 0.95],
        duration: 0.5,
      },
    },
  };
  return (
    <div>
      <Head>
        <title>Free Consultation - Samaksh Trade Consultants</title>
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
          className={styles.FreeConsultation_img_wrapper}
          initial="hidden"
          animate="show"
          variants={container}
        >
          <div className={styles.FreeConsultation_img_container}>
            <motion.div
              className={styles.FreeConsultation_img}
              variants={toptobottom}
            >
              <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.8960618884757!2d70.06344672639807!3d22.470539830803766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39576b28ec86e037%3A0x527f00454ead6f6f!2sSamaksh%20Trade%20Consultants!5e0!3m2!1sen!2sin!4v1653198347543!5m2!1sen!2sin"
                id="myId"
                className={styles.mapwithback}
                display="initial"
                position="absolute"
                loading="lazy"
              ></Iframe>
            </motion.div>
          </div>
        </motion.div>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
export default FreeConsultation;
