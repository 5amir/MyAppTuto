import { useLoaderData, NavLink } from "react-router-dom";

export function Blog() {
  const posts = useLoaderData();
  return (
    <div>
      <h1>BLOG</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <NavLink to={post.id}>{post.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
