import ButtonForm from "./ButtonForm";

const RegisterForm = () => {
  return (
    <form action="" onSubmit={(e) => e.preventDefault()}>
      <ButtonForm body={"Barbell"} />
      <ButtonForm body={"Dumbell"} />
      <ButtonForm body={"Bodyweight"} />
    </form>
  );
};

export default RegisterForm;
