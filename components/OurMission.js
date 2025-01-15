import styles from "../styles/Ourmission.module.css";
import { motion } from "framer-motion";
function OurMission() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className={styles.OurMissin_wrapper}
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className={styles.OurMissin_container}>
        <motion.div
          className={styles.OurMissin_head}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <p>Our mission .</p>
        </motion.div>
        <div className={styles.OurMissin_head_discreaption}>
          <motion.span
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 10, opacity: 0 },
            }}
          >
            Our mission is to provide{" "}
            <span className={styles.OurMissin_inner_discreaption}>
              seamless experience
            </span>{" "}
            with advanced technology to every business there is.
          </motion.span>
        </div>
        <div className={styles.OurMissin_head_discreaption}>
          <motion.p
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 10, opacity: 0 },
            }}
          >
            No matter what kind of business you have, we believe we can help you
            grow it even more with IT solutions tailored specifically to your
            needs, and that too, at the best price possible.
          </motion.p>
        </div>
      </div>
      <div className={styles.OurMissin_container}>
        <motion.div
          className={styles.OurMissin_head}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <p>Our Vision .</p>
        </motion.div>
        <div className={styles.OurMissin_head_discreaption}>
          <motion.span
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 10, opacity: 0 },
            }}
          >
            Samaksh Trade is an established name in the leading services sector
            and we aspire to{" "}
            <span className={styles.OurMissin_inner_discreaption}>
              grow even bigger
            </span>{" "}
            in the coming time.{" "}
          </motion.span>
        </div>
        <div className={styles.OurMissin_head_discreaption}>
          <motion.p
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 10, opacity: 0 },
            }}
          >
            We believe in adopting all the latest technologies that can help us
            deliver creative service with the utmost customer satisfaction.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default OurMission;
