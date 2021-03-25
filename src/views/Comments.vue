<template>
  <div>
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム</label>
    <input type="text" id="name" v-model="name">
    <br><br>
    <label for="comment">コメント</label>
    <textarea id="comment" v-model="comment"></textarea>
    {{comment}}
    <br><br>
    <button @click="createComment">送信</button>
    <h2>掲示板</h2>
    <br>
    <div v-for="post in posts" :key="post.name">
      <div>名前: {{post.fields.name.stringValue}}</div>
      <div>コメント: {{post.fields.comment.stringValue}}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      name: "",
      comment: "",
      posts: []
    }
  },
  name: 'App',
  components: {
  },
  computed: {
    idToken() {
      return this.$store.getters.idToken
    }
  },
  created() {
    axios.get("/comments", {
      headers: {
        Authorization: `Bearer ${this.idToken}`
      }
    })
      .then(response => {
        this.posts = response.data.documents
        console.log(response.data.documents)
      })
  },
  methods: {
    createComment() {
      axios.post("/comments",
        {
          fields: {
            name: {
              stringValue: this.name
            },
            comment: {
              stringValue: this.comment
            }
          }
        }
      )
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
      console.log("hello")
      this.name = ""
      this.comment = ""
    }
  }
}
</script>

<style>

</style>
