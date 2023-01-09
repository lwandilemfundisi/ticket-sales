<template>
  <v-card class="mx-auto my-12" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
    </v-img>
    <v-card-subtitle class="pb-0"> Hi Five! </v-card-subtitle>
    <v-card-text class="text--primary">
      <div>We have recieved your order!</div>
    </v-card-text>
    <v-card-actions>
      <v-btn depressed color="primary" @click="goBackToEventCatalog">
        Go To Event Catalog
      </v-btn>
      <v-btn depressed color="primary" @click="goToOrders">
        Go To Orders
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  methods: {
    goToOrders() {
      this.$router.push({
        path: "/orders/" + this.$store.getters.getUserId,
      });
    },
    goBackToEventCatalog() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
