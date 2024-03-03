import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import PropTypes from "prop-types";

const PrivateRouts = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  //console.log(location.pathname);

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  if (user) {
    return <div>{children}</div>;
  }
  return (
    <div>
      <Navigate state={location.pathname} to="/login" />
    </div>
  );
};

export default PrivateRouts;
PrivateRouts.propTypes = {
  children: PropTypes.node,
};
