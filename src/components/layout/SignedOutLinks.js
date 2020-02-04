import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active p-2 text-light">
          <NavLink className=" nav-link p-2 text-light" to="#2">
            A Propos
          </NavLink>
        </li>
        <li className="nav-item p-2 text-light">
          <NavLink className=" nav-link p-2 text-light" to="#3">
            Le Gaspillage
          </NavLink>
        </li>
        <li className="nav-item p-2 text-light ">
          <NavLink className="nav-link p-2 text-light" to="/faq">
            FAQ
          </NavLink>
        </li>
        <li className="nav-item p-2 text-light">
          <NavLink className="nav-link p-2 text-light" to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="btn btn-primary" to="/signup">
            S'inscrire<span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="btn btn-primary" to="/signin">
            Se Connecter
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedOutLinks;
