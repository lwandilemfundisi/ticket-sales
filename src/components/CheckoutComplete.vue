<template>
  <v-container>
    <p>High Five!<br />Your order is now submitted!</p>
    <v-row align="left" justify="space-between">
      <v-btn depressed color="primary" @click="goBackToEventCatalog">
        Go To Event Catalog
      </v-btn>
      <v-btn depressed color="primary" @click="goToOrders">
        Go To Orders
      </v-btn>
    </v-row>
  </v-container>
</template>
<script>
export default {
  methods: {
    goToOrders() {
      this.$router.push({
        path: "/orders/05c209ba-65fc-4397-9c16-6345ed436ada",
      });
    },
    goBackToEventCatalog() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
