<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Online Ticket Sales</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="text-center">
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="primary"
          :disabled="disableShoppingCartButton"
          @click="goToShoppingBasket"
        >
          <v-icon dark> mdi-cart-arrow-down </v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark small color="primary">
          <v-icon dark @click="goToOrders"> mdi-file-document </v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mdiCartArrowDown, mdiFileDocumentCheck } from "@mdi/js";

export default {
  name: "App",
  created() {
    this.$store.dispatch("getUserId");
  },
  data: () => ({
    drawer: null,
    icons: {
      mdiCartArrowDown,
      mdiFileDocumentCheck,
    },
  }),
  computed: {
    disableShoppingCartButton() {
      return (
        this.$store.getters.getBasket == null ||
        this.$store.getters.getBasket == undefined
      );
    },
  },
  methods: {
    goToOrders() {
      this.$router.push({
        path: "/orders/" + this.$store.getters.getUserId,
      });
    },
    goToShoppingBasket() {
      this.$router.push({
        path: "/basketLines/" + this.$store.getters.getBasket.basketId,
      });
    },
  },
};
</script>
