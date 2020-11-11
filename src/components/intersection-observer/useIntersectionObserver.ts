import React from 'react'

export default function useIntersectionObserver({
  enabled = true,
  onIntersect,
  target,
}: UseIntersectionObserverParams) {
  React.useEffect(() => {
    if (!enabled || !target) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect()
          }
        })
      },
      {
        threshold: 1.0,
      }
    )

    observer.observe(target)

    return () => {
      observer.unobserve(target)
    }
  }, [target, onIntersect, enabled])
}

interface UseIntersectionObserverParams {
  onIntersect: () => any
  target: Element | null

  enabled?: boolean
}
