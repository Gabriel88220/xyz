import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { initialTweets } from "./data/tweets";
import type { Tweet } from "./types/Tweet";
import { TweetsContext } from "./contexts/TweetsContext";

export function App() {
  const [tweets, setTweets] = useState<Array<Tweet>>(initialTweets);

  const addTweet = (content: string): void => {
  setTweets((prevTweets) => {
    const newTweet: Tweet = {
      id: crypto.randomUUID(),
      authorName: "Vous",
      authorHandle: "vous",
      content,
      createdAt: new Date().toISOString(),
      likes: 0,
      likedByMe: false,
    };

    return [newTweet, ...prevTweets];
  });
  };
  
  const toggleLike = (id: string): void => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) => {
        if (tweet.id !== id) {
          return tweet; 
        }

        const wasLiked = tweet.likedByMe;

        return {
          ...tweet,
          likedByMe: !wasLiked,
          likes: wasLiked ? tweet.likes - 1 : tweet.likes + 1,
        };
      })
    );
  };

  const context = {
    tweets,
    addTweet,
    toggleLike,
  };

  return (
    <TweetsContext.Provider value={context}>
      <header>
        <h1>XYZ</h1>
      </header>

      <main>
        <Outlet />
      </main>
    </TweetsContext.Provider>
  );
}
