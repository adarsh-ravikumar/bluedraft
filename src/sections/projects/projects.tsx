import Gallery from "@/components/gallery/gallery";
import styles from "./projects.module.scss";

export default function Projects() {
  const variant: string = "original_dark";

  return (
    <div className={styles.projects} id="projects">
      <div className={styles.projects__header}>
        <div className="text">
          <p className="text_title">Projects</p>
          <p className={styles.header__heading}>
            We Provide Value That <br />
            Exceeds Expectations
          </p>
          <p className="text_content">
            This section highlights an overview of the projects we have
            successfully completed
          </p>
        </div>

        <img
          src="/assets/projects/header.png"
          alt="header"
          className={styles.image}
        />
      </div>

      <Gallery
        images={[
          `/assets/projects/${variant}/1_${variant}.png`,
          `/assets/projects/${variant}/2_${variant}.png`,
          `/assets/projects/${variant}/4_${variant}.png`,
          `/assets/projects/${variant}/3_${variant}.png`,
          `/assets/projects/${variant}/5_${variant}.png`,
          `/assets/projects/${variant}/6_${variant}.png`,
          `/assets/projects/${variant}/7_${variant}.png`,
          `/assets/projects/${variant}/8_${variant}.png`,
        ]}
      />
    </div>
  );
}
