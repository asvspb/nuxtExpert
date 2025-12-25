<template>
  <v-card class="b-postcard b-postcard_theme_dark">
    <v-card-title class="b-postcard__title b-postcard__title_size_l">
      {{ post.title }}
    </v-card-title>
    <v-card-text class="b-postcard__content">
      {{ post.excerpt }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
interface Post {
  id: number
  title: string
  excerpt: string
}

defineProps<{ post: Post }>()
</script>