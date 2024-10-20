import Link from "next/link";
import { formatDate, getProjects } from "app/projects/utils";

export function Projects({ projType }: { projType: string }) {
  let allProjects = getProjects(projType);

  return (
    <div>
      {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => {
          return (
            <Link
              key={post.slug}
              className="flex border flex-col space-y-1 mb-4 group"
              href={`/projects/${post.slug}`}
            >
              <div className="w-full flex items-center space-x-4">
                <div className="flex items-center justify-center min-w-[40px]">
                  <span
                    className="text-3xl"
                    role="img"
                    aria-label="project emoji"
                  >
                    {post.metadata.emoji || "✨"}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2">
                    <p className="text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-neutral-400">
                      <b>{post.metadata.title}</b>
                    </p>
                    <p
                      className={`text-sm group-hover:text-neutral-600 ${
                        post.metadata.status === "CLOSED"
                          ? "text-[#F92A82]"
                          : post.metadata.status === "ACTIVE"
                            ? "text-[#00A99D]"
                            : "text-[#7692FF]"
                      }`}
                    >
                      [{post.metadata.status}]
                    </p>
                  </div>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                    {post.metadata.summary}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
