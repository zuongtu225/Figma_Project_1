import React from "react";
import styles from "./FormSubmit.module.css";
import imgFb from "../../../assets/fbLight.png";
import imgBe from "../../../assets/be.png";
import imgIns from "../../../assets/ins.png";
import imgLikein from "../../../assets/likeinBold.png";
import imgBall from "../../../assets/ball.png";
import imgLocal from "../../../assets/local.png";
import imgLocalBold from "../../../assets/localBold.png";
import imgSend from "../../../assets/send.png";
export const FormSubmit = () => {
  return (
    <div className={`${styles.formSubmitWrapper} p-20-300 `}>
      <div className={`${styles.formSubmit} `}>
        <div>
          <div className={`${styles.formSubmitHead}`}>
            <p className={`${styles.title} pb-15`}>
              Let's discuss your Project
            </p>
            <p className={`${styles.content} fs-18`}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority.
            </p>
          </div>
          <div className="my-30">
            <div className={`${styles.card} d-flex p-25 rounded-10 `}>
              <img src={imgLocal} alt="" className="bg-social rounded-4" />
              <div>
                <p className="py-5">Address:</p>
                <p>New Mexico 31134</p>
              </div>
            </div>
            <div className={`${styles.card} d-flex p-25 rounded-10 my-10`}>
              <img
                src={imgLocalBold}
                alt=""
                className="bg-social-light rounded-4"
              />
              <div>
                <p className="py-5">My Email:</p>
                <p>mymail@mail.com</p>
              </div>
            </div>
            <div className={`${styles.card} d-flex p-25 rounded-10`}>
              <img
                src={imgLocalBold}
                alt=""
                className="bg-social-light rounded-4"
              />
              <div>
                <p className="py-5">Call Me Now:</p>
                <p>00-1234 00000</p>
              </div>
            </div>
          </div>
          <div className={styles.socialCard}>
            <img src={imgFb} alt="" className="bg-social" />
            <img src={imgBall} alt="" />
            <img src={imgBe} alt="" />
            <img src={imgIns} alt="" />
            <img src={imgLikein} alt="" />
          </div>
        </div>
        <div className={styles.formSubmit__right}>
          <p className={`${styles.content} pb-30`}>
            There are many variations of passages of Lorem Ipsu available, but
            the majority have suffered alte.
          </p>
          <form className="my-30">
            <input
              type="text"
              placeholder="Name*"
              className={styles.inputBorderColor}
            />
            <input type="text" placeholder="Email*" className="my-15" />
            <input type="text" placeholder="Location" />
            <div className="d-flex my-15 gap-10">
              <input placeholder="Budget*" className="w-4" />
              <input placeholder="Subject*" />
            </div>
            <input placeholder="Message*" />
          </form>
          <button className="btn-color">
            <p>Submit</p>
            <img src={imgSend} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
