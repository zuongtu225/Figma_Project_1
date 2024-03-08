import React from "react";
import styles from "./HappyClient.module.css";
import imgGoogle from "../../../assets/google.png";
import imgDribbble from "../../../assets/dribbble.png";
import imgAmazon from "../../../assets/amazon.png";
import imgMedium from "../../../assets/medium.png";
import imgLikedin from "../../../assets/linkedin.png";
import imgSportify from "../../../assets/spotify.png";
export const HappyClient = () => {
  return (
    <div className={`${styles.happyClientWrapper}  p-20-300`}>
      <div className={`${styles.happyClientHead} my-50 px-330 `}>
        <p className={`${styles.title} my-30`}>Happy Clients</p>
        <p className={`${styles.content} fs-18`}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
      <div className={`${styles.happyClientBody} my-50 d-flex`}>
        <div className={`${styles.card}`}>
          <img src={imgGoogle} />
        </div>
        <div className={`${styles.card}`}>
          <img src={imgDribbble} />
        </div>
        <div className={`${styles.card}`}>
          <img src={imgLikedin} />
        </div>
        <div className={`${styles.card}`}>
          <img src={imgAmazon} />
        </div>
        <div className={`${styles.card}`}>
          <img src={imgMedium} />
        </div>
        <div className={`${styles.card}`}>
          <img src={imgSportify} />
        </div>
      </div>
    </div>
  );
};
