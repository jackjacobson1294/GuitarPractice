<template>
  <panel title = 'Songs'>
    <div v-for='song in songs' :key='song.id'>
      {{song.title}}
    </div>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    Panel
  },

  data () {
    return {
      songs: null
    }
  },

  async mounted () {
    this.songs = (await SongsService.index()).data
  }

}
</script>

<style scoped>
.v-toolbar__title{
  color: white;
}
</style>
