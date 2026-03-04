import { useState } from "react";

function AuthPage({ setUser, users, setUsers }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleForm = () => setIsSignUp(!isSignUp);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (users.find(u => u.email === email)) {
      alert("User already exists!");
      return;
    }
    setUsers([...users, { email, password }]);
    setUser({ email });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const existingUser = users.find(u => u.email === email && u.password === password);
    if (existingUser) {
      setUser({ email });
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
        <form onSubmit={isSignUp ? handleSignUp : handleSignIn}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p onClick={toggleForm} style={{ cursor: "pointer", marginTop: "15px" }}>
          {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
}

export default AuthPage;