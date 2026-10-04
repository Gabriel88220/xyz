import { useParams, Link } from "react-router-dom";
import { initialTweets } from "../data/tweets";
import { ApercuTweet } from "../components/TweetPreview";
import { TweetsList } from "../components/TweetsList";

export const TweetDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  // 1. Trouver le tweet principal
  const tweet = initialTweets.find(t => t.id === id);

  if (tweet === undefined) {
    return (
      <section>
        <p>Ce tweet n'existe pas.</p>
        <Link to="/">Retour à l'accueil</Link>
      </section>
    );
  }

  // 2. Trouver les réponses
  const replies = initialTweets.filter(t => t.parentId === id);

  return (
    <section>
      {/* Tweet principal sans lien vers sa propre page */}
      <ApercuTweet tweet={tweet} afficherLienDetail={false} />

      <h2>Réponses</h2>

      {replies.length > 0 ? (
        <TweetsList tweets={replies} />
      ) : (
        <p>Aucune réponse pour ce tweet.</p>
      )}
    </section>
  );
};
