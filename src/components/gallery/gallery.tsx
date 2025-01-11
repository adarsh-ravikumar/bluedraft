import styles from "./gallery.module.scss";
export default function Gallery({ images }: { images: string[] }) {
  return (
    <div className={styles.gallery}>
      {images.map((i) => {
        return (
          <img key={i} src={i} alt={i} className={styles.gallery__image} />
        );
      })}
    </div>
  );
}
