function Signin({ onBackToLogin }) {
  return (
    <div className="signin-form">
      <h2 className="signin-form__title">Registro</h2>

      <label className="signin-form__label">
        Nombre completo:
        <input
          type="text"
          className="signin-form__input"
          placeholder="Ingrese su nombre"
        />
      </label>

      <label className="signin-form__label">
        ID:
        <input
          type="text"
          className="signin-form__input"
          placeholder="Ingrese su ID"
        />
      </label>

      <label className="signin-form__label">
        DNI:
        <input
          type="text"
          className="signin-form__input"
          placeholder="Ingrese su DNI"
        />
      </label>

      <label className="signin-form__label">
        Correo:
        <input
          type="email"
          className="signin-form__input"
          placeholder="Ingrese su correo"
        />
      </label>

      <label className="signin-form__label">
        Contraseña:
        <input
          type="password"
          className="signin-form__input"
          placeholder="Cree una contraseña"
        />
      </label>

      <button className="signin-form__button">Registrarse</button>

      {/* Btn login */}
      <p className="signin-form__text">
        ¿Ya tienes cuenta?{' '}
        <span
          onClick={onBackToLogin}
          className="signin-form__link"
        >
          Volver a Login
        </span>
      </p>
    </div>
  );
}

export default Signin;
