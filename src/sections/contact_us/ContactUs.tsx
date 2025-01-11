import Image from "next/image";
import styles from "./ContactUs.module.scss";

export default function ContactUs() {
  return (
    <div className={styles.contact__us__container} id="contact_us">
      <div className={styles.reach__out__container}>
        <p className="text_title">Reach out</p>
      </div>
      <div className={styles.client__container}>
        <Image
          src="/assets/contact_us/hire_us.png"
          alt="Hiring picture"
          layout="fill"
          objectFit="cover"
          className={styles.client__image}
        />
        <p className="text_title">Become A Client</p>
        <span className={styles.client__text__container}>
          <p className={`text_content`}>
            Through collaboration and teamwork, we can drive success in your
            next project.
          </p>
        </span>
        <button>Contact Us</button>
      </div>

      <div className={styles.team__container}>
        <Image
          src="/assets/contact_us/join_us.png"
          alt="Join Picture"
          layout="fill"
          objectFit="cover"
          className={styles.team__image}
        />
        <p className="text_title">Join The Team</p>
        <span className={styles.team__text__container}>
          <p className={`text_content `}>
            We’d be delighted to hear from you if you’re looking to take the
            next step in your professional journey.
          </p>
        </span>
        <button>Join Us</button>
      </div>
    </div>
  );
}
