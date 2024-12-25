import styles from "./banner.module.scss";
import Image from "next/image";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <div className={styles.item}>
                    <Image
                        src="/assets/hero/star.svg"
                        alt="experience"
                        fill
                    />
                    <div className={styles.text}>
                        <p className={styles.title}>10+ Years</p>
                        <p className={styles.subtitle}>of experience</p>
                    </div>
                </div>

                <div className={styles.item}>
                    <Image
                        src="/assets/hero/quality.svg"
                        alt="quality"
                        fill
                    />
                    <div className={styles.text}>
                        <p className={styles.title}>Quality</p>
                        <p className={styles.subtitle}>assured</p>
                    </div>
                </div>

                <div className={styles.item}>
                    <Image
                        src="/assets/hero/time.svg"
                        alt="time"
                        fill
                    />
                    <div className={styles.text}>
                        <p className={styles.title}>On Time</p>
                        <p className={styles.subtitle}>delivery</p>
                    </div>
                </div>
            </div>
            <div className={styles.overlay}>
                <p className={styles.subtitle}>We Make</p>
                <div className={styles.title}>
                    <div className="text">Steel C</div>
                    <Image
                        fill
                        className={styles.cog}
                        src="/assets/hero/cog.svg"
                        alt="cog"
                    />
                    <div className="text">nstruction</div>
                </div>
                <p className={styles.subtitle}>Easier</p>
                <button>{`Let's Talk!`}</button>
            </div>
            <video autoPlay muted loop src="/assets/hero/hero.mp4"></video>
        </div>
    );
}
