<template>
  <div>
    <h1>Blog</h1>
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script setup>
const { data: posts } = usePosts()
</script>