import Image from "next/image";
import styles from "./AboutUs.module.scss";

export default function AboutUs() {
  return (
    <div className={styles.about__us} id="about_us">
      <div className={styles.about__us__content__container}>
        <p className="text_title">About Us</p>
        <h1 className={`${styles.about__us__header}`}>
          Precision in Every Detail <br /> Strength in Every Structure
        </h1>
        {/* <div className={styles.about__us__image__container__mobile}>
          <Image
            src="/assets/about_us/Building_information_modeling.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            className={styles.about__us__image__mobile}
          /> 
        </div> */}
        <p className={`${styles.about__us__content} text_content`}>
          We specialize in providing comprehensive design and detailing
          solutions for structural steel, catering to projects of all sizes and
          complexities. Our experienced team works closely with engineers,
          architects, and fabricators to ensure accurate, cost-effective, and
          timely deliverables. At Bluedraft, we pride ourselves on quality,
          innovation, and a commitment to exceeding client expectations.
        </p>
      </div>
      {/* <div className={styles.about__us__image__container}>
        <Image
          src="/assets/about_us/Building_information_modeling.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          className={styles.about__us__image}
        />
      </div> */}
    </div>
  );
}
