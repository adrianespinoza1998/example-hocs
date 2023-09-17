import { LoginForm as LoginFormType } from "../types/forms";
import withControlledForm from "../hoc/withControlledForm";

type LoginFormProps = {
  form: LoginFormType;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const LoginForm = ({ form, handleChange, handleSubmit }: LoginFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={form.username}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

const initialState: LoginFormType = {
  username: "",
  password: "",
};

const LoginFormWithControlledForm = withControlledForm(LoginForm, initialState);

export default LoginFormWithControlledForm;
