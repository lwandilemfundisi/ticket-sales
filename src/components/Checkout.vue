<template>
  <v-container>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
        <validation-provider
          v-slot="{ errors }"
          name="FirstName"
          rules="required|max:10"
        >
          <v-text-field
            v-model="firstname"
            :counter="10"
            :error-messages="errors"
            label="First Name"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="LastName"
          rules="required|max:10"
        >
          <v-text-field
            v-model="lastname"
            :counter="10"
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
          rules="required|max:10"
        >
          <v-text-field
            v-model="address"
            :counter="10"
            :error-messages="errors"
            label="Address"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="ZipCode"
          rules="required|max:10"
        >
          <v-text-field
            v-model="zipCode"
            :counter="10"
            :error-messages="errors"
            label="Zip Code"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="City"
          rules="required|max:10"
        >
          <v-text-field
            v-model="city"
            :counter="10"
            :error-messages="errors"
            label="City"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="Country"
          rules="required|max:10"
        >
          <v-text-field
            v-model="country"
            :counter="10"
            :error-messages="errors"
            label="Country"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="CreditCardNumber"
          rules="required|max:10"
        >
          <v-text-field
            v-model="creditCardNumber"
            :counter="10"
            :error-messages="errors"
            label="Credit Card Number"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="CreditCardName"
          rules="required|max:10"
        >
          <v-text-field
            v-model="creditCardName"
            :counter="10"
            :error-messages="errors"
            label="Credit Card Name"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="CardExpiration"
          rules="required|max:10"
        >
          <v-text-field
            v-model="cardExpiration"
            :counter="10"
            :error-messages="errors"
            label="Credit Card Expiration"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="CvvCode"
          rules="required|max:3"
        >
          <v-text-field
            v-model="cvvCode"
            :counter="3"
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
import { required, email, max } from "vee-validate/dist/rules";
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
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    creditCardNumber: "",
    creditCardName: "",
    cardExpiration: "",
    cvvCode: "",
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.firstname = "";
      this.lastname = "";
      this.email = "";
      this.address = "";
      this.zipCode = "";
      this.city = "";
      this.country = "";
      this.creditCardNumber = "";
      this.creditCardName = "";
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