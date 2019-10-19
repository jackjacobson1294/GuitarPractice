<template>
  <v-app-bar dark fixed class="indigo darken-2">
    <v-toolbar-title class="mr-4">
      <span class="home-logo" @click="navigateTo({name: 'root'})" >
        Guitar Practice
      </span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn text>
        Search
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn
        v-if = "!$store.state.isUserLoggedIn"
        text @click="navigateTo({name: 'login'})">
          Login
        </v-btn>
        <v-btn
        v-if = "!$store.state.isUserLoggedIn"
        text @click="navigateTo({name: 'register'})">
          Sign Up
        </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>

export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-logo{
  cursor: pointer;
}

.home-logo:hover{
  color: yellow;
}
</style>
