import type { Tweet } from "../types/Tweet";
import type { JSX } from "react";
import { useState } from "react";

export type TweetPreviewProps = {
  tweet: Tweet;
};

export function TweetPreview({ tweet }: TweetPreviewProps): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  const date = new Date(tweet.createdAt).toLocaleString("fr-FR", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const contentToShow = expanded
    ? tweet.content
    : tweet.content.slice(0, 100);

  const shouldShowButton = tweet.content.length > 100;

  return (
    <article className="tweet">
      <h3>{tweet.authorName}</h3>
      <p>@{tweet.authorHandle}</p>
      <p>{date}</p>

      {tweet.image && (
        <img
          src={tweet.image.url}
          alt={tweet.image.alt}
          className="tweet-image"
        />
      )}

      <p>{contentToShow}</p>

      {shouldShowButton && (
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "Voir moins" : "Voir plus"}
        </button>
      )}
    </article>
  );
}
