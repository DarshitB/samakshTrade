import styles from "../styles/career.module.css";
import Head from "next/head";

import Navbar from "../components/navbar";
import CustomCursor from "../components/cursor";
import Footer from "../components/footer";

import { motion } from "framer-motion";
function Career() {
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
  const fadein = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: [0.6, 0.99, 0.99, 0.95],
        duration: 2,
      },
    },
  };
  return (
    <div>
      <Head>
        <title>Career - Samaksh Trade Consultants</title>
        <meta
          name="description"
          content="we provide web and app services, Software Services, Business Marketing(B2B,B2E), Digital Marketing, Video Marketing, Search Engine Optimization(SEO), Graphics Design, Business To Customer Services(B2C)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomCursor />
      <Navbar />
      <motion.div
        className={styles.homepagecontainer}
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className={styles.lines}></div>
        <div className={styles.Career_form_wrapper}>
          <div className={styles.Career_form_container}>
            <motion.div className={styles.Career_head} variants={fadein}>
              <p>Career.</p>
            </motion.div>
            <div className={styles.career_form_sidebyside}>
              <motion.input
                type="text"
                name="fname"
                id="fname"
                placeholder="*first Name"
                variants={toptobottom}
              />
              <motion.input
                type="text"
                name="Surename"
                id="Surename"
                placeholder="*Surename"
                variants={toptobottom}
              />
            </div>
            <div className={styles.career_form_sidebyside}>
              <motion.input
                type="text"
                name="email"
                id="email"
                placeholder="*E-mail"
                variants={toptobottom}
              />
              <motion.input
                type="text"
                name="Phone"
                id="Phone"
                placeholder="*Phone"
                variants={toptobottom}
              />
            </div>
            <div className={styles.last_form}>
              <motion.input
                type="text"
                name="subject"
                id="subject"
                placeholder="*Subject"
                variants={toptobottom}
              />
              <motion.label htmlFor="massage" variants={toptobottom}>
                *Massage
              </motion.label>
              <motion.textarea
                name="massage"
                id="massage"
                rows="10"
                variants={toptobottom}
              ></motion.textarea>
              <button>Send</button>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
export default Career;
