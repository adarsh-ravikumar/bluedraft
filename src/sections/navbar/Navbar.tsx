"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { useEffect, useState } from "react";

export default function Navbar() {
  const items: string[] = [
    "Home",
    "About us",
    "What We Do",
    "Why Us",
    "Projects",
  ];

  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      if (window.innerWidth >= 1000) {
        setNavOpen(false);
      }
    })
  })

  return (
    <nav className={styles.nav}>
      <div>
        <img
          className={styles.nav__logo}
          src={navOpen ? "/bd_name_logo_white.png" : "/bd_name_logo_blue.png"}
          alt="company logo"
        ></img>
      </div>
      <div>
        <ul
          className={`${styles.nav__links} ${navOpen ? styles.nav__open : ""}`}
        >
          {items.map((i) => {
            return (
              <li key={i} className={styles.links__li}>
                <Link
                  href={`#${i.toLowerCase().replaceAll(" ", "_")}`}
                  className={styles.li__link}
                  onClick={() => {
                    setNavOpen(false);
                  }}
                >
                  {i}
                </Link>
                <div className={styles.li__line}></div>
              </li>
            );
          })}

          <li className={styles.links__li}>
            <Link href="#contact_us">
              <button className={styles.contact_btn}>Contact Us</button>
            </Link>
          </li>
        </ul>

        <div
          className={`${styles.nav__ham} ${navOpen ? styles.ham__open : ""}`}
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <div className={styles.ham__line}></div>
          <div className={styles.ham__line}></div>
          <div className={styles.ham__line}></div>
        </div>
        <div className={styles.nav__mobile}></div>
      </div>
    </nav>
  );
}
