const explicitApiUrl = import.meta.env.VITE_API_URL
const isDev = import.meta.env.DEV

export const API_URL = explicitApiUrl ? explicitApiUrl : isDev ? 'http://localhost:3000' : ''

export async function apiFetch(path, options) {
  const res = await fetch(`${API_URL}${path}`, options)
  const contentType = res.headers.get('content-type') || ''
  const data = contentType.includes('application/json') ? await res.json() : await res.text()
  if (!res.ok) {
    const message = typeof data === 'object' && data && 'error' in data ? data.error : 'Request failed'
    throw new Error(message)
  }
  return data
}
