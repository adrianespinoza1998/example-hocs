import User from "./components/User";
import withLoader from "./hoc/withLoader";
import LoginFormWithControlledForm from "./components/LoginForm";

const UserWithLoader = withLoader(User);

const App = () => {
  return (
    <div>
      <UserWithLoader />
      <LoginFormWithControlledForm />
    </div>
  );
};

export default App;
