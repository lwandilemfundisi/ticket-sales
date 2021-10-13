<template>
  <v-container grid-list-xs>
    <v-data-table
      item-key="name"
      class="elevation-1"
      v-bind:headers="headers"
      v-bind:items="basketLines"
      :loading="isLoadingBasketLines"
      loading-text="Loading basket lines... Please wait"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>My Basket</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                Checkout
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text> </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="checkout">
                  Proceed Checkout
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <!-- <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2"> mdi-pencil </v-icon>
        <v-icon small> mdi-delete </v-icon>
      </template> -->
    </v-data-table>
    <div class="text-left pt-2">
      <v-btn color="primary" class="mr-2" @click="goBackToEventCatalog">
        Back To EventCatalog
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    basketId: {
      type: String,
    },
  },
  created() {
    this.$store.dispatch("getBasketLines", { basketId: this.$props.basketId });
  },
  computed: {
    basketLines() {
      return this.$store.getters.getBasketLines;
    },
    isLoadingBasketLines() {
      return this.$store.getters.isLoadingBasketLines;
    },
    formTitle() {
      return "Ready For Checkout?";
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
  },
  methods: {
    close() {
      this.dialog = false;
    },
    checkout() {
      this.$router.push({ path: "/checkout" });
    },
    goBackToEventCatalog() {
      this.$router.push({ path: "/" });
    },
  },
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: "Event Name",
          align: "left",
          sortable: false,
          value: "eventName",
        },
        {
          text: "Date",
          align: "left",
          sortable: false,
          value: "date",
        },
        {
          text: "Price Ticket",
          align: "left",
          sortable: false,
          value: "ticketPrice",
        },
        {
          text: "Quantity",
          align: "left",
          sortable: false,
          value: "quantity",
        },
        {
          text: "Total",
          align: "left",
          sortable: false,
          value: "total",
        },
      ],
    };
  },
};
</script>