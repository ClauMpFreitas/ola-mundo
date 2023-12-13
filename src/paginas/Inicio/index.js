<<<<<<< HEAD
import styles from "./Inicio.module.css";
import posts from "json/posts.json";
import PostCard from "componentes/PostCard";
import { Link } from "react-router-dom";

export default function Inicio() {
  const postsExcluidosIds = [9, 10, 11, 12];

  const postsInicio = posts.filter(
    (post) => !postsExcluidosIds.includes(post.id)
  );

  return (
    <ul className={styles.posts}>
      {postsInicio.map((post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <PostCard post={post} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
=======
import styles from './Inicio.module.css';

import posts from 'json/posts.json';
import PostCard from "componentes/PostCard";

export default function Inicio() {
    return (
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post} />
                </li>
            ))}
        </ul>
    )
}
>>>>>>> origin/master
