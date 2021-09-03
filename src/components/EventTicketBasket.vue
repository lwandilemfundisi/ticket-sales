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
      ticketLines: [
        {
          eventName: "To the Moon and Back",
          date: "2021/07/03",
          ticketPrice: "R135",
          quantity: "1",
          total: "R135",
        },
      ],
    };
  },
};
</script>