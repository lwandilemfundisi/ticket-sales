<template>
    <v-container grid-list-xs>
      <v-data-table
        item-key="name"
        class="elevation-1"
        v-bind:headers="headers"
        v-bind:items="orders"
        :loading="isLoadingOrders"
        loading-text="Loading Orders... Please wait"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>My Orders</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
          </v-toolbar>
        </template>
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
    userId: {
      type: String,
    },
  },
  created() {
    this.$store.dispatch("getOrders", { userId: this.$props.userId });
  },
  computed: {
    orders() {
      return this.$store.getters.getOrders;
    },
    isLoadingOrders() {
      return this.$store.getters.isLoadingOrders;
    }
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
    goBackToEventCatalog() {
      this.$router.push({ path: "/" });
    },
  },
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: "Order Id",
          align: "left",
          sortable: false,
          value: "id",
        },
        {
          text: "Order Total",
          align: "left",
          sortable: false,
          value: "orderTotal",
        },
        {
          text: "Order Placed Date",
          align: "left",
          sortable: false,
          value: "orderPlaced",
        },
        {
          text: "Order Paid",
          align: "left",
          sortable: false,
          value: "orderPaid",
        }
      ],
    };
  },
};
</script>