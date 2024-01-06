import ButtonForm from "./ButtonForm";

const RegisterSlide01 = (props) => {
  const { title } = props;
  return (
    <>
      <fieldset className="form-section">
        <legend className="form-title">{title}</legend>
        <ButtonForm body={"Barbell"} />
        <ButtonForm body={"Dumbell"} />
        <ButtonForm body={"Bodyweight"} />
      </fieldset>
    </>
  );
};

export default RegisterSlide01;
