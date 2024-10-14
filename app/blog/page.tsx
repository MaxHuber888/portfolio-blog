import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <p className="mb-4">
        {`I decided to try and start a personal blog to improve my writing abilities. I will definitely write about AI/ML and other tech-related topics, but I also want to try 
            writing about my other interests: art, mindfulness, spirituality, movies, music, biology, physics, 
            and whatever else I feel inspired by.`}
      </p>

      <p className="mb-4">
        I will be updating this page with my latest posts. Feel free to check
        back often! You can also subscribe to the rss feed at the bottom of the
        page.
      </p>
      <h2 className="font-semibold text-xl mb-4 tracking-tighter">
        Blog Posts:
      </h2>
      <BlogPosts />
    </section>
  );
}
