import styles from "../styles/preAssessmentForm.module.css";
import Head from "next/head";

import Navbar from "../components/navbar";
import CustomCursor from "../components/cursor";
import Footer from "../components/footer";
import { motion } from "framer-motion";
function PreAssessmentForm() {
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
      <div className={styles.homepagecontainer}>
        <div className={styles.lines}></div>
        <motion.div
          className={styles.PreAssessmentForm_form_wrapper}
          initial="hidden"
          animate="show"
          variants={container}
        >
          <div className={styles.PreAssessmentForm_form_container}>
            <motion.div
              className={styles.PreAssessmentForm_head}
              variants={fadein}
            >
              <p>Pre Assessment Form.</p>
            </motion.div>
            <motion.div
              className={styles.PreAssessmentForm_form_sidebyside}
              variants={toptobottom}
            >
              <p className={styles.heading_ofpreassist}>1. Company Detail</p>
            </motion.div>
            <div className={styles.PreAssessmentForm_form_sidebyside}>
              <motion.input
                type="text"
                name="cname"
                id="cname"
                placeholder="*Company Name"
                variants={toptobottom}
              />
              <motion.input
                type="text"
                name="cpname"
                id="cpname"
                placeholder="*Company Person Name"
                variants={toptobottom}
              />
            </div>
            <div className={styles.PreAssessmentForm_form_sidebyside}>
              <motion.input
                type="text"
                name="Mobile"
                id="Mobile"
                placeholder="*Mobile Number"
                variants={toptobottom}
              />
              <motion.input
                type="text"
                name="city"
                id="city"
                placeholder="*City"
                variants={toptobottom}
              />
            </div>
            <motion.div
              className={styles.PreAssessmentForm_textare_sidebyside}
              variants={toptobottom}
            >
              <label htmlFor="Landmark">*Landmark</label>
              <textarea name="Landmark" id="Landmark" rows="10"></textarea>
            </motion.div>
            <div className={styles.PreAssessmentForm_form2_sidebyside}>
              <div className={styles.marginRight}>
                <p className={styles.heading_ofpreassist}>
                  2. Type Of Business{" "}
                </p>
                <select>
                  <option value="">Select Type*</option>
                  <option value="Manufacturer">Manufacturer </option>
                  <option value="Distributor/Trader/Wholesaler">
                    Distributor/Trader/Wholesaler
                  </option>
                  <option value="Dealer/Retailers">Dealer/Retailers</option>
                </select>
              </div>
              <div>
                <p className={styles.heading_ofpreassist}>
                  3. Products in Deal with{" "}
                </p>
                <input
                  type="text"
                  name="pdeal"
                  id="pdeal"
                  placeholder="*Products in Deal with"
                />
              </div>
            </div>
            <div className={styles.PreAssessmentForm_form2_sidebyside}>
              <div className={styles.marginRight}>
                <p className={styles.heading_ofpreassist}>
                  4. Target Audience{" "}
                </p>

                <input
                  type="text"
                  name="TAudience"
                  id="TAudience"
                  placeholder="*Target Audience"
                />
              </div>
              <div>
                <p className={styles.heading_ofpreassist}>
                  5. Tentative Turnover Yearly Expected{" "}
                </p>
                <input
                  type="text"
                  name="Tentative"
                  id="Tentative"
                  placeholder="*Tentative Turnover Yearly Expected "
                />
              </div>
            </div>
            <div className={styles.PreAssessmentForm_form_sidebyside}>
              <p className={styles.heading_ofpreassist}>6. Order Capsize </p>
            </div>
            <div className={styles.PreAssessmentForm_form_sidebyside}>
              <input
                type="text"
                name="Minimum"
                id="Minimum"
                placeholder="*Minimum"
              />
              <input
                type="text"
                name="Raguler"
                id="Raguler"
                placeholder="*Raguler"
              />
            </div>
            <div className={styles.PreAssessmentForm_form_sidebyside}>
              <p className={styles.heading_ofpreassist}>
                7. Your Business Area
              </p>
            </div>
            <div className={styles.PreAssessmentForm_form_sidebyside}>
              <p className={styles.inner_heading_ofpreassist}>
                Where Business Now
              </p>
            </div>
            <div className={styles.PreAssessmentForm_form_sidebyside}>
              <input
                type="text"
                name="States"
                id="States"
                placeholder="*States"
              />
              <input
                type="text"
                name="Countries"
                id="Countries"
                placeholder="*Countries"
              />
            </div>
            <div className={styles.PreAssessmentForm_form_sidebyside}>
              <p className={styles.inner_heading_ofpreassist}>
                Next Target To Expand Business
              </p>
            </div>
            <div className={styles.PreAssessmentForm_form_sidebyside}>
              <input
                type="text"
                name="NStates"
                id="NStates"
                placeholder="*States"
              />
              <input
                type="text"
                name="NCountries"
                id="NCountries"
                placeholder="*Countries"
              />
            </div>
            <div className={styles.PreAssessmentForm_form2_sidebyside}>
              <div className={styles.marginRight}>
                <p className={styles.heading_ofpreassist}>8. Commission </p>
                <input
                  type="text"
                  name="Commission"
                  id="Commission"
                  placeholder="*Commission"
                />
              </div>
              <div>
                <p className={styles.heading_ofpreassist}>
                  9. Remarks & Reference{" "}
                </p>
                <textarea name="Remarks" id="Remarks" rows="5"></textarea>
              </div>
            </div>
            <div className={styles.last_form}>
              <button>Send</button>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
export default PreAssessmentForm;
