import { useState } from "react";
import { Message } from "./Message";
export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "mariodante",
    email: "mario@mario.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   console.log("Hey!!");
  // }, []);

  // useEffect(() => {
  //   console.log("el form state cambio!!");
  // }, [formState]);

  // useEffect(() => {
  //   console.log("el correo cambio!!");
  // }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="email"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "mariodante2" && <Message />}
    </>
  );
};
