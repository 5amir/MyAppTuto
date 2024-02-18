import { Link, useParams } from "react-router-dom";

export function Single() {
  const { id } = useParams();
  const { jaime } = useParams();

  return (
    <div>
      <h1>Article {id}</h1>
      <h1>{jaime} j'aime</h1>
      <nav>
        <Link to="/">acceuil</Link> <br />
        <Link to="/contact">contact</Link>
      </nav>
    </div>
  );
}
