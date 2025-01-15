import styles from "../styles/CounterTheSucess.module.css";
import Image from "next/image";
import backitems2 from "../public/images/backitems2.svg";
import { motion } from "framer-motion";

function CounterTheSucess() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className={styles.how_wrapper}
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className={styles.how_container}>
        <motion.div
          className={styles.how_head}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <p>Success Counter</p>
        </motion.div>
        <div className={styles.how_head_discreaption}>
          <span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              The
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              success
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              counting
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.how_inner_discreaption}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              is
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.how_inner_discreaption}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              still
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.how_inner_discreaption}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              on.
            </motion.span>
          </span>
        </div>
      </div>
      <div className={styles.counter_container}>
        <motion.div
          className={styles.inner_container_counter}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 30 },
          }}
        >
          <div className={styles.inner_counter}>
            <h1>99+</h1>
            <p>Projects</p>
            <div className={styles.overlat_num}>99</div>
          </div>
          <div className={styles.overlat_num}>99</div>
          <div className={styles.enhancer_bix}>
            <Image src={backitems2} alt="background dots" />
          </div>
        </motion.div>
        <motion.div
          className={styles.inner_container_counter}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 30 },
          }}
        >
          <div className={styles.inner_counter}>
            <h1>20+</h1>
            <p>employees</p>
            <div className={styles.overlat_num}>20</div>
          </div>
          <div className={styles.overlat_num}>20</div>
          <div className={styles.enhancer_bix}>
            <Image src={backitems2} alt="background dots" />
          </div>
        </motion.div>
        <motion.div
          className={styles.inner_container_counter}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 30 },
          }}
        >
          <div className={styles.inner_counter}>
            <h1>4+</h1>
            <p>Clients</p>
            <div className={styles.overlat_num}>4</div>
          </div>
          <div className={styles.overlat_num}>4</div>
          <div className={styles.enhancer_bix}>
            <Image src={backitems2} alt="background dots" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default CounterTheSucess;
