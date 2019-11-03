<template>
  <div>
    <v-layout>
      <v-flex xs4>
        <panel title="Add Song">
          <v-card-text>
            <v-text-field
              label="Title"
              v-model="song.title"
            ></v-text-field>

            <v-text-field
              label="Artist"
              v-model="song.artist"
            ></v-text-field>

            <v-text-field
              label="Genre"
              v-model="song.genre"
            ></v-text-field>

            <v-text-field
              label="Album"
              v-model="song.album"
            ></v-text-field>

            <v-text-field
              label="Album Image URL"
              v-model="song.albumImage"
            ></v-text-field>

            <v-text-field
              label="Youtube"
              v-model="song.youtubeId"
            ></v-text-field>
          </v-card-text>
        </panel>
      </v-flex>
      <v-flex xs8>
        <panel title="Tabs & Lyrics">
          <v-card-text>
            <v-textarea
              label="Lyrics"
              v-model="song.lyrics"
            ></v-textarea>

            <v-textarea
              label="Tabs"
              v-model="song.tab"
            ></v-textarea>
          </v-card-text>
        </panel>
        <v-btn dark v-on:click="create" class="indigo darken-2">CREATE SONG</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  methods: {
    async create (song) {
      try {
        await SongsService.post(this.song)
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
