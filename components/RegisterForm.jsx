import ButtonForm from "./ButtonForm";

const RegisterForm = () => {
  return (
    <form action="" onSubmit={(e) => e.preventDefault()} className="form-register">
      <ButtonForm body={"Barbell"} />
      <ButtonForm body={"Dumbell"} />
      <ButtonForm body={"Bodyweight"} />
    </form>
  );
};

export default RegisterForm;
