<template>
  <v-content>
  <v-container>
    <v-card>
      <v-toolbar flat dense class="black">
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-text-field
          type="email"
          name="email"
          label="email"
          v-model="email"/>
        <v-text-field
          type="password"
          name="password"
          label="password"
          v-model="password"/>
        <br>
        <div class="error-message" v-html="error"/>
      </v-card-text>
      <v-card-actions>
          <v-btn class = "white" v-on:click="login" >Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</v-content>
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
    async login () {
      try {
        await AuthenticationService.login({
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
.error-message{
  color: red;
}

.v-toolbar__title{
  color: white;
}
</style>
