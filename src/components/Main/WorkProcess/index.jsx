import React from "react";
import styles from "./WorkProcess.module.css";
import imgNote from "../../../assets/note.png";
import imgComputer from "../../../assets/computer.png";
import imgGraph from "../../../assets/graph.png";
import imgPencil from "../../../assets/pencil.png";

export const WorkProcess = () => {
  return (
    <div className={`${styles.workProcessWrapper} p-20-300`}>
      <div className={`${styles.workProcess} d-flex`}>
        <div className={styles.workProcess__left}>
          <p className={`${styles.title} pb-30`}>Work Process</p>
          <div className={`${styles.content}  pr-150`}>
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
        </div>
        <div className={styles.workProcess__right}>
          <div>
            <div className={styles.card}>
              <div className={`${styles.cardIcon} bg-icon-bold`}>
                <img src={imgNote} alt="" />
              </div>
              <div className={styles.cardContent}>
                <p className={`${styles.title} mb-7 mt-25 `}>1. Research</p>
                <p className={`${styles.content} `}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu.
                </p>
              </div>
            </div>
            <div className={`${styles.card} mt-25 `}>
              <div className={`${styles.cardIcon} bg-icon-light`}>
                <img src={imgPencil} alt="" />
              </div>
              <div className={styles.cardContent}>
                <p className={`${styles.title} mb-7 mt-25 `}>2. Design</p>
                <p className={`${styles.content} `}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-20">
            <div className={styles.card}>
              <div className={`${styles.cardIcon} bg-icon-light`}>
                <img src={imgGraph} alt="" />
              </div>
              <div className={styles.cardContent}>
                <p className={`${styles.title} mb-7 mt-25 `}>2. Analyze</p>
                <p className={`${styles.content} `}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu.
                </p>
              </div>
            </div>
            <div className={`${styles.card} mt-25 `}>
              <div className={`${styles.cardIcon} bg-icon-light`}>
                <img src={imgComputer} alt="" />
              </div>
              <div className={styles.cardContent}>
                <p className={`${styles.title} mb-7 mt-25 `}>4. Launch</p>
                <p className={`${styles.content} `}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
