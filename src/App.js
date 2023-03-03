import { useState } from "react";
import SignUp from "./components";
import "./App.css";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      {!user ? (
        <SignUp setUser={setUser} />
      ) : (
        <h2>Welcome to the site {user}</h2>
      )}
    </div>
  );
}

export default App;
