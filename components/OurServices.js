import styles from "../styles/OurServices.module.css";
import Image from "next/image";
import application from "../public/images/application.jpg";
import web from "../public/images/web.jpg";
import graphics from "../public/images/graphics.jpg";
import { motion } from "framer-motion";
function OurServices() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className={styles.OurServices_wrapper}
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className={styles.OurServices_container}>
        <motion.div
          className={styles.OurServices_head}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <p>Our Services.</p>
        </motion.div>
        <div className={styles.OurServices_head_discreaption}>
          <span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
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
              transition={{ duration: 0.5, delay: 0.02 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              provide
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
              various
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
              services
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
              like
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.OurServices_inner_discreaption}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              website
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.OurServices_inner_discreaption}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              and
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.OurServices_inner_discreaption}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.14 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              app
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
              development
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
              for
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
              those
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              who
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.14 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              need
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.OurServices_inner_discreaption}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              greater
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.OurServices_inner_discreaption}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              reach.
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
              Also
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.22 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              Social
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.24 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              media
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.26 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              marketing
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
              digital
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
              marketing
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.22 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              to
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.24 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              promote
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.26 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              your
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.28 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              unique
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
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
              transition={{ duration: 0.5, delay: 0.32 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              innovative
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.26 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              products/service.
            </motion.span>
          </span>
        </div>
        <div className={styles.OurServices_head_discreaption}>
          <motion.p
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 10, opacity: 0 },
            }}
          >
            We can help your potential clients reach you easily through SEO and
            business-to customer service. All this and many other kind of
            personalized software solutions that will benefit your business
            greatly.
          </motion.p>
        </div>
        <div className={styles.OurServices_head_discreaption}>
          <div className={styles.OurServices_work_container}>
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
              <Image src={web} className={styles.work_img} alt="website service" />
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
              <Image src={graphics} className={styles.work_img} alt="graphics service" />
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
              <Image src={application} className={styles.work_img} alt="application service" />
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

export default OurServices;
