import React from "react";
import styles from "./Blog.module.css";
import imgBl1 from "../../../assets/bl1.png";
import imgBl2 from "../../../assets/bl2.png";
import imgBl3 from "../../../assets/bl3.png";
import imgBl4 from "../../../assets/bl4.png";
export const Blog = () => {
  return (
    <div className={`${styles.blogWrapper}  p-20-300`}>
      <div className={`${styles.blogHead} my-50 px-330 `}>
        <p className={`${styles.title} pb-15 pt-20`}>Blog</p>
        <p className={`${styles.content} fs-18`}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
      <div className={`${styles.blogBody} my-50 d-flex`}>
        <div className={`${styles.card}`}>
          <img src={imgBl1} />
          <div className={`${styles.cardContentWrapper}  p-17 `}>
            <div className={`${styles.cardContent} `}>
              <p className={`${styles.title} fs-14`}>
                22 Oct, 2020 / 246 Comments
              </p>
              <p className={`${styles.content} fs-14`}>
                Vivamus eleifend convallis ante, non pharetra libero molestie
                laoreet.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.card}`}>
          <img src={imgBl2} />
          <div className={`${styles.cardContentWrapper}  p-17 `}>
            <div className={`${styles.cardContent} `}>
              <p className={`${styles.title} fs-14`}>
                22 Oct, 2020 / 246 Comments
              </p>
              <p className={`${styles.content} fs-14 `}>
                Vivamus eleifend convallis ante, non pharetra libero molestie
                laoreet.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.card}`}>
          <img src={imgBl3} />
          <div className={`${styles.cardContentWrapper} p-17 `}>
            <div className={`${styles.cardContent} `}>
              <p className={`${styles.title} fs-14`}>
                22 Oct, 2020 / 246 Comments
              </p>
              <p className={`${styles.content} fs-14`}>
                Vivamus eleifend convallis ante, non pharetra libero molestie
                laoreet.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.card}`}>
          <img src={imgBl4} />
          <div className={`${styles.cardContentWrapper} p-17 `}>
            <div className={`${styles.cardContent} `}>
              <p className={`${styles.title} fs-14`}>
                22 Oct, 2020 / 246 Comments
              </p>
              <p className={`${styles.content} fs-14`}>
                Vivamus eleifend convallis ante, non pharetra libero molestie
                laoreet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.blogFoot}`}>
        <div className={`${styles.dotContainer} d-flex`}>
          <div className={`${styles.dot} `}></div>
          <div className={`${styles.dot} `}></div>
          <div className={`${styles.dot} `}></div>
        </div>
      </div>
    </div>
  );
};
