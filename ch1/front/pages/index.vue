<template>
  <v-container>
    <post-form v-if="me" />
    <div>
      <post-card v-for="p in mainPosts" :key="p.id" :post="p" />
    </div>
  </v-container>
</template>

<script>
  import PostCard from "~/componets/PostCard";
  import PostForm from "~/componets/PostForm";

  export default {
    components: {
      PostCard,
      PostForm,
    },
    data() {
          return{
              name: 'Nuxt.js'
          }
      },
    computed: {
      me() {
        return this.$store.state.user.me
      },
      mainPosts() {
        return this.$store.state.post.mainPosts;
      }
    }
  }
</script>

<style>

</style>

