import Link from "next/link"

export default function PostList ({posts}) {
  return (
    <ul>
      {
        posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          )
        })
      }
    </ul>
  )
}