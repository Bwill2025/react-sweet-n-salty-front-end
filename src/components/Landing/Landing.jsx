import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Landing = () => {
    const { user } = useContext(UserContext);

    if (user) return null;

    return (
      <main>
        <h1>Need to fill your Pantry?</h1>
        <p>Sign up now, or sign in to fill your dream pantry!</p>
      </main>
    );
  };

  export default Landing;
