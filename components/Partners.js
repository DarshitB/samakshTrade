import styles from "../styles/partners.module.css";
import Image from "next/image";

import siddharth from "../public/images/siddharth.jpg";
import Modal from "./model";
import React, { useState } from "react";
import { motion } from "framer-motion";
function Partners() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const [showsiddharth, setShowsiddharth] = useState(false);
  const handelsiddharthTRUE = () => setShowsiddharth(true);
  const handelsiddharthfalse = () => setShowsiddharth(false);
  return (
    <motion.div
      className={styles.Partners_wrapper}
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className={styles.Partners_container}>
        <motion.div
          className={styles.Partners_head}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <p>Partners Insight.</p>
        </motion.div>
        <div className={styles.Partners_head_discreaption}>
          <div className={styles.partners_mainbox}>
            <div className={styles.partnes}>
              <motion.div
                className={styles.parnet_conteiner}
                onClick={handelsiddharthTRUE}
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                variants={{
                  visible: { y: 0, opacity: 1 },
                  hidden: { y: 30, opacity: 0 },
                }}
              >
                <Image
                  src={siddharth}
                  className={styles.parner_img}
                  alt="partner image"
                />
                <div className={styles.overlay}></div>
                <p className={styles.co_founder}>Co-founder and director</p>
                <div className={styles.parner_detailes}>
                  <h1>siddharth</h1>
                  <p>IT Marketing</p>
                  <span>siddharth@gmail.com</span>
                </div>
                <div className={styles.social_media}>
                  <div>
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 177 176.9"
                    >
                      <g>
                        <path
                          d="M88.4,0.2c48.8-0.1,88.5,39.4,88.6,87.9c0.1,48.5-40.2,88.8-88.8,88.6C39.7,176.6,0,136.7,0,88.2C0,39.5,39.5,0.3,88.4,0.2
		z M74.5,140.6c7.3,0,13.9,0,21,0c0-17.4,0-34.3,0-52c5.3,0,10.2,0,15.6,0c0.6-7.3,1.2-14,1.8-21.4c-6,0-11.1,0-16.4,0
		c0-1.9,0-3.2,0-4.6c0-7.8,0.4-8.2,8.1-8.2c2.6,0,5.2,0,7.8,0c0-6.5,0-12.1,0-18.1c-6.3,0-12.2-0.2-18.2,0
		c-11.3,0.4-18.8,7.9-19.5,19.3c-0.2,3.8,0,7.5,0,11.5c-3.9,0.2-7.1,0.4-10.1,0.6c0,7.2,0,13.8,0,20.6c3.5,0.2,6.7,0.4,10.1,0.7
		C74.5,106.4,74.5,123.3,74.5,140.6z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 177 176.9"
                    >
                      <g>
                        <path
                          d="M88.3,0c24.3,0,48.6,0,73,0C172.5,0,177,4.6,177,15.8c0,48.3,0,96.6,0,144.9c0,11.7-4.5,16.2-16.4,16.2
		c-48.1,0-96.3,0-144.4,0C4.6,176.9,0,172.4,0,161c0-48.5,0-96.9,0-145.4C0,4.6,4.5,0,15.3,0C39.7,0,64,0,88.3,0z M152.4,151.2
		c-0.6-20.8-0.3-41.1-2-61.2c-1.2-14.6-9-21.9-21.9-24.2c-13-2.3-24.4,0.5-33.4,12.8c0-4.6,0-7.8,0-11.1c-8.6,0-16.6,0-24.8,0
		c0,28.1,0,55.8,0,83.6c8.7,0,17,0,25.8,0c0-4.2,0-8,0-11.8c0.2-12.3-0.1-24.7,0.8-36.9c0.7-10.1,6.5-14.6,15.7-14.2
		c7.9,0.3,12.2,5.2,12.6,15.5c0.4,9.5,0.3,19,0.4,28.5c0,6.3,0,12.5,0,19.1C134.5,151.2,142.8,151.2,152.4,151.2z M53.2,151.2
		c0-28.1,0-55.9,0-83.7c-8.8,0-17.1,0-25.7,0c0,28,0,55.7,0,83.7C36.1,151.2,44.5,151.2,53.2,151.2z M40.5,55.5
		c8.5-0.1,15.1-6.8,14.9-15.3c-0.2-8.3-6.7-14.8-15-14.9c-8.3-0.1-15.3,6.9-15.3,15.2C25.2,48.8,32.1,55.5,40.5,55.5z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 177 176.9"
                    >
                      <g>
                        <path
                          d="M177.2,88.6c-0.4,14.3-0.3,28.6-1.3,42.9c-1.7,25-19.8,43.3-44.7,44.6c-22.1,1.1-44.3,0.9-66.4,0.8c-9.4,0-19-0.3-28.2-2.4
		c-20.8-4.7-34.9-21.3-35.9-42.9c-1-22.1-0.9-44.2-0.9-66.3c0-8.9,0.3-17.9,2-26.6C6.2,16.9,22.8,2.5,45,1C57.1,0.1,69.3,0.1,81.4,0
		C95.7,0,110,0,124.3,0.3c11.8,0.3,23,2.7,32.7,9.9c11.8,8.8,17.8,20.9,18.8,35.2C176.9,59.8,176.8,74.2,177.2,88.6z M161.1,88.7
		c-0.2,0-0.4,0-0.5,0c0-10.5,0.1-21.1,0-31.6c-0.1-8.5-0.7-17-5.1-24.6c-5.9-10.4-15.6-15.3-27-15.5c-26.6-0.5-53.3-0.6-79.9,0
		c-19.2,0.5-31.4,12.7-31.9,31.9c-0.7,26.4-0.7,52.8,0,79.2c0.5,19.2,12.7,31.4,31.9,31.9c26.5,0.7,53.1,0.6,79.6,0
		c18.9-0.5,30.8-12.8,31.8-31.8C160.6,115.1,160.7,101.9,161.1,88.7z"
                        />
                        <path
                          d="M134,88.5c0,25.1-20.7,45.8-45.8,45.7c-25.2-0.1-45.8-20.8-45.6-45.9c0.1-25.1,20.6-45.5,45.7-45.5
		C113.3,42.8,134,63.4,134,88.5z M58.7,88.5c0,15.9,13.1,29.2,29.3,29.5c15.9,0.3,29.7-13.4,29.7-29.5c0-16-13.1-29.2-29.3-29.5
		C72.5,58.7,58.8,72.4,58.7,88.5z"
                        />
                        <path
                          d="M135.7,30.5c6.1,0,10.8,4.8,10.7,11c-0.1,5.9-4.8,10.5-10.8,10.5c-6.1,0-10.7-4.8-10.6-10.9C125,35,129.7,30.5,135.7,30.5z
		"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </motion.div>
              <Modal onClose={handelsiddharthfalse} show={showsiddharth}>
                <div className="imagecontainer">
                  <Image
                    src={siddharth}
                    className={styles.modelimg}
                    alt="partner image"
                  />
                </div>
                <div className="detailes_box">
                  <div className="detailes_inner">
                    <span>
                      Hey! I`m Siddharth, Co-founder and director of samaksh
                      trade
                    </span>
                    <p>
                      I am an enthusiast IT Marketer at Samaksh Trade. I have
                      experience of more than 10 years in this field. My vision
                      is to understand customer`s needs and fulfill them.
                    </p>
                    <h1>siddharth</h1>
                    <p>Co-Founder and Director</p>
                    <p>IT Marketing</p>
                    <p>siddharth@gmail.com</p>
                    <div className="social_media">
                      <div>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 177 176.9"
                        >
                          <g>
                            <path
                              d="M88.4,0.2c48.8-0.1,88.5,39.4,88.6,87.9c0.1,48.5-40.2,88.8-88.8,88.6C39.7,176.6,0,136.7,0,88.2C0,39.5,39.5,0.3,88.4,0.2
		z M74.5,140.6c7.3,0,13.9,0,21,0c0-17.4,0-34.3,0-52c5.3,0,10.2,0,15.6,0c0.6-7.3,1.2-14,1.8-21.4c-6,0-11.1,0-16.4,0
		c0-1.9,0-3.2,0-4.6c0-7.8,0.4-8.2,8.1-8.2c2.6,0,5.2,0,7.8,0c0-6.5,0-12.1,0-18.1c-6.3,0-12.2-0.2-18.2,0
		c-11.3,0.4-18.8,7.9-19.5,19.3c-0.2,3.8,0,7.5,0,11.5c-3.9,0.2-7.1,0.4-10.1,0.6c0,7.2,0,13.8,0,20.6c3.5,0.2,6.7,0.4,10.1,0.7
		C74.5,106.4,74.5,123.3,74.5,140.6z"
                            />
                          </g>
                        </svg>
                      </div>
                      <div>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 177 176.9"
                        >
                          <g>
                            <path
                              d="M88.3,0c24.3,0,48.6,0,73,0C172.5,0,177,4.6,177,15.8c0,48.3,0,96.6,0,144.9c0,11.7-4.5,16.2-16.4,16.2
		c-48.1,0-96.3,0-144.4,0C4.6,176.9,0,172.4,0,161c0-48.5,0-96.9,0-145.4C0,4.6,4.5,0,15.3,0C39.7,0,64,0,88.3,0z M152.4,151.2
		c-0.6-20.8-0.3-41.1-2-61.2c-1.2-14.6-9-21.9-21.9-24.2c-13-2.3-24.4,0.5-33.4,12.8c0-4.6,0-7.8,0-11.1c-8.6,0-16.6,0-24.8,0
		c0,28.1,0,55.8,0,83.6c8.7,0,17,0,25.8,0c0-4.2,0-8,0-11.8c0.2-12.3-0.1-24.7,0.8-36.9c0.7-10.1,6.5-14.6,15.7-14.2
		c7.9,0.3,12.2,5.2,12.6,15.5c0.4,9.5,0.3,19,0.4,28.5c0,6.3,0,12.5,0,19.1C134.5,151.2,142.8,151.2,152.4,151.2z M53.2,151.2
		c0-28.1,0-55.9,0-83.7c-8.8,0-17.1,0-25.7,0c0,28,0,55.7,0,83.7C36.1,151.2,44.5,151.2,53.2,151.2z M40.5,55.5
		c8.5-0.1,15.1-6.8,14.9-15.3c-0.2-8.3-6.7-14.8-15-14.9c-8.3-0.1-15.3,6.9-15.3,15.2C25.2,48.8,32.1,55.5,40.5,55.5z"
                            />
                          </g>
                        </svg>
                      </div>
                      <div>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 177 176.9"
                        >
                          <g>
                            <path
                              d="M177.2,88.6c-0.4,14.3-0.3,28.6-1.3,42.9c-1.7,25-19.8,43.3-44.7,44.6c-22.1,1.1-44.3,0.9-66.4,0.8c-9.4,0-19-0.3-28.2-2.4
		c-20.8-4.7-34.9-21.3-35.9-42.9c-1-22.1-0.9-44.2-0.9-66.3c0-8.9,0.3-17.9,2-26.6C6.2,16.9,22.8,2.5,45,1C57.1,0.1,69.3,0.1,81.4,0
		C95.7,0,110,0,124.3,0.3c11.8,0.3,23,2.7,32.7,9.9c11.8,8.8,17.8,20.9,18.8,35.2C176.9,59.8,176.8,74.2,177.2,88.6z M161.1,88.7
		c-0.2,0-0.4,0-0.5,0c0-10.5,0.1-21.1,0-31.6c-0.1-8.5-0.7-17-5.1-24.6c-5.9-10.4-15.6-15.3-27-15.5c-26.6-0.5-53.3-0.6-79.9,0
		c-19.2,0.5-31.4,12.7-31.9,31.9c-0.7,26.4-0.7,52.8,0,79.2c0.5,19.2,12.7,31.4,31.9,31.9c26.5,0.7,53.1,0.6,79.6,0
		c18.9-0.5,30.8-12.8,31.8-31.8C160.6,115.1,160.7,101.9,161.1,88.7z"
                            />
                            <path
                              d="M134,88.5c0,25.1-20.7,45.8-45.8,45.7c-25.2-0.1-45.8-20.8-45.6-45.9c0.1-25.1,20.6-45.5,45.7-45.5
		C113.3,42.8,134,63.4,134,88.5z M58.7,88.5c0,15.9,13.1,29.2,29.3,29.5c15.9,0.3,29.7-13.4,29.7-29.5c0-16-13.1-29.2-29.3-29.5
		C72.5,58.7,58.8,72.4,58.7,88.5z"
                            />
                            <path
                              d="M135.7,30.5c6.1,0,10.8,4.8,10.7,11c-0.1,5.9-4.8,10.5-10.8,10.5c-6.1,0-10.7-4.8-10.6-10.9C125,35,129.7,30.5,135.7,30.5z
		"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Partners;
