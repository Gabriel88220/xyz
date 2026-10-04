import type { Tweet } from "../types/Tweet";
import { ApercuTweet } from "./TweetPreview";
import type { JSX } from "react";

export type TweetsListProps = {
  tweets: Array<Tweet>;
  onToggleLike: (id: string) => void;
};

export function TweetsList({ tweets, onToggleLike }: TweetsListProps) {
  return (
    <ul>
      {tweets.map((tweet) => (
        <ApercuTweet
          key={tweet.id}
          tweet={tweet}
          onToggleLike={onToggleLike}   // 🔥 on transmet la callback
        />
      ))}
    </ul>
  );
}
