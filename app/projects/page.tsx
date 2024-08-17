import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Projects',
  description: 'Browse my projects.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
        <p className="mb-4">
            {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
        </p>
        <h2 className="font-semibold text-xl mb-4 tracking-tighter">ML/AI/NLP Projects:</h2>
        <p className="mb-4">
            {`I'm a Vim enthusiast.`}
        </p>
      <BlogPosts />
    </section>
  )
}
