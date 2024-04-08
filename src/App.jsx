import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-black h-100 vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 justify-content-between">
        <Link to={"/"} className="navbar-brand d-flex align-items-center gap-2">
          <img
            src="/react.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          ReactStudentsPortal
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to={"students"} className="nav-link">
                Students
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"courses"} className="nav-link">
                Courses
              </Link>
            </li>
          </ul>
        </div>
        {/* <div>
          <span className="material-icons bg-light">nightlight_round</span>
        </div> */}
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
