<template>
  <v-card class="mx-auto my-12" max-width="374">
    <div v-if="event">
      <v-img height="250" :src="event.imageUrl"></v-img>
      <v-card-title v-text="event.eventName">Cafe Badilico</v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <div class="grey--text" v-text="event.date"></div>
        </v-row>
        <div class="my-4 text-subtitle-1" v-text="event.eventPrice"></div>
        <div v-text="event.description"></div>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="reserve">
          Reserve
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
  },
  data: () => ({}),
  methods: {
    reserve() {},
  },
  mounted() {
    this.$store.dispatch("getEvent", { id: this.$props.id });
  },
  computed: {
    event() {
      return this.$store.getters.getEvent;
    },
  },
};
</script>