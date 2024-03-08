import React from "react";
import styles from "./MySkill.module.css";
export const MySkill = () => {
  return (
    <div className={`${styles.mySkillWrapper} p-20-300`}>
      <div className={`${styles.mySkill} d-flex`}>
        <div className={styles.mySkill__left}>
          <p className={`${styles.title}`}>What I do?</p>
          <div className={`${styles.content}  pr-150 my-30 `}>
            <p className="pb-15">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum. Suspendis imperdiet,
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non.
            </p>
          </div>
          <button className="btn-color"> Say hello!</button>
        </div>
        <div className={styles.mySkill__right}>
          <div className={styles.card}>
            <div className={styles.wall}></div>
            <div className={styles.cardContent}>
              <p className={`${styles.title} mb-7 mt-25 `}>
                User Experience (UX)
              </p>
              <p className={`${styles.content} `}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum.
              </p>
            </div>
          </div>
          <div className={`${styles.card} my-15 `}>
            <div className={styles.cardContent}>
              <p className={`${styles.title} mb-7 mt-25 `}>
                User Interface (UI)
              </p>
              <p className={`${styles.content} `}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <p className={`${styles.title} mb-7 mt-25 `}>Web Development</p>
              <p className={`${styles.content} `}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
