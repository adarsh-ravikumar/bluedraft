import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <Image
          className={styles.navbar__logo}
          src="/bd_name_logo_white.png"
          alt="company logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div>
        <ul className={styles.link__container}>
          <li className={styles.link__element}>
            <Link href={""}>Home</Link>
          </li>
          <li className={styles.link__element}>
            <Link href={""}>About us </Link>
          </li>
          <li className={styles.link__element}>
            <Link href={""}>Services</Link>
          </li>
          <li className={styles.link__element}>
            <Link href={""}>Projects</Link>
          </li>
          <li className={styles.link__element}>
            <Link href={""}>Careers</Link>
          </li>
          <li className={styles.link__element}>
            <Link href={""}>Contact us</Link>
          </li>
        </ul>
      </div>
      <div className={styles.mobile__link__menu}>
            M
      </div>
    </div>
  );
}
