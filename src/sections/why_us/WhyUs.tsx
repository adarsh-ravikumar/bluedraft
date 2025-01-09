import Image from "next/image";
import styles from "./WhyUs.module.scss";

export default function WhyUs() {
  return (
    <div className={styles.about__us}>
      <div className={styles.about__us__content__container}>
        <p className="text_title">Why BlueDraft</p>
        <h1 className={`${styles.about__us__header} text_content`}>
          Providing exceptional <br /> value to clients
        </h1>
        <div className={styles.about__us__image__container__mobile}>
          <Image
            src="/assets/why_us/why_us.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            className={styles.about__us__image__mobile}
          />
        </div>
        <p className={`${styles.about__us__content} text_content`}>
          At Bluedraft, we blend technical proficiency with a dedication to
          outstanding service. Our focus is on fostering lasting partnerships
          while consistently providing exceptional value to our clients
        </p>
      </div>
      <div className={styles.about__us__image__container}>
        <Image
          src="/assets/why_us/why_us.png"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          className={styles.about__us__image}
        />
      </div>
    </div>
  );
}
