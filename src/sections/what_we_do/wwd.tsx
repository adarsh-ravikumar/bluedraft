import ImageCard from "@/components/image_card/image_card";
import styles from "./wwd.module.scss";

export default function WhatWeDo() {
    const content: string =
        "At BlueDraft, we provide expert steel detailing and design services tailored to meet the unique needs of every project. From shop and erection drawings to connection design and BIM modeling, we ensure precision and efficiency at every stage. Our team excels in handling structural and miscellaneous steel detailing, delivering solutions that prioritize quality, constructability, and cost-effectiveness. With advanced software and a client-focused approach, we support seamless project execution from start to finish.";
    const cards: { title: string; content: string; image: string }[] = [
        {
            title: "Structural Steel Detailing",
            content:
                "We create precise structural drawings that serve as the cornerstone for the successful execution of your projects.",
            image: "/assets/what_we_do/structural_detailing.jpg",
        },

        {
            title: "Miscellaneous Steel Detailing",
            content:
                "Our dedicated team excels in miscellaneous detailing, specializing in both commercial and industrial sectors.",
            image: "/assets/what_we_do/misc_detailing.jpg",
        },

        {
            title: "Connection Design",
            content:
                "We provide efficient connection design solutions, ensuring compliance with codes and constructability standards",
            image: "/assets/what_we_do/connection.jpg",
        },

        {
            title: "Estimation & Takeoff",
            content:
                "We offer quick turnaround on estimation and material takeoff, ensuring seamless project execution while saving time and reducing material waste.",
            image: "/assets/what_we_do/estimation.jpg",
        },
    ];

    return (
        <div className={styles.section__wwd} id="what_we_do">
            <div className={styles.wwd__content}>
                <p className="text_title">What We Do</p>
                <p className="text_content">{content}</p>
            </div>
            <div className={styles.cards}>
                {cards.map((card) => {
                    return (
                        <ImageCard
                            key={card.title}
                            title={card.title}
                            subtitle={card.content}
                            image={card.image}
                        />
                    );
                })}
            </div>
        </div>
    );
}
