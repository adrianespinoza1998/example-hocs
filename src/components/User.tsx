const User = () => {
  const user = {
    name: "John",
    email: "john@gmail.com",
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default User;
