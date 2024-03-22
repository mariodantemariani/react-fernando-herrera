import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            usContext
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavLink
                className={(args) =>
                  `nav-link ${args.isActive ? "active" : ""}`
                }
                to="/"
              >
                Home
              </NavLink>
              {/* <li className="nav-item">
                <Link className="nav-link" href="#">
                  Home
                </Link>
              </li> */}
              <NavLink
                className={(args) =>
                  `nav-link ${args.isActive ? "active" : ""}`
                }
                to="/about"
              >
                About
              </NavLink>

              <NavLink
                className={(args) =>
                  `nav-link ${args.isActive ? "active" : ""}`
                }
                to="/login"
              >
                Login
              </NavLink>

              {/* <li className="nav-item ">
                <Link className="nav-link active" href="#">
                  Features
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
