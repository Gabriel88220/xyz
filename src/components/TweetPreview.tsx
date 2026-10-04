import type { Tweet } from "../types/Tweet";
import type { JSX } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export type ApercuTweetProps = {
  tweet: Tweet;
  onToggleLike: (id: string) => void;
  afficherLienDetail?: boolean; 
};

export function ApercuTweet({
  tweet,
  afficherLienDetail = true,
}: ApercuTweetProps): JSX.Element {
  const [estDeveloppe, setEstDeveloppe] = useState(false);

  const dateLisible = new Date(tweet.createdAt).toLocaleString("fr-FR", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const contenuVisible = estDeveloppe
    ? tweet.content
    : tweet.content.slice(0, 100);

  const doitAfficherBouton = tweet.content.length > 100;

  return (
    <article className="tweet">
      <h3>{tweet.authorName}</h3>
      <p>@{tweet.authorHandle}</p>
      <p>{dateLisible}</p>

      {/* image cliquable de la page principale pour voir les details */}
      {tweet.image && afficherLienDetail && (
        <Link to={`/tweets/${tweet.id}`}>
          <img
            src={tweet.image.url}
            alt={tweet.image.alt}
            className="tweet-image"
          />
        </Link>
      )}

      {/* image non cliquable pour quand on est sur la page details */}
      {tweet.image && !afficherLienDetail && (
        <img
          src={tweet.image.url}
          alt={tweet.image.alt}
          className="tweet-image"
        />
      )}

      <p>{contenuVisible}</p>

      {doitAfficherBouton && (
        <button onClick={() => setEstDeveloppe((prev) => !prev)}>
          {estDeveloppe ? "Voir moins" : "Voir plus"}
        </button>
      )}
      <button onClick={() => onToggleLike(tweet.id)}>
        {tweet.likedByMe ? "Je n'aime plus" : "J'aime"}
      </button>

      <span>{tweet.likes} mention(s) J'aime</span>

      {/* lien pour voir la discussiosn */}
      {afficherLienDetail && (
        <Link to={`/tweets/${tweet.id}`} className="voir-discussion">
          Voir la discussion
        </Link>
      )}
  
    </article>
  );
}
