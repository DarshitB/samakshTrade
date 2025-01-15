import styles from "../styles/contact.module.css";
import { motion } from "framer-motion";
function Contact() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className={styles.contact_wrapper}
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className={styles.contact_container}>
        <motion.div
          className={styles.contact_head}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <p>contact.</p>
        </motion.div>
        <div className={styles.contact_head_discreaption}>
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
              Contact
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
              us
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
              and
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
              feel
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
              the
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
              creativity.
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
              We
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
              have
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
              worked
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
              with
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
              over
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.contact_inner_discreaption}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              30
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.contact_inner_discreaption}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.14 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              top
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.contact_inner_discreaption}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              brands.
            </motion.span>
          </span>
        </div>
        <div className={styles.contact_head_discreaption}>
          <motion.h3
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -20, opacity: 0 },
            }}
          >
            Address
          </motion.h3>
          <motion.p
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -20, opacity: 0 },
            }}
          >
            Samaksh Trade consultants <br />
            227 `Madhav Darshan` near Lal Bungalow,
            <br />
            Jamnagar-361001
          </motion.p>
          <motion.a
            href="tel:+911234567891"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -20, opacity: 0 },
            }}
          >
            +91-12345 67891
          </motion.a>
          <motion.a
            href="mailto:info@samakshtrade.com"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -20, opacity: 0 },
            }}
          >
            info@samakshtrade.com
          </motion.a>
        </div>
      </div>
      <div className={styles.howwehelpimgcontainer}>
        <div className={styles.contact_form}>
          <motion.input
            type="text"
            name="funame"
            id="funame"
            placeholder="*Full Name"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 10, opacity: 0 },
            }}
          />
          <motion.input
            type="text"
            name="email"
            id="email"
            placeholder="*E-mail"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 10, opacity: 0 },
            }}
          />
          <motion.input
            type="text"
            name="subject"
            id="subject"
            placeholder="*Subject"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 10, opacity: 0 },
            }}
          />
          <motion.label
            htmlFor="massage"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 10, opacity: 0 },
            }}
          >
            *Massage
          </motion.label>
          <motion.textarea
            name="massage"
            id="massage"
            rows="10"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 10, opacity: 0 },
            }}
          ></motion.textarea>
          <motion.button
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 10, opacity: 0 },
            }}
          >
            Send
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
