import Image from "next/image";
import styles from "./card.module.scss";

interface Props {
    image: string;
    title: string;
    subtitle: string;
}

export default function ImageCard(props: Props) {
    return (
        <div className={styles.card}>
            <img
                className={styles.card__image}
                src={props.image}
                alt="card image"
            />
            <div className={styles.card__content}>
                <p className="text_title">{props.title}</p>
                <p className="text_content">{props.subtitle}</p>
            </div>
        </div>
    );
}
