import React from "react";
import { Infomation } from "./Infomation";
import { WorkProcess } from "./WorkProcess";
import { Portfolio } from "./Portfolio";
import { Blog } from "./Blog";
import { MySkill } from "./MySkill";
import { HappyClient } from "./HappyClient";
import { Testimonial } from "./Testimonial";
import { FormSubmit } from "./FormSubmit";

export const Main = () => {
  return (
    <main>
      <Infomation />
      <WorkProcess />
      <Portfolio />
      <Blog />
      <MySkill />
      <HappyClient />
      <Testimonial />
      <FormSubmit />
    </main>
  );
};
