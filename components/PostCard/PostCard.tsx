import Tag from '@/components/Tag'
import { CoreContent } from '@/lib/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import { motion } from 'framer-motion'
import Link from 'next/link'
import formatDate from '@/lib/utils/formatDate'

export interface PostCardProps {
  posts: CoreContent<Blog>[]
  showTags?: boolean
}

export default function PostCard({ posts, showTags = true }: PostCardProps) {
  return (
    <ul>
      {posts.map(({ slug, title, tags, summary,date }, index) => (
        <motion.li
          key={slug}
          className="py-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: index / 10 }}
        >
          <Link href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
            <article className="space-y-2 gap-3 xl:grid xl:grid-cols-5 xl:space-y-0 xl:items-baseline bg-opacity-20 py-5 cursor-pointer">
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime={date}>{formatDate(date)}</time>
                </dd>
              </dl>
              <div className="space-y-3 xl:col-span-4">
                <span className="text-2xl font-bold leading-8 tracking-tight">
                  <Link href={`/blog/${slug}`}>
                    <span className="text-gray-900 dark:text-gray-100 duration-300">
                      {title}
                    </span>
                  </Link>
                </span>
                {showTags && tags && (
                  <div className="flex flex-wrap gap-3">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                  
                )}
                <div className="prose text-gray-900 dark:text-gray-100 max-w-none">{summary}</div>
              </div>
            </article>
          </Link>
        </motion.li>
      ))}
    </ul>
  )
}
