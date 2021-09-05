<template>
  <v-container grid-list-xs>
    <v-data-table
      item-key="name"
      class="elevation-1"
      v-bind:headers="headers"
      v-bind:items="ticketLines"
      loading-text="Loading... Please wait"
    ></v-data-table>
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
    this.$store.dispatch("getTicketLines", { basketId: this.$props.basketId });
  },
  computed: {
    ticketLines() {
      return this.$store.getters.getTicketLines;
    },
  },
  data() {
    return {
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