<template lang="pug">
<div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-8">
        <div v-if="!isPostsLoaded" class="text-center">Yükleniyor...</div>
        <div v-if="isPostsLoaded">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr>
                <th scope="col">User Id</th>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="post in posts" :key="post.id">
                <td>{{ post.userId }}</td>
                <td>{{ post.id }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.body }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import { defineComponent, ref } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

export default defineComponent({
  name: 'MyComponent',
  setup() {
    const posts = ref([])
    const isPostsLoaded = ref(false)

    const loadData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        pinia.state.posts = response.data
        posts.value = pinia.state.posts
        isPostsLoaded.value = true
      } catch (error) {
        console.log(error)
      }
    }

    loadData()

    return {
      posts,
      isPostsLoaded
    }
  },
  pinia: pinia
})
</script>

<style lang="scss">
.container {
  max-width: 960px;
}
</style>
