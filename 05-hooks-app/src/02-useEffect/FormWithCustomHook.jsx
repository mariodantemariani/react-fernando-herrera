import { useForm } from "../hooks/useForm";
export const FormWithCustomHook = () => {
  const { formState, username, email, password, onInputChange, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  const { username2 } = formState;
  username2 + 1;

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
      <h1>Formulario con custom hook</h1>
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
      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      ></input>

      <button className="btn btn-primary mt-2" onClick={onResetForm}>
        clear
      </button>
    </>
  );
};
