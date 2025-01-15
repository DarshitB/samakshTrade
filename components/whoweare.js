import styles from "../styles/whoweare.module.css";
import Image from "next/image";
import backitems4 from "../public/images/backitems4.svg";
import { motion } from "framer-motion";
function Whoweare() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div className={styles.who_wrapper}>
      <div className={styles.background_backitems4}>
        <Image src={backitems4} className={styles.backitems4} alt="background image" />
      </div>
      <motion.div
        className={styles.who_container}
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div
          className={styles.who_head}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <p>Who we are.</p>
        </motion.div>
        <div className={styles.who_head_discreaption}>
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
              an
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
              award-winning
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
              creative
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
              agency
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
              with
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
              more
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
              than
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
              300
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
              projects.
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
              We
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
              approach
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
              every
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
              project
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
              with
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
              same
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.who_inner_discreaption}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.24 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              passion
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.who_inner_discreaption}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.26 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              and
            </motion.span>
            <span>&nbsp;</span>
            <motion.span
              className={styles.who_inner_discreaption}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 10, opacity: 0 },
              }}
            >
              dedication
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
              and
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
              this
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
              has
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
              always
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
              been
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
              one
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
              of
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
              the
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
              linchpins
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
              of
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
              our
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
              work.
            </motion.span>
          </span>
        </div>
        <div className={styles.who_head_discreaption}>
          <div className={styles.who_rule_at}>
            <div>
              <motion.p
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={{
                  visible: { y: 0, opacity: 1 },
                  hidden: { y: 10, opacity: 0 },
                }}
              >
                Samaksh Trade Consultants is a global information technology and
                marketing company committed to empowering business
                transformation. Our association works to ensure the best quality
                of marketing solutions for our clients and their businesses. We
                provide customized solutions to allow you to undertake
                technology-based business transformation with today`s dynamic
                digital business environment.
              </motion.p>
              <motion.p
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={{
                  visible: { y: 0, opacity: 1 },
                  hidden: { y: 10, opacity: 0 },
                }}
              >
                We provide all kinds of services and also develop creative
                solutions for small and big brands such as web and application
                development, graphics designs, digital marketing and much more.
                Because of this, we rule over many aspects of like...
              </motion.p>
            </div>
            <div>
              <div className={styles.rulecontainer}>
                <motion.h5
                  className={styles.progresstitle}
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  variants={{
                    visible: { x: 0, opacity: 1 },
                    hidden: { x: -10, opacity: 0 },
                  }}
                >
                  Concept{" "}
                </motion.h5>
                <div className={styles.progressbar}>
                  <motion.div
                    className={styles.proggress92}
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    variants={{
                      visible: { width: "92%", opacity: 1 },
                      hidden: { width: "0%", opacity: 0 },
                    }}
                  ></motion.div>
                  <motion.div
                    className={styles.percentCount}
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    variants={{
                      visible: { x: "-50%", opacity: 1 },
                      hidden: { x: 10, opacity: 0 },
                    }}
                  >
                    92%
                  </motion.div>
                </div>
              </div>
              <div className={styles.rulecontainer}>
                <motion.h5
                  className={styles.progresstitle}
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  variants={{
                    visible: { x: 0, opacity: 1 },
                    hidden: { x: -10, opacity: 0 },
                  }}
                >
                  creativity{" "}
                </motion.h5>
                <div className={styles.progressbar}>
                  <motion.div
                    className={styles.proggress96}
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    variants={{
                      visible: { width: "96%", opacity: 1 },
                      hidden: { width: "0%", opacity: 0 },
                    }}
                  ></motion.div>
                  <motion.div
                    className={styles.percentCount}
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    variants={{
                      visible: { x: "-50%", opacity: 1 },
                      hidden: { x: 10, opacity: 0 },
                    }}
                  >
                    96%
                  </motion.div>
                </div>
              </div>
              <div className={styles.rulecontainer}>
                <motion.h5
                  className={styles.progresstitle}
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  variants={{
                    visible: { x: 0, opacity: 1 },
                    hidden: { x: -10, opacity: 0 },
                  }}
                >
                  Production{" "}
                </motion.h5>
                <div className={styles.progressbar}>
                  <motion.div
                    className={styles.proggress90}
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    variants={{
                      visible: { width: "90%", opacity: 1 },
                      hidden: { width: "0%", opacity: 0 },
                    }}
                  ></motion.div>
                  <motion.div
                    className={styles.percentCount}
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    variants={{
                      visible: { x: "-50%", opacity: 1 },
                      hidden: { x: 10, opacity: 0 },
                    }}
                  >
                    90%
                  </motion.div>
                </div>
              </div>
              <div className={styles.rulecontainer}>
                {" "}
                <motion.h5
                  className={styles.progresstitle}
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  variants={{
                    visible: { x: 0, opacity: 1 },
                    hidden: { x: -10, opacity: 0 },
                  }}
                >
                  satisfaction{" "}
                </motion.h5>
                <div className={styles.progressbar}>
                  <motion.div
                    className={styles.proggress99}
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    variants={{
                      visible: { width: "99%", opacity: 1 },
                      hidden: { width: "0%", opacity: 0 },
                    }}
                  ></motion.div>
                  <motion.div
                    className={styles.percentCount}
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    variants={{
                      visible: { x: "-50%", opacity: 1 },
                      hidden: { x: 10, opacity: 0 },
                    }}
                  >
                    99%
                  </motion.div>
                </div>
              </div>
              <div className={styles.rulecontainer}>
                <motion.h5
                  className={styles.progresstitle}
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  variants={{
                    visible: { x: 0, opacity: 1 },
                    hidden: { x: -10, opacity: 0 },
                  }}
                >
                  innovation{" "}
                </motion.h5>
                <div className={styles.progressbar}>
                  <motion.div
                    className={styles.proggress97}
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    variants={{
                      visible: { width: "97%", opacity: 1 },
                      hidden: { width: "0%", opacity: 0 },
                    }}
                  ></motion.div>
                  <motion.div
                    className={styles.percentCount}
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    variants={{
                      visible: { x: "-50%", opacity: 1 },
                      hidden: { x: 10, opacity: 0 },
                    }}
                  >
                    97%
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Whoweare;
