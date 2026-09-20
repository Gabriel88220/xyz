// src/data/tweets.ts
import { Tweet } from "../types/Tweet";

export const initialTweets: Array<Tweet> = [
  {
    id: crypto.randomUUID(),
    authorName: "Ada Lovelace",
    authorHandle: "ada",
    content: "Premier tweet court.",
    createdAt: "2026-07-01T09:12:00.000Z",
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/500px-Ada_Lovelace_portrait.jpg",
      alt: "Portrait d'Ada Lovelace"
    }
  },
  {
    id: crypto.randomUUID(),
    authorName: "Grace Hopper",
    authorHandle: "grace",
    content:"Ceci est un tweet très long qui dépasse largement les 180 caractères pour tester le bouton Voir plus. ".repeat(5),
    createdAt: "2026-07-02T10:00:00.000Z",
    image: {url: "https://upload.wikimedia.org/wikipedia/commons/5/55/Grace_Hopper.jpg", alt: "Portrait de Grace Hopper"}
  },
  {
    id: crypto.randomUUID(),
    authorName: "Alan Turing",
    authorHandle: "turing",
    content: "Un tweet sans image.",
    createdAt: "2026-07-03T11:00:00.000Z",
    image: undefined
  }
];


