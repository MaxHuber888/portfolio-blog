export default function Contact() {
  return (
      <div>
        <h2 className="mb-4 font-semibold tracking-tighter">Connect with me:</h2>
        <ul id={"list"}>
          <li>
            Email:{" "}
            <a
                href="mailto:huber.maxi@northeastern.edu"
                className="dark:hover:text-neutral-400"
            >
              huber.maxi@northeastern.edu
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
                href="https://github.com/MaxHuber888"
                className="dark:hover:text-neutral-400"
            >
              @MaxHuber888
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
                href="https://www.linkedin.com/in/max-huber888/"
                className="dark:hover:text-neutral-400"
            >
              Maximilian Huber
            </a>
          </li>
          <li>
            Twitter:{" "}
            <a
                href="https://twitter.com/MaxHuber888"
                className="dark:hover:text-neutral-400"
            >
              @maxhuber888
            </a>
          </li>
          <li>
            My Resume:{" "}
            <a
                href="/files/resume.pdf"
                className="dark:hover:text-neutral-400"
            >
              [pdf]
            </a>
          </li>
        </ul>
        <br/>
      </div>
  )
}

