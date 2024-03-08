import React from "react";
import styles from "./Testimonial.module.css";
export const Testimonial = () => {
  return (
    <div className={`${styles.testimonialWrapper}  p-20-300`}>
      <div className={`${styles.testimonialHead} my-50 px-330 `}>
        <p className={`${styles.title} my-30`}>Testimonial</p>
        <p className={`${styles.content} fs-18`}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
      <div className={`${styles.testimonialBody} `}>
        <p className={`${styles.contenTop} px-200 mb-7`}>
          “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis
          felis turpis, nec semper odio convallis at. Curabitur imperdiet semper
          arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas
          est purus, eleifend ac cursus sed, tincidunt ut sapien. Morbi ornare
          elit at libero suscipit porta.”
        </p>
        <p className="bold-500 pt-20 ">Esther Howard</p>
        <p>Managing Director, ABC company</p>
      </div>
      <div className={`${styles.testimonialFoot} my-15`}>
        <div className={`${styles.dotContainer} d-flex`}>
          <div className={`${styles.dot} `}></div>
          <div className={`${styles.dot} `}></div>
          <div className={`${styles.dot} `}></div>
        </div>
      </div>
    </div>
  );
};
