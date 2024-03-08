import React from "react";
import styles from "./Infomation.module.css";
import imgMan from "../../../assets/unsplash_wKOKidNT14w.png";
import imgMan30 from "../../../assets/man30.png";
import imgFb from "../../../assets/fb.png";
import imgBe from "../../../assets/be.png";
import imgIns from "../../../assets/ins.png";
import imgLikein from "../../../assets/likein.png";
import imgBall from "../../../assets/ball.png";
import imgDown from "../../../assets/down.png";
export const Infomation = () => {
  return (
    <div className={`${styles.info} p-20-300`}>
      <div className={`${styles.infoTop} mt-150`}>
        <div className={`${styles.inforTop__left} pt-80`}>
          <div>
            <p className={styles.inforTop__title}>
              Hello, I'm Brooklyn GilBert
            </p>
            <p className={`${styles.content} mg-bt-18`}>
              I'm a Freelance <strong>UI/UX Designer</strong> and
              <strong> Developer</strong> based in London, England. I strives to
              build immersive and beautiful web applications through carefully
              crafted code and user-centric design.
            </p>
            <button className="btn-color">Say Hello!</button>
          </div>
          <div className={styles.down}>
            <div className={styles.downBox}>
              <div className={styles.downBox__child}>
                <h3>15 Y.</h3>
                <p>Experience</p>
              </div>
              <p className={styles.wall}></p>
            </div>
            <div className={styles.downBox}>
              <div className={styles.downBox__child}>
                <h3>250+</h3>
                <p>Project Completed</p>
              </div>
              <p className={styles.wall}></p>
            </div>
            <div className={styles.downBox}>
              <div className={styles.downBox__child}>
                <h3>58</h3>
                <p>Happy Client</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.inforTop__right}>
          <img src={imgMan} alt="" />
        </div>
      </div>
      <div className={`${styles.inforBottom}  mt-150 `}>
        <div className={styles.inforBottom__left}>
          <img src={imgMan30} alt="" className={styles.imgMan30} />
          <div className={styles.socialCard}>
            <img src={imgFb} alt="" />
            <img src={imgBall} alt="" />
            <img src={imgIns} alt="" />
            <img src={imgLikein} alt="" className="bg-social" />
            <img src={imgBe} alt="" />
          </div>
        </div>
        <div className={styles.inforBottom__right}>
          <p className={`${styles.title} pb-30`}>
            I am Professional User Experience Designer
          </p>
          <div className={`${styles.content} pb-25`}>
            <p className="pb-15">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences.
            </p>
            <p>
              I design and develop services for customers specializing creating
              stylish, modern websites, web services.
            </p>
          </div>

          <div className="d-flex">
            <button className="btn-color mr-20">My project</button>
            <button className="btn">
              <img src={imgDown} alt="" />
              <p>Download CV</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
