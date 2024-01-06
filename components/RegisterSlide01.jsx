import ButtonForm from "./ButtonForm";

const RegisterSlide01 = () => {
  return (
    <>
      <fieldset className="form-section">
        <legend className="form-title">Choose your plan</legend>
        <ButtonForm body={"Barbell"} />
        <ButtonForm body={"Dumbell"} />
        <ButtonForm body={"Bodyweight"} />
      </fieldset>
    </>
  );
};

export default RegisterSlide01;
