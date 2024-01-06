import ButtonForm from "./ButtonForm";

const RegisterForm = () => {
  return (
    <>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <fieldset className="form-container">
          <legend className="form-title">Choose your plan</legend>
          <ButtonForm body={"Barbell"} />
          <ButtonForm body={"Dumbell"} />
          <ButtonForm body={"Bodyweight"} />
        </fieldset>
      </form>
    </>
  );
};

export default RegisterForm;
