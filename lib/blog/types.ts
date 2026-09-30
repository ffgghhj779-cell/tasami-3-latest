export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type BlogPost = {
  slug: string;
  /** Title phrased as a question (client spec 8). */
  title: string;
  /** Short opening paragraph — also used as meta description. */
  summary: string;
  line: "gov" | "tech";
  publishedAt: string;
  /** Related service page for the in-article link. */
  relatedHref: string;
  relatedLabel: string;
  body: BlogBlock[];
};
