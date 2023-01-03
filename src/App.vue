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
    <v-footer dark padless>
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in footerIcons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
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
    icons: [mdiCartArrowDown, mdiFileDocumentCheck],
    footerIcons: [
      "mdi-facebook",
      "mdi-twitter",
      "mdi-linkedin",
      "mdi-instagram",
    ],
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
        path: "/basketLines/" + this.$store.getters.getBasket.id,
      });
    },
  },
};
</script>
