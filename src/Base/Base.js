// import React from "react";


// export default function Base({children}) {
//   return (
//     <>
//       <header>
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="/">
//               Zen School
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav ms-auto">
//                 <li className="nav-item">
//                   <a className="nav-link active" aria-current="page" href="/">
//                     Home
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="/student">
//                     Student
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="/teacher">
//                     Teacher
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </header>
//       <div className="container"> 
//         {children}
//       </div>
//       <footer></footer>
//     </>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Base({ children }) {
  const history = useHistory();
  const handleNavigation = (path) => {
  
    
    history.push(path);
  
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Zen School
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
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <button
                    className="nav-link active"
                    onClick={() => handleNavigation("/")}
                  >
                    Home
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    onClick={() => handleNavigation("/student")}
                  >
                    Student
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    onClick={() => handleNavigation("/teacher")}
                  >
                    Teacher
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="container">{children}</div>
      <footer></footer>
    </>
  );
}

