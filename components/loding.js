import Image from "next/image";
import loading from "../public/images/loading.gif";
import styles from "../styles/loding.module.css";
export default function Loader() {
  return (
    <div className={styles.loadercontainer}>
      <Image src={loading} alt="" />
      <p>Loading....</p>
    </div>
  );
}
