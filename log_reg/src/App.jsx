import { useState } from 'react';
import Log_in from "./Login.jsx";
import Sign_in from "./Signin.jsx";

function App() {
  const [showSignin, setShowSignin] = useState(false);

  return (
    <div className="app-container">
      {showSignin ? (
        <Sign_in onBackToLogin={() => setShowSignin(false)} />
      ) : (
        <Log_in onSwitchToSignin={() => setShowSignin(true)} />
      )}
    </div>
  );
}

export default App;
