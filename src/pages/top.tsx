import React from 'react'
import { useInfiniteQuery } from 'react-query'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { getTopStories } from '../services/top-stories'

export function TopPage() {
  const { data, fetchMore, canFetchMore, isFetchingMore } = useInfiniteQuery(
    'topStories',
    (key, page: number = 0) => getTopStories(page),
    {
      getFetchMore: (lastPage) => lastPage.next,
    }
  )

  const stories = data?.flatMap((page) => page.stories)

  const loadMoreButtonRef = React.useRef<HTMLButtonElement>(null)

  useIntersectionObserver({
    enabled: canFetchMore,
    target: loadMoreButtonRef.current!,
    onIntersect: () => fetchMore(),
  })

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {stories?.map((story) => (
          <pre>
            <a href={story.url}>{story.title}</a>
          </pre>
        ))}
      </div>

      <button
        ref={loadMoreButtonRef}
        disabled={!canFetchMore || !!isFetchingMore}
        onClick={() => fetchMore()}
      >
        more
      </button>
    </div>
  )
}
