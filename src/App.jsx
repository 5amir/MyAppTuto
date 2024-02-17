import "bootstrap/dist/css/bootstrap.css";
import {
  Link,
  NavLink,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useNavigation,
} from "react-router-dom";
import { Single } from "./components/forms/single";
import { Blog } from "./components/forms/blog";
import "./components/css/loader.css";

/*
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
  {
    path: "/blog/:id",
    element: <Single />,
  },
]);
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: "blog",
        element: <div>blog</div>,
      },
      {
        path: "article",
        children: [
          {
            path: "",
            element: <Blog />,
            loader: () =>
              fetch("https://jsonplaceholder.typicode.com/posts?_limit=10"),
          },
          {
            path: ":id",
            element: <Single />,
          },
        ],
      },
      {
        path: "contact",
        element: <div>contact</div>,
      },
    ],
  },
]);

function Root() {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        <nav className="row">
          <NavLink to="/" className="col-2">
            Home
          </NavLink>
          <NavLink to="/blog" className="col-2">
            blog
          </NavLink>
          <NavLink to="/contact" className="col-2">
            contact
          </NavLink>
          <NavLink to="/article" className="col-2">
            article
          </NavLink>
        </nav>
      </header>
      <div>
        {state === "loading" && <Spinner />}
        <Outlet />
      </div>
      <footer>
        <strong>Nous ne bougeons pas les gars</strong>
      </footer>
    </div>
  );
}

function PageError() {
  return (
    <div>
      <h1>Une erreur s'est survenue : hihi</h1>
    </div>
  );
}

function Spinner() {
  return (
    <div className="container d-flex justify-content-center align-item-center mt-5">
      <span className="loader"></span>
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
