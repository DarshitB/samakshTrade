import styles from "../styles/AllServices.module.css";
import webServices from "../public/images/webServices.svg";
import saleServices from "../public/images/saleServices.svg";
import Image from "next/image";
import { motion } from "framer-motion";
function AllServices() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className={styles.AllServices_wrapper}
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className={styles.AllServices_container}>
        <motion.div
          className={styles.AllServices_head}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <p>sales and analytics services.</p>
        </motion.div>
        <motion.div
          className={styles.AllServices_head_img}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <Image src={saleServices} alt="sell services" />
        </motion.div>
        <div className={styles.AllServices_head_discreaption}>
          <motion.span
            className={styles.AllServices_inner_discreaption}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -30, opacity: 0 },
            }}
          >
            Consultation
          </motion.span>{" "}
          <motion.span
            className={styles.AllServices_inner_discreaption}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -30, opacity: 0 },
            }}
          >
            analytics
          </motion.span>{" "}
          <motion.span
            className={styles.AllServices_inner_discreaption}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -30, opacity: 0 },
            }}
          >
            Lead generation
          </motion.span>{" "}
          <motion.span
            className={styles.AllServices_inner_discreaption}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -30, opacity: 0 },
            }}
          >
            sales
          </motion.span>{" "}
        </div>
      </div>
      <div className={styles.AllServices_container}>
        <motion.div
          className={styles.AllServices_head}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <p>web and marketing services.</p>
        </motion.div>
        <motion.div
          className={styles.AllServices_head_img}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <Image src={webServices} alt="web and marketing services" />
        </motion.div>
        <div className={styles.AllServices_head_discreaption}>
          <motion.span
            className={styles.AllServices_inner_discreaption}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -30, opacity: 0 },
            }}
          >
            Websites and application development
          </motion.span>{" "}
          <motion.span
            className={styles.AllServices_inner_discreaption}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -30, opacity: 0 },
            }}
          >
            digital marketing
          </motion.span>{" "}
          <motion.span
            className={styles.AllServices_inner_discreaption}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -30, opacity: 0 },
            }}
          >
            B2B marketing and development
          </motion.span>{" "}
          <motion.span
            className={styles.AllServices_inner_discreaption}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -30, opacity: 0 },
            }}
          >
            graphic design
          </motion.span>{" "}
          <motion.span
            className={styles.AllServices_inner_discreaption}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -30, opacity: 0 },
            }}
          >
            SEO, SEM
          </motion.span>{" "}
        </div>
      </div>
    </motion.div>
  );
}

export default AllServices;
