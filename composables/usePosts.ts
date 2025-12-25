interface Post {
  id: number
  title: string
  excerpt: string
}

export const usePosts = () => {
  return useAsyncData<Post[]>('posts', () => $fetch<{posts: Post[]}>('/api/posts/').then(res => res.posts), {
    server: true,
    default: () => []
  })
}