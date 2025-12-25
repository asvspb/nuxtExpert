import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PostCard from '~/components/PostCard.vue'

describe('PostCard', () => {
  it('renders post title and excerpt', () => {
    const post = { title: 'Test Title', excerpt: 'Test Excerpt' }
    const wrapper = mount(PostCard, {
      props: { post }
    })
    expect(wrapper.text()).toContain('Test Title')
    expect(wrapper.text()).toContain('Test Excerpt')
  })
})