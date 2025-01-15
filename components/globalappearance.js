import styles from "../styles/globalappearance.module.css";
import Image from "next/image";
import application from "../public/images/application.jpg";
import web from "../public/images/web.jpg";
import graphics from "../public/images/graphics.jpg";
import { motion } from "framer-motion";
function Globalappearance() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className={styles.globalappearance_wrapper}
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className={styles.globalappearance_container}>
        <motion.div
          className={styles.globalappearance_head}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <p>global appearance.</p>
        </motion.div>
        <div className={styles.globalappearance_head_discreaption}>
          <span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.02 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              We
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.04 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              work
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              with
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              over
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.globalappearance_inner_discreaption}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              30
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.globalappearance_inner_discreaption}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              top-tire
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.globalappearance_inner_discreaption}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.14 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              brands
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              and
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              industry
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              leaderss
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              around
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              the
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
              world.
            </motion.span>
          </span>
        </div>
        <div className={styles.globalappearance_head_discreaption}>
          <motion.p
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 10, opacity: 0 },
            }}
          >
            Worked with so many brands and individuals still customer
            satisfaction is the priority for us, we can do anything for that. we
            believe in giving our customers the best possible creative as well
            as fast service. here is our best work that brands recognized.....
          </motion.p>
        </div>
        <div className={styles.globalappearance_head_discreaption}>
          <div className={styles.globle_work_container}>
            <motion.div
              className={styles.work_img_container}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              <Image
                src={web}
                className={styles.work_img}
                alt="website service"
              />
              <div className={styles.overlay}></div>
              <div className={styles.work_detailes}>
                <h1>Padvise</h1>
                <p>Web</p>
              </div>
            </motion.div>
            <motion.div
              className={styles.work_img_container}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              <Image
                src={graphics}
                className={styles.work_img}
                alt="graphics service"
              />
              <div className={styles.overlay}></div>
              <div className={styles.work_detailes}>
                <h1>Mixed Up</h1>
                <p>Graphic Design</p>
              </div>
            </motion.div>
            <motion.div
              className={styles.work_img_container}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              <Image
                src={application}
                className={styles.work_img}
                alt="application service"
              />
              <div className={styles.overlay}></div>
              <div className={styles.work_detailes}>
                <h1>My Payment</h1>
                <p>Application</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Globalappearance;
