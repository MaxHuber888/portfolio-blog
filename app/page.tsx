import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <h2 className="mb-4 font-semibold tracking-tighter">Contact Me:</h2>
        <ul id={"list"}>
            <li>Email: <a href="mailto:huber.maxi@northeastern.edu">huber.maxi@northeastern.edu</a></li>
            <li>GitHub: <a href="https://github.com/MaxHuber888">@MaxHuber888</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/max-huber888/">Maximilian Huber</a></li>
            <li>Twitter: <a href="https://twitter.com/MaxHuber888">@maxhuber888</a></li>
        </ul>
    </section>
  )
}
