<template>
  <v-container>
    <v-card>
      <v-toolbar flat dense class="black" dark>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-text-field
          type="email"
          name="email"
          label="email"
          class="left-align"
          v-model="email"/>
        <v-text-field
          type="password"
          name="password"
          label="password"
          class="left-align"
          v-model="password"/>
        <br>
        <div class="error" v-html="error"/>
      </v-card-text>
      <v-card-actions>
          <v-btn class = "black" v-on:click="register" >Register</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color: red;
}

.left-align{
  text-align: left;
}
</style>
