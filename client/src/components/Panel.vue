<template>
  <v-content>
    <v-container>
      <v-card>
        <v-toolbar flat dense class="indigo darken-2">
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <slot>
          No slot content defined.
        </slot>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
.v-toolbar__title{
  color: white;
}
</style>
