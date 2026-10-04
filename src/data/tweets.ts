// src/data/tweets.ts
import type { Tweet } from "../types/Tweet";

export const initialTweets: Array<Tweet> = [
  {
    id: crypto.randomUUID(),
    authorName: "Ada Lovelace",
    authorHandle: "ada",
    content: "Premier tweet court.",
    createdAt: "2026-07-01T09:12:00.000Z",
    image: {url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/500px-Ada_Lovelace_portrait.jpg", alt: "Portrait d'Ada Lovelace"},
    likes: 234,
    likedByMe: true
  },
   
  
  {
    id: crypto.randomUUID(),
    authorName: "Grace Hopper",
    authorHandle: "grace",
    content:"Ceci est un tweet très long qui dépasse largement les 180 caractères pour tester le bouton Voir plus. ".repeat(5),
    createdAt: "2026-07-02T10:00:00.000Z",
    image: {url: "https://upload.wikimedia.org/wikipedia/commons/5/55/Grace_Hopper.jpg", alt: "Portrait de Grace Hopper"},
    likes: 234265,
    likedByMe: false
  },
  {
    id: crypto.randomUUID(),
    authorName: "Alan Turing",
    authorHandle: "turing",
    content: "Un tweet sans image.",
    createdAt: "2026-07-03T11:00:00.000Z",
    image: undefined,
    likes: 2,
    likedByMe: false
  },
  {
  id: crypto.randomUUID(),
  authorName: "Margaret Hamilton",
  authorHandle: "hamilton",
  content: "Déboguer, c’est comprendre ce que l’on pensait avoir compris.",
  createdAt: "2026-07-04T08:30:00.000Z",
  image: {url: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Margaret_Hamilton_1995.jpg", alt: "Portrait de Margaret Hamilton"},
  likes: 1,
  likedByMe: true
},
{
  id: crypto.randomUUID(),
  authorName: "Tim Berners-Lee",
  authorHandle: "timbl",
  content: "Le web doit rester ouvert, accessible et libre.",
  createdAt: "2026-07-05T14:12:00.000Z",
  image: undefined,
  likes: 1245,
  likedByMe: false
},
{
  id: crypto.randomUUID(),
  authorName: "Katherine Johnson",
  authorHandle: "kjohnson",
  content: "Les mathématiques sont la poésie de la logique.",
  createdAt: "2026-07-06T09:45:00.000Z",
  image: {url: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Katherine_Johnson_1983.jpg", alt: "Portrait de Katherine Johnson"},
  likes: 12983,
  likedByMe: false
},
{
  id: crypto.randomUUID(),
  authorName: "Dennis Ritchie",
  authorHandle: "dmr",
  content: "C est un langage simple, mais puissant. Un peu comme la vie.",
  createdAt: "2026-07-07T16:20:00.000Z",
  likes: 12234,
  likedByMe: true
},
{
  id: crypto.randomUUID(),
  authorName: "Brad Pitt",
  authorHandle: "pitt",
  content: "Im the best actor in the world hands down.",
  createdAt: "2026-07-08T11:10:00.000Z",
  likes: 2222,
  likedByMe: false
},
{
  id: crypto.randomUUID(),
  authorName: "Linus Torvalds",
  authorHandle: "linus",
  content: "Parfois, le code parfait est celui que l’on n’a pas encore écrit.",
  createdAt: "2026-07-09T18:00:00.000Z",
  image: {url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Linus_Torvalds.jpeg", alt: "Portrait de Linus Torvalds"},
  likes: 23409,
  likedByMe: false
},
{
  id: crypto.randomUUID(),
  authorName: "Jean Dujardin",
  authorHandle: "jean",
  content: "Pourquoi vit-on ?",
  createdAt: "2026-07-10T07:55:00.000Z",
  likes: 1389923,
  likedByMe: false
}
];


