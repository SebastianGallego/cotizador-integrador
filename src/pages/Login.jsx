export default function Login() {
  return (
    <>
      <h1>Formulario de Login</h1>
      <form>
        <input
          type="text"
          name="email"
          id="inputEmail"
          placeholder="Ingrese email"
        />
        <input
          type="passwod"
          name="password"
          id=""
          placeholder="Ingrese password"
        />
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}
