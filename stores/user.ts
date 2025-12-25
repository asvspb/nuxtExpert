export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const login = async (email: string) => {
    user.value = await $fetch('/api/auth/login', {
      method: 'POST',
      body: { email }
    })
  }
  return { user, login }
})