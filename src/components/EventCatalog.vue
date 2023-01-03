<template>
  <v-container>
    <v-row>
      <v-col v-for="n in events" :key="n.id" cols="4">
        <v-hover v-slot="{ hover }">
          <v-card class="mx-auto" max-width="344">
            <v-img :src="n.imageUrl" height="200px"
              ><v-expand-transition>
                <div
                  v-if="hover"
                  class="
                    d-flex
                    transition-fast-in-fast-out
                    orange
                    darken-2
                    v-card--reveal
                    text-h2
                    white--text
                  "
                  style="height: 100%"
                  v-text="n.eventPrice"
                ></div> </v-expand-transition
            ></v-img>
            <v-card-title v-text="n.eventName"></v-card-title>
            <v-card-subtitle v-text="n.artist"></v-card-subtitle>
            <v-card-actions>
              <v-btn color="orange lighten-2" text @click="showDetails(n.id)">
                <v-icon>mdi-cart</v-icon>
              </v-btn>
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
        </v-hover>
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
  methods: {
    showDetails(id) {
      this.$router.push({ path: "/details/" + id });
    },
  },
};
</script>