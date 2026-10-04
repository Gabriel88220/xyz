import { useState } from "react";
import React from "react";


export type TweetFormProps = {
  onSubmit: (content: string) => void;
};

const CONTENT_MAX_LENGTH = 280;

export function TweetForm({ onSubmit }: TweetFormProps) {
  const [content, setContent] = useState("");

  const remaining = CONTENT_MAX_LENGTH - content.length;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const cleaned = content.trim();
    if (cleaned.length === 0 || cleaned.length > CONTENT_MAX_LENGTH) {
      return;
    }

    onSubmit(cleaned);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        maxLength={CONTENT_MAX_LENGTH}
        placeholder="Quoi de neuf ?"
      />

      <div>Caractères restants : {remaining}</div>

      <button
        type="submit"
        disabled={content.trim().length === 0 || content.length > CONTENT_MAX_LENGTH}
      >
        Publier
      </button>
    </form>
  );
}
