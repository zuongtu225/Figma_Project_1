import React from "react";
import styles from "./Portfolio.module.css";
import imgP1 from "../../../assets/p1.png";
import imgP2 from "../../../assets/p2.png";
import imgP3 from "../../../assets/p3.png";
import imgP4 from "../../../assets/p4.png";
import imgP5 from "../../../assets/p5.png";
import imgP6 from "../../../assets/p6.png";
import imgArrRight from "../../../assets/arrRight.png";
import imgArrRightWhite from "../../../assets/arrRightWhite.png";
export const Portfolio = () => {
  return (
    <>
      <div className={`${styles.portfolioWrapper} p-20-300`}>
        <div className={`${styles.portfolioHead} px-330 `}>
          <p className={`${styles.title} pb-15 pt-20`}>Portfolio</p>
          <p className={`${styles.content} fs-18`}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className={`${styles.portfolioBody} my-50 d-grid-3 `}>
          <div className={`${styles.card}`}>
            <img src={imgP1} />
            <div className={`${styles.cardContentWrapper}  p-25 `}>
              <div className={`${styles.cardContent} `}>
                <p className={`${styles.content} fs-14`}>UI-UX DESIGN</p>
                <p className={`${styles.title} `}>Product Admin Dashboard</p>
                <p className={`${styles.content} fs-14 my-15`}>
                  Vivamus eleifend convallis ante, non pharetra libero molestie
                  laoreet. Donec id imperdiet lacus.
                </p>
                <button className="btn">
                  <p>Case Study</p>
                  <img src={imgArrRight} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className={`${styles.card}`}>
            <img src={imgP2} />
            <div className={`${styles.cardContentWrapper}  p-25 `}>
              <div className={`${styles.cardContent} `}>
                <p className={`${styles.content} fs-14`}>UI-UX DESIGN</p>
                <p className={`${styles.title} `}>Product Admin Dashboard</p>
                <p className={`${styles.content} fs-14 my-15`}>
                  Vivamus eleifend convallis ante, non pharetra libero molestie
                  laoreet. Donec id imperdiet lacus.
                </p>
                <button className="btn">
                  <p>Case Study</p>
                  <img src={imgArrRight} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className={`${styles.card}`}>
            <img src={imgP3} />
            <div className={`${styles.cardContentWrapper}  p-25 `}>
              <div className={`${styles.cardContent} `}>
                <p className={`${styles.content} fs-14`}>UI-UX DESIGN</p>
                <p className={`${styles.title} `}>Product Admin Dashboard</p>
                <p className={`${styles.content} fs-14 my-15`}>
                  Vivamus eleifend convallis ante, non pharetra libero molestie
                  laoreet. Donec id imperdiet lacus.
                </p>
                <button className="btn">
                  <p>Case Study</p>
                  <img src={imgArrRight} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className={`${styles.card}`}>
            <img src={imgP4} />
            <div className={`${styles.cardContentWrapper}  p-25 `}>
              <div className={`${styles.cardContent} `}>
                <p className={`${styles.content} fs-14`}>UI-UX DESIGN</p>
                <p className={`${styles.title} `}>Product Admin Dashboard</p>
                <p className={`${styles.content} fs-14 my-15`}>
                  Vivamus eleifend convallis ante, non pharetra libero molestie
                  laoreet. Donec id imperdiet lacus.
                </p>
                <button className="btn">
                  <p>Case Study</p>
                  <img src={imgArrRight} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className={`${styles.card}`}>
            <img src={imgP5} />
            <div className={`${styles.cardContentWrapper}  p-25 `}>
              <div className={`${styles.cardContent} `}>
                <p className={`${styles.content} fs-14`}>UI-UX DESIGN</p>
                <p className={`${styles.title} `}>Product Admin Dashboard</p>
                <p className={`${styles.content} fs-14 my-15`}>
                  Vivamus eleifend convallis ante, non pharetra libero molestie
                  laoreet. Donec id imperdiet lacus.
                </p>
                <button className="btn">
                  <p>Case Study</p>
                  <img src={imgArrRight} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className={`${styles.card}`}>
            <img src={imgP6} />
            <div className={`${styles.cardContentWrapper}  p-25 `}>
              <div className={`${styles.cardContent} `}>
                <p className={`${styles.content} fs-14`}>UI-UX DESIGN</p>
                <p className={`${styles.title} `}>Product Admin Dashboard</p>
                <p className={`${styles.content} fs-14 my-15`}>
                  Vivamus eleifend convallis ante, non pharetra libero molestie
                  laoreet. Donec id imperdiet lacus.
                </p>
                <button className="btn">
                  <p>Case Study</p>
                  <img src={imgArrRight} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.portfolioFoot}>
          <button className="btn-color mb-50 ">More Project</button>
        </div>
      </div>
      <div className={`${styles.projectWrapper}`}>
        <p className={`${styles.title} pb-25 `}>
          Do you have Project Idia? Let's discuss your project!
        </p>
        <p className={`${styles.content} fs-18 pb-25`}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <div className={styles.workTogether}>
          <button className="btn-color">
            <p>Let's work Together</p>
            <img src={imgArrRightWhite} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
