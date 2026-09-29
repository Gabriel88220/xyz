import type { Tweet } from "../types/Tweet";
import { TweetPreview } from "./TweetPreview";
import type { JSX } from "react";

export type TweetsListProps = {
  tweets: Array<Tweet>;
};

export function TweetsList({ tweets }: TweetsListProps): JSX.Element {
  return (
    <section>
      {tweets.map((tweet) => (
        <TweetPreview key={tweet.id} tweet={tweet} />
      ))}
    </section>
  );
}
