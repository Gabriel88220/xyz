import type { TweetImage } from "./TweetImage";

type Product = "Tweet";


export type Tweet = {
    id: string;
    authorName: string;
    authorHandle: string;
    content: string;
    image?: TweetImage;
    createdAt: string;
    parentId?: string;
    likes: number
    likedByMe: boolean
}