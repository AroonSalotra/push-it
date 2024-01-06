import RegisterSlide01 from "./RegisterSlide01";
import { useState } from "react";
import RegisterBtn from "./RegisterBtn";

const RegisterForm = () => {
  const [index, setIndex] = useState(100);

  return (
    <>
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="form-container"
      >
        <div
          className="form-slide"
          style={{ transform: `translateX(-${index}%` }}
        >
          <RegisterSlide01 />
          <RegisterSlide01 />
          <RegisterSlide01 />
        </div>
      </form>

      <RegisterBtn body="left" />
      <RegisterBtn body="right" />
    </>
  );
};

export default RegisterForm;
