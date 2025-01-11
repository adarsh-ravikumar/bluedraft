
import styles from "./WhyUs.module.scss";

export default function WhyUs() {
  return (
    <div className={styles.why_us} id="why_us">

      <div className={styles.why_us__content}>

        <div className={styles.why_us__content_text}>
          <p className="text_title">Why BlueDraft</p>
          <h1 className={styles.why_us__header}>
            Providing exceptional <br /> value to clients
          </h1>
          <div className={styles.why_us__image__container__mobile}>
            <img
              src="/assets/why_us/why_us.png"
              alt="Picture of the author"
              className={styles.why_us__image__mobile}
            />
          </div>
          <p className={`${styles.why_us__content} text_content`}>
            At Bluedraft, we blend technical proficiency with a dedication to
            outstanding service. Our focus is on fostering lasting partnerships
            while consistently providing exceptional value to our clients
          </p>
        </div>

        <div className={styles.why_us__image__container}>
          <img
            src="/assets/why_us/why_us.png"
            alt="Picture of the author"
            className={styles.why_us__image}
          />
        </div>
      </div>


      <div className={styles.why_us__software}>
        <div className={styles.software__header}>
          <p className="text_title">The Right Software To Drive Project Success</p>
        </div>
        <div className={styles.software__logos}>
          <img src="/assets/why_us/bluebeam.png" alt="bluebeam" />
          <img src="/assets/why_us/sds-2.png" alt="sds/2 " />
          <img src="/assets/why_us/revit.png" alt="revit" />
          <img src="/assets/why_us/tekla.png" alt="tekla" />
        </div>
      </div>

    </div>
  );
}
