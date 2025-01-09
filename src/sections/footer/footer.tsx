import styles from "./footer.module.scss";

export default function Footer() {
  //TODO: replace palceholders with real content
  return (
    <div className={styles.footer}>
      <img
        src="/bd_name_logo_white.png"
        alt="logo"
        className={styles.footer__logo}
      />
      <div className={styles.footer__content}>
        <div className={styles.content__text}>
          <div className={styles.text__block}>
            <p className={styles.block__title}>Contact</p>
            <div className={styles.block__content}>
              <p>+61 0474049837</p>
            </div>
          </div>

          <div className={styles.text__block}>
            <p className={styles.block__title}>Address</p>

            <p className={styles.block__content}>
              2235 GREENCEDAR DR <br /> BEL AIR, MD 21015-6383 <br /> United
              States
            </p>

            <br />

            <p className={styles.block__content}>
              233 East terrace <br /> South Australia - 5000
            </p>
          </div>

          <div className={styles.text__block}>
            <p className={styles.block__title}>Email</p>

            <p className={styles.block__content}>
              Info@bluedraftengineering.com
            </p>
          </div>
        </div>
        {/* <img
          src="/placeholder.png"
          alt="company-image"
          className={styles.content__image}
        /> */}
      </div>
    </div>
  );
}
