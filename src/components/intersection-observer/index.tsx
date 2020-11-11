import * as React from 'react'
import useIntersectionObserver from './useIntersectionObserver'

interface IntersectionWrapperProps {
  children: any
  onIntersect: () => any
  enabled?: boolean
}

export function IntersectionObserverWrapper(props: IntersectionWrapperProps) {
  const ref = React.useRef<HTMLInputElement>(null)

  useIntersectionObserver({
    onIntersect: props.onIntersect,
    target: ref.current,
    enabled: props.enabled,
  })

  return <div ref={ref}>{props.children}</div>
}
