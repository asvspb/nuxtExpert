export const usePosts = () => {
  return useAsyncData('posts', () => $fetch('/api/posts/'), {
    server: true,
    default: () => []
  })
}