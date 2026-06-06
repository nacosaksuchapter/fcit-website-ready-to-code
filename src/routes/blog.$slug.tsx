import { createFileRoute, Link, useRouter, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, User } from "lucide-react";
import { POSTS } from "@/data/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Article"} — FCIT AKSU Blog` },
      { name: "description", content: loaderData?.excerpt ?? "FCIT AKSU blog article." },
      { property: "og:title", content: loaderData?.title ?? "FCIT AKSU Blog" },
      { property: "og:description", content: loaderData?.excerpt ?? "" },
      { property: "og:type", content: "article" },
    ],
  }),
  component: BlogPost,
  notFoundComponent: PostNotFound,
  errorComponent: PostError,
});

function BlogPost() {
  const post = Route.useLoaderData();
  return (
    <article>
      <header className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          <Link to="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-primary-foreground/80 hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-foreground">
            {post.category}
          </span>
          <h1 className="mt-4 font-heading text-3xl font-extrabold sm:text-4xl">{post.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-primary-foreground/80">
            <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
            <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> {formatDate(post.date)}</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        {post.body.map((para: string, i: number) => (
          <p key={i} className="mb-6 text-lg leading-relaxed text-foreground/90">
            {para}
          </p>
        ))}
      </div>
    </article>
  );
}

function PostNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-heading text-2xl font-bold text-foreground">Article not found</h1>
      <p className="mt-2 text-muted-foreground">The article you're looking for doesn't exist.</p>
      <Link to="/blog" className="mt-6 inline-flex items-center gap-1 font-semibold text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> Back to Blog
      </Link>
    </div>
  );
}

function PostError({ reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-heading text-2xl font-bold text-foreground">Something went wrong</h1>
      <button
        onClick={() => {
          router.invalidate();
          reset();
        }}
        className="mt-6 rounded-md bg-primary px-5 py-2.5 font-semibold text-primary-foreground"
      >
        Try again
      </button>
    </div>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
