import React, { useState } from "react";

export default function FormValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }
    setError("");
    alert("Form submitted!");
  };

  const isFormValid = validateEmail(email) && password.length > 0;

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "300px" }}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    
      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
}
