import { Link } from "react-router-dom";

export const NotFoundPage = () => (
  <section>
    <h1>Page introuvable</h1>
    <Link to="/">Retour à l'accueil</Link>
  </section>
);
