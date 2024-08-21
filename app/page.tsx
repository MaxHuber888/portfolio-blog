import Image from 'next/image';
import Contact from './components/contact';

export default function Page() {
    return (
      <section>
          <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
              About Me
          </h1>
          <div className="flex justify-center space-x-4 my-8">
              <Image
                  src="/images/max.png"
                  alt="Max Huber headshot photo"
                  width={200}
                  height={200}
                  className="mx-auto block my-8"
              />
              <Image
                  src="/images/robot.png"
                  alt="a silly robot icon"
                  width={200}
                  height={200}
                  className="mx-auto block my-8"
              />
          </div>
          <p className="mb-4">
              Hi, I’m Max Huber. I’m a CS student and researcher with a focus on AI and a curiosity that
              extends beyond algorithms.
          </p>
          <p className="mb-4">
              I recently completed my Bachelor's Degree in Computer Science at Northeastern University and I’m
              now pursuing a Master’s Degree in AI at Northeastern.
          </p>
          <p className="mb-4">
              <strong className={"color-changing-text"}> I am also seeking a Spring 2025 co-op in AI, data engineering, or software development! </strong>
          </p>
          <Contact />
          <p className="mb-4">
              This site is a place where I will share both my professional and personal projects and ideas. I love to create
              both in technical fields and creative mediums. Check out the <a href="/blog" className={"dark:hover:text-neutral-400"}>blog</a> page to read about ideas
              that inspire me, and visit the <a href="/projects" className={"dark:hover:text-neutral-400"}>projects</a> page for a list of all of my AI, software development, game
              development, and graphic design projects.
          </p>
      </section>
    );
}
