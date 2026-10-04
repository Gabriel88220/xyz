import { useContext } from "react";
import { TweetsContext } from "../contexts/TweetsContext";
import { TweetForm } from "../components/TweetForm";
import { TweetsList } from "../components/TweetsList";
export function TweetsMasterPage() {
  const { tweets, addTweet, toggleLike } = useContext(TweetsContext)!;

  const topLevelTweets = tweets.filter((t) => !t.parentId);

  return (
    <section>
      <h2>Accueil</h2>

      <TweetForm onSubmit={addTweet} />

      <TweetsList tweets={topLevelTweets} onToggleLike={toggleLike} />
    </section>
  );
}
