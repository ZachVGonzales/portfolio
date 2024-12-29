import Image from "next/image";
import styles from "./profilepic.module.css"

export default function ProfilePic() {
  return (
    <div className={styles.imageContainer}>
      <Image
        src="/profilepic.png"
        alt="Your Face"
        width={200}
        height={200}
        className={styles.profilePic}
      />
    </div>
  );
}