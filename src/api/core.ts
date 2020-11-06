/**
 * Simple json getter
 */
export async function fetcher<T = unknown>(url: string) {
  const response = await fetch(url, getRequestParams())
  const result = await response.json()
  return result as T
}

function getRequestParams() {
  const result: RequestInit = {}

  result.method = 'GET'
  result.headers = getDefaultHeaders()
  result.mode = 'cors'

  return result
}

function getDefaultHeaders() {
  const result = new Headers()

  result.set('Content-Type', 'application/json')

  return result
}