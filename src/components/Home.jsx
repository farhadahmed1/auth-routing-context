import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  //const authInfo = useContext(AuthContext);
  //console.log(authInfo.name);
  return (
    <div>
      <h2 className="text-3xl"> this is home </h2>
    </div>
  );
};

export default Home;
