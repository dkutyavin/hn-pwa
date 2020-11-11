import React from 'react'
import { useInfiniteQuery } from 'react-query'
import { IntersectionObserverWrapper } from '../components/intersection-observer'
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

  const loadMoreEnabled = () => canFetchMore && !isFetchingMore

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {stories?.map((story) => (
          <pre>
            <a href={story.url}>{story.title}</a>
          </pre>
        ))}
      </div>

      <IntersectionObserverWrapper onIntersect={() => fetchMore()} enabled={loadMoreEnabled()}>
        <button disabled={!loadMoreEnabled()} onClick={() => fetchMore()}>
          Load more
        </button>
      </IntersectionObserverWrapper>
    </div>
  )
}
