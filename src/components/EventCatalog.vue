<template>
  <v-container>
    <v-row>
      <v-col v-for="n in events" :key="n.id" cols="4">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="n.imageUrl" height="200px"> </v-img>
          <v-card-title v-text="n.eventName"></v-card-title>
          <v-card-subtitle v-text="n.artist"></v-card-subtitle>
          <v-card-actions>
            <v-btn color="orange lighten-2" text> Details </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="n.show = !n.show">
              <v-icon>{{
                n.show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="n.show">
              <v-divider></v-divider>
              <v-card-text v-text="n.description"></v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getEvents", {});
  },
  computed: {
    events() {
      return this.$store.getters.getEvents;
    },
  },
  data: () => ({}),
};
</script>