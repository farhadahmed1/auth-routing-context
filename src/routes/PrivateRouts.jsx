import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import PropTypes from "prop-types";

const PrivateRouts = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  if (user) {
    return <div>{children}</div>;
  }
  return (
    <div>
      <Navigate to="/login" />
    </div>
  );
};

export default PrivateRouts;
PrivateRouts.propTypes = {
  children: PropTypes.node,
};
