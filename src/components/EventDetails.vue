<template>
  <v-card :loading="isLoading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <div v-if="event">
      <v-img height="250" :src="event.imageUrl"></v-img>
      <v-card-title v-text="event.eventName">Cafe Badilico</v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <div class="grey--text" v-text="formattedDate(event.date)"></div>
        </v-row>
        <div class="my-4 text-subtitle-1" v-text="event.eventPrice"></div>
        <div v-text="event.description"></div>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Quantity"
              clearable
              v-model="quantity"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="addToBusket">
          Add To Busket
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
import moment from "moment";
export default {
  props: {
    id: {
      type: String,
    },
  },
  data: () => ({
    quantity: 0,
  }),
  methods: {
    addToBusket() {
      this.$store.dispatch("addBasketLine", {
        basketId: this.$store.getters.getBasket.id,
        eventId: this.$props.id,
        ticketAmount: this.quantity,
      });
    },
    formattedDate(date) {
      return moment(date).format("yyyy-MM-DD");
    },
  },
  mounted() {
    this.$store.dispatch("getEvent", { eventId: this.$props.id });

    let basketId = null;

    if(this.$store.getters.getBasktet){
      basketId =this.$store.getters.getBasktet.id;
    }

    this.$store.dispatch("getBasket", {
      basketId: basketId,
    });
  },
  computed: {
    event() {
      return this.$store.getters.getEvent;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
    basket() {
      return this.$store.getters.getBasket;
    },
  },
};
</script>