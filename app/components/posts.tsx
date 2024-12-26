import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="flex flex-col space-y-4">
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-2 mb-4 border"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex justify-between items-center">
              <p className="text-neutral-900 dark:hover:text-neutral-400 dark:text-neutral-100 tracking-tight">
                <b>{post.metadata.title}</b>
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {post.metadata.summary}
            </p>
          </Link>
        ))}
    </div>
  )
}
