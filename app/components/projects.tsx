import Link from 'next/link'
import { formatDate, getProjects } from 'app/projects/utils'

export function Projects({ projType }: { projType: string }) {
  let allProjects = getProjects(projType)

  return (
      <div>
        {allProjects
            .sort((a, b) => {
              if (
                  new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
              ) {
                return -1
              }
              return 1
            })
            .map((post) => (
                <Link
                    key={post.slug}
                    className="flex border flex-col space-y-1 mb-4 group"
                    href={`/projects/${post.slug}`}
                >
                  <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                    <p className="text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-neutral-400">
                      ⭢ {post.metadata.title}
                    </p>
                  </div>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm group-hover:text-neutral-600">
                    {post.metadata.summary}
                  </p>
                </Link>
            ))}
      </div>
  )
}
