import styles from "../styles/about.module.css";
import Image from "next/image";
import backitems1 from "../public/images/backitems1.svg";
import backitems2 from "../public/images/backitems2.svg";
import backitems3 from "../public/images/backitems3.svg";
import { motion } from "framer-motion";
function About() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className={styles.about_wrapper}
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className={styles.background_backitems1}>
        <Image
          src={backitems1}
          className={styles.backitems1}
          alt="background image"
        />
      </div>
      <div className={styles.background_backitems2}>
        <Image
          src={backitems2}
          className={styles.backitems2}
          alt="background image"
        />
      </div>
      <div className={styles.background_backitems3}>
        <Image
          src={backitems3}
          className={styles.backitems3}
          alt="background image"
        />
      </div>
      <div className={styles.about_container}>
        <motion.div
          className={styles.about_head}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <p>About Us.</p>
        </motion.div>
        <div className={styles.about_head_discreaption}>
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
              are
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
              Samaksh
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
              Trade,
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
              established
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
              in
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
              2022.
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
              We
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
              are a
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
              group
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
              of
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
              people
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
              with
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
              more
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
              than
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
              10
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
              years
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
              of
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
              IT
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
              background.
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.about_inner_discreaption}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.32 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              We
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.about_inner_discreaption}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.34 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              specialize
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.about_inner_discreaption}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.26 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              in
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
              Located
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
              in
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
              Jamnagar,
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.34 }}
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
              transition={{ duration: 0.5, delay: 0.36 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              heart
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.38 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              of
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              growth
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.42 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              in
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.44 }}
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
              transition={{ duration: 0.5, delay: 0.46 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              area.
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
              providing
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.34 }}
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
              transition={{ duration: 0.5, delay: 0.36 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              types
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.38 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              of
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              IT
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.textformotion}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.42 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              solutions.
            </motion.span>
            <span>&nbsp;</span>
          </span>
        </div>
        <div className={styles.about_head_discreaption}>
          <motion.p
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 10, opacity: 0 },
            }}
          >
            Samaksh trade was established in the year 2022 with the objective of
            providing excellence in marketing, branding and IT solutions. Since
            then we have helped our customers grow faster and today we are
            providing services to various industries in more than 10 countries.
            Our in-depth knowledge and technical ability in graphics design and
            web and mobile IT solutions create real value for you through the
            brand and digital transformation. Our expertise in emerging
            technologies helps us make the most essential leaps for a variety of
            industries.
          </motion.p>
          <motion.p
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 10, opacity: 0 },
            }}
          >
            With the technical skills, professional approach, and exceptional
            service, soon a company founded by an enthusiast team with different
            mastery of skills grew into an organization with 10+ full-time
            creative & skilled team members. Over the years, Samaksh Trade has
            successfully catered to small, medium, and large companies in varied
            business areas.
          </motion.p>
          <motion.p
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 10, opacity: 0 },
            }}
          >
            We have set quality criteria for each activity and the progress of
            the work is closely monitored at each step. There is a definite
            schedule for projects and quality or schedule is never compromised.
            We work extra hours voluntarily instead of compromising with the
            delivery schedule.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
