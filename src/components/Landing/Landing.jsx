import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Landing = () => {
    const { user } = useContext(UserContext);

    if (user) return null;

    return (
      <main>
        <h1>Hello, you are on the landing page for visitors.</h1>
        <p>Sign up now, or sign in to see your super secret dashboard!</p>
      </main>
    );
  };

  export default Landing;
