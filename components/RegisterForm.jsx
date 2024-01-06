import RegisterSlide01 from "./RegisterSlide01";
import RegisterSlide02 from "./RegisterSlide02";
import { useState, useEffect } from "react";

const RegisterForm = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (action) => {
    let limit;

    if (action === "sub") {
      limit = 200;
      index + 100 <= limit ? setIndex(index + 100) : null
    } else if (action === "add") {
      limit = 0;
      index - 100 >= limit ? setIndex(index - 100) : null
    }

    console.log(limit);
  };

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
          <RegisterSlide01 title={"Choose your plan!"} />
          <RegisterSlide02 title={"Set your lifts"} />
          {/* <RegisterSlide01 /> */}
          <RegisterSlide01 />
        </div>
      </form>

      <button onClick={() => handleClick("add")} type="submit">
        left
      </button>

      <button onClick={() => handleClick("sub")} type="submit">
        right
      </button>

      <h1>{index}</h1>
    </>
  );
};

export default RegisterForm;
