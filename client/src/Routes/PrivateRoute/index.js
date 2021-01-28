import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

// function PrivateRoute({ component: Component, loggedIn, ...rest }) {
//   console.log(rest);
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         loggedIn.token ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/enter",
//               state: { from: props.location },
//             }}
//           />
//         )
//       }
//     />
//   );
// }

const PrivateRoute = ({ component: Component, loggedIn, path }) => (
  <Route
    path={path}
    render={(props) =>
      loggedIn.token ? <Component {...props} /> : <Redirect to="/enter" />
    }
  />
);

PrivateRoute.propTypes = {};

const matchStateToProps = (state) => ({
  loggedIn: state.loggedIn,
});
export default connect(matchStateToProps)(PrivateRoute);
