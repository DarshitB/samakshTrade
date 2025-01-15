import styles from "../styles/footer.module.css";
import Image from "next/image";
import linkdin from "../public/images/linkdin.svg";
import instagram from "../public/images/instagram.svg";
import facebook from "../public/images/facebook.svg";
import twitter from "../public/images/twitter.svg";
import Link from "next/link";

import map from "../public/images/map.jpg";
function Footer() {
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer_inner_main}>
        <div className={styles.footer_head}>
          <p>Get in touch.</p>
        </div>
        <div className={styles.footer_head_discreaption}>
          <span>
            contact us <br />
            <Link href="/FreeConsultation">
              <span className={styles.footer_inner_discreaption}>
                say hello!
              </span>
            </Link>
          </span>
        </div>
        <div className={styles.footer_head_discreaption}>
          <div className={styles.footer_detailes_box}>
            <div className={styles.footer_inner_detailes}>
              <h3>Reach Us Out</h3>
              <p>
                Samaksh Trade consultants <br />
                227 `Madhav Darshan` near Lal Bungalow, Jamnagar-361001
              </p>
              <a href="tel:+911234567891">+91-12345 67891</a>
              <a href="mailto:info@samakshtrade.com">info@samakshtrade.com</a>
            </div>
            <div className={styles.footer_inner_detailes}>
              <h3>Stay In Touch</h3>
              <a href="mailto:info@samakshtrade.com">sales@samakshtrade.com</a>
              <a href="mailto:info@samakshtrade.com">
                support@samakshtrade.com
              </a>
              <br />
              <div className={styles.socialmedia_container}>
                <Image
                  src={linkdin}
                  className={styles.socialmedia}
                  alt="linkdin icon"
                  width="25"
                  height="25"
                />
                <Image
                  src={instagram}
                  className={styles.socialmedia}
                  alt="instagram icon"
                  width="25"
                  height="25"
                />
                <Image
                  src={facebook}
                  className={styles.socialmedia}
                  alt="favebook icon"
                  width="25"
                  height="25"
                />
                <Image
                  src={twitter}
                  className={styles.socialmedia}
                  alt="twitter icon"
                  width="25"
                  height="25"
                />
              </div>
            </div>
            <div className={styles.footer_inner_detailes}>
              <h3>For career inquiry</h3>
              <a href="mailto:hr@samakshtrade.com">hr@samakshtrade.com</a>
              <a href="tel:+911234567891">+91-12345 67891</a>
            </div>

            <div className={styles.footer_inner_detailes}>
              <h3>We Provide Services At</h3>
              <Image
                src={map}
                className={styles.map}
                alt="We Provide Services At map"
              />
            </div>
          </div>
        </div>
        <div className={styles.footer_head_discreaption}>
          <hr className={styles.hrtage} />
          <div className={styles.bottom_footer}>
            <p> © {new Date().getFullYear()}, Samaksh Trade Consultants</p>
            <div>Privacy Policy | Terms & Conditions</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
