import { useState } from "react";
import { url } from "../config";

export function SignUp({ setUser }) {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  async function signUpHandler(e) {
    e.preventDefault();
    try {
      const res = await fetch(url + "user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          pass,
        }),
      });
      const data = await res.json();
      if (res.status === 200) {
        setUser(data.user.username);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={signUpHandler}>
      <input
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
      />
      <input
        onChange={(e) => setPass(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}
