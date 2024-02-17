import "bootstrap/dist/css/bootstrap.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        Acceuil <br />{" "}
        <nav>
          <Link to="/blog">blog</Link> <br />
          <Link to="/contact">contact</Link>
        </nav>
      </div>
    ),
  },
  {
    path: "/blog",
    element: (
      <div>
        Blog
        <br />{" "}
        <nav>
          <Link to="/">acceuil</Link> <br />
          <Link to="/contact">contact</Link>
        </nav>
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        contact
        <br />{" "}
        <nav>
          <Link to="/">acceuil</Link> <br />
          <Link to="/blog">blog</Link>
        </nav>
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
