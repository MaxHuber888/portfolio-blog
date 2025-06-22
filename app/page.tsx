import Image from "next/image";
import Contact from "./components/contact";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">About Me</h1>
      <div className="flex justify-center space-x-4 my-8">
        <div className="flex-shrink-0" style={{ maxWidth: "100%" }}>
          <Image
            src="/images/max.png"
            alt="Max Huber headshot photo"
            width={200}
            height={200}
            className="block max-w-full"
            style={{ height: "auto", width: "100%", maxWidth: "200px" }}
          />
        </div>
        <div className="flex-shrink-0" style={{ maxWidth: "100%" }}>
          <Image
            src="/images/robot.png"
            alt="a silly robot icon"
            width={200}
            height={200}
            className="block max-w-full"
            style={{ height: "auto", width: "100%", maxWidth: "200px" }}
          />
        </div>
      </div>
      <h2 className="mb-4 text-xl font-semibold color-changing-text">
        Who Am I?
      </h2>
      <p className="mb-4">
        Hi, my name is Maximilian Huber. I am a software engineer with a strong
        interest in AI and healthcare technology. However, I am also interested
        in exploring diverse and creative fields, including game development,
        data science, and design.
      </p>
      <h2 className="mb-4 text-xl font-semibold color-changing-text">
        What Do I Do?
      </h2>
      <p className="mb-4">
        I have completed my Bachelor's Degree in Computer Science at
        <a
          href="https://www.northeastern.edu"
          className="dark:hover:text-neutral-400 color-changing-text"
        >
          {" "}
          Northeastern University
        </a>
        , where I pursued a concentration in Artificial Intelligence. I
        completed two co-ops during my undergrad:
      </p>
      <ol className="mb-4 list-decimal space-y-2">
        <li>
          I was a ML Research Assistant at the{" "}
          <a
            href="https://bcintelligence.org"
            className="dark:hover:text-neutral-400 color-changing-text"
          >
            Business & Collective Intelligence Lab
          </a>
          , where I applied NLP techniques like topic modeling, semantic
          analysis, named-entity recognition, and network analysis to understand
          brand connectivity in social media and online communities.
        </li>
        <li>
          I worked as a Full-Stack Engineer at{" "}
          <a
            href="https://collx.app"
            className="dark:hover:text-neutral-400 color-changing-text"
          >
            CollX
          </a>
          , where I delivered an LLM-powered AI chatbot that used RAG
          (Retrieval-Augmented Generation) to answer user's questions about
          trading cards through the CollX app. I also learned some data science
          and data engineering skills, creating useful KPI dashboards with SQL
          and setting up automated ETL pipelines using Apache Airflow.
        </li>
      </ol>
      <p className="mb-4">
        I am now pursuing a Master’s Degree in Artificial Intelligence at
        Northeastern University. I am mainly focusing on courses in computer
        vision, deep learning, and reinforcement learning, though I am also
        interested in exploring HCI and how it relates to AI. I am currently
        working as a Research Assistant at the{" "}
        <a
          href="https://tuniklab.sites.northeastern.edu"
          className="dark:hover:text-neutral-400 color-changing-text"
        >
          Movement Neuroscience Lab
        </a>{" "}
        at Northeastern, doing computational neuroscience research involving
        graph theory and reinforcement learning. This work is motivated by two
        goals of mine: to improve my understanding of complex AI architectures
        and topics, and to expose myself to emerging AI applications in
        healthcare. Also in pursuit of these goals, I am working as the lead TA
        for an AI in Health course at NEU.
      </p>
      <p className="mb-4">
        Throughout my time at NEU, I have also worked on dozens of software and
        design projects, for personal, academic, and industry use, in a variety
        of tech stacks and languages. Those that I am most excited about can be
        viewed in the{" "}
        <a
          href="/projects"
          className="dark:hover:text-neutral-400 color-changing-text"
        >
          Projects
        </a>{" "}
        tab.
      </p>
      <Contact />
    </section>
  );
}
