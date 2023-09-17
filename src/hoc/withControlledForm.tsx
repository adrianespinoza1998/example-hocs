import { ComponentType, useState } from "react";

const withControlledForm = <P extends object>(
  FormComponent: ComponentType<P>,
  initialState: any
) => {
  return () => {
    const [form, setForm] = useState({
      ...initialState,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm({
        ...form,
        [event.target.name]: event.target.value,
      });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      console.log(form);

      alert("Login successful!");
    };

    const formProps = {
      form,
      handleChange,
      handleSubmit,
    } as P;

    return <FormComponent {...formProps} />;
  };
};

export default withControlledForm;
