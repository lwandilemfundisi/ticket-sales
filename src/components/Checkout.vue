<template>
  <v-container>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="onSubmit">
        <validation-provider
          v-slot="{ errors }"
          name="FirstName"
          rules="required"
        >
          <v-text-field
            v-model="firstname"
            :error-messages="errors"
            label="First Name"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="LastName"
          rules="required"
        >
          <v-text-field
            v-model="lastname"
            :error-messages="errors"
            label="Last Name"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
        >
          <v-text-field
            v-model="email"
            :error-messages="errors"
            label="E-mail"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="Address"
          rules="required"
        >
          <v-text-field
            v-model="address"
            :error-messages="errors"
            label="Address"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="ZipCode"
          rules="required"
        >
          <v-text-field
            v-model="zipCode"
            :error-messages="errors"
            label="Zip Code"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider v-slot="{ errors }" name="City" rules="required">
          <v-text-field
            v-model="city"
            :error-messages="errors"
            label="City"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="Country"
          rules="required"
        >
          <v-text-field
            v-model="country"
            :error-messages="errors"
            label="Country"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="CardNumber"
          rules="required"
        >
          <v-text-field
            v-model="cardNumber"
            :error-messages="errors"
            label="Card Number"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="CardName"
          rules="required"
        >
          <v-text-field
            v-model="cardName"
            :error-messages="errors"
            label="Card Name"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="CardExpiration"
          rules="required"
        >
          <v-text-field
            v-model="cardExpiration"
            :error-messages="errors"
            label="Card Expiration"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="CvvCode"
          rules="required|max:3|min:3"
        >
          <v-text-field
            v-model="cvvCode"
            :error-messages="errors"
            label="Cvv Code"
            required
          ></v-text-field>
        </validation-provider>
        <v-btn class="mr-4" type="submit" :disabled="invalid"> submit </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </form>
    </validation-observer>
  </v-container>
</template>

<script>
import { required, email, max, min } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("min", {
  ...min,
  message: "{_field_} may not be less than {length} characters",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    userId: "05c209ba-65fc-4397-9c16-6345ed436ada",
    basketId: "",
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    cardNumber: "",
    cardName: "",
    cardExpiration: "",
    cvvCode: "",
  }),

  methods: {
    onSubmit() {
      this.$refs.observer.validate();

      this.$data.basketId = this.$store.state.basket.basket.id
      this.$store.dispatch("checkout", this.$data);
    },
    clear() {
      this.firstname = "";
      this.lastname = "";
      this.email = "";
      this.address = "";
      this.zipCode = "";
      this.city = "";
      this.country = "";
      this.cardNumber = "";
      this.cardName = "";
      this.cardExpiration = "";
      this.cvvCode = "";
      this.$refs.observer.reset();
    },
  },
};
</script>

<codepen-resources lang="json">
  {
    "js": ["https://cdn.jsdelivr.net/npm/vee-validate@3.x/dist/vee-validate.js"]
  }
</codepen-resources>