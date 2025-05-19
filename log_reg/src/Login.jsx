function Login({ onSwitchToSignin }) {
  return (
    <div className="login-form">
      <h2 className="login-form__title">Iniciar Sesión</h2>

      <label className="login-form__label">
        ID:
        <input
          type="text"
          className="login-form__input"
          placeholder="Ingrese ID"
        />
      </label>

      <label className="login-form__label">
        Contraseña:
        <input
          type="password"
          className="login-form__input"
          placeholder="Ingrese contraseña"
        />
      </label>

      <button className="login-form__button">Login</button>

      <p className="login-form__text">
        ¿Aún no tienes una cuenta?{' '}
        <span
          onClick={onSwitchToSignin}
          className="login-form__link"
          style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
        >
          Regístrate
        </span>
      </p>
    </div>
  );
}

export default Login;
