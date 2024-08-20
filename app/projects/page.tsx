import { Projects } from 'app/components/projects'

export const metadata = {
  title: 'Projects',
  description: 'Browse my projects.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <p className="mb-4">
        {`This is my true "portfolio", containing all of the projects that I am proud of. This list includes both 
        purely personal projects and work done for school or competitions. Projects in each category are listed in chronological order.`}
      </p>
        <div className="mb-4 border">
          <h2 className="font-semibold text-xl mb-4 tracking-tighter" style={{color:"#00A99D"}}>ML/AI:</h2>
            <p className="mb-4" style={{color:"#00A99D"}}>
                {`All of my research, projects, and apps centered around ML, NLP and AI models.`}
            </p>
            <Projects projType="ai" />
        </div>
        <br></br>
        <div className="mb-4 border">
          <h2 className="font-semibold text-xl mb-4 tracking-tighter" style={{color:"#7692FF"}}>Coding:</h2>
          <p className="mb-4" style={{color:"#7692FF"}}>
            {`All of my miscellaneous software projects and apps.`}
          </p>
            <Projects projType="coding" />
        </div>
        <br></br>
        <div className="mb-4 border">
          <h2 className="font-semibold text-xl mb-4 tracking-tighter" style={{color:"#F92A82"}}>Game Dev:</h2>
          <p className="mb-4" style={{color:"#F92A82"}}>
            {`All of my video game projects.`}
          </p>
          <Projects projType="gamedev" />
        </div>
        <br></br>
        <div className="mb-4 border">
          <h2 className="font-semibold text-xl mb-4 tracking-tighter" style={{color:"#E89005"}}>Visual Art:</h2>
          <p className="mb-4" style={{color:"#E89005"}}>
            {`All of my graphic design work and creative visual art projects.`}
          </p>
          <Projects projType="visual" />
        </div>
    </section>
  )
}
