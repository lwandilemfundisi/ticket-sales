<template>
  <v-container>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">
          Personal Details
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">
          Address Details
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Banking Details</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1" style="height: auto">
          <v-card
            class="mb-12"
            outlined
            style="margin: 0px auto; text-align: center; width: 630px"
          >
            <validation-observer
              ref="observePersonalDetails"
              v-slot="{ invalid }"
            >
              <form @submit.prevent="validatePersonalDetails">
                <v-card-text>
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
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    type="submit"
                    color="primary"
                    @click="e1 = 2"
                    :disabled="invalid"
                  >
                    Continue
                  </v-btn>
                </v-card-actions>
              </form>
            </validation-observer>
          </v-card>
        </v-stepper-content>
        <v-stepper-content step="2" style="height: auto">
          <v-card
            class="mb-12"
            outlined
            style="margin: 0px auto; text-align: center; width: 630px"
          >
            <validation-observer
              ref="observeAddressDetails"
              v-slot="{ invalid }"
            >
              <v-card-text>
                <form @submit.prevent="validateAddressDetails">
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
                  <validation-provider
                    v-slot="{ errors }"
                    name="City"
                    rules="required"
                  >
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
                </form>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  type="submit"
                  color="primary"
                  @click="e1 = 3"
                  :disabled="invalid"
                >
                  Continue
                </v-btn>
              </v-card-actions>
            </validation-observer>
          </v-card>
        </v-stepper-content>
        <v-stepper-content step="3" style="height: auto">
          <v-card
            class="mb-12"
            outlined
            style="margin: 0px auto; text-align: center; width: 630px"
          >
            <validation-observer
              ref="observeBankingDetails"
              v-slot="{ invalid }"
            >
              <v-card-text>
                <form @submit.prevent="validateBankingDetails">
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
                </form>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  type="submit"
                  color="primary"
                  @click="submitOrder"
                  :disabled="invalid"
                >
                  Continue
                </v-btn>
              </v-card-actions>
            </validation-observer>
          </v-card>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <v-overlay :value="isLoading">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
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
    userId: "",
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
    e1: 1
  }),
  
  computed: {
    isLoading() {
      return this.$store.getters.isBusyCheckingOut;
    },
  },
  methods: {
    validatePersonalDetails() {
      this.$refs.observePersonalDetails.validate();
    },
    validateAddressDetails() {
      this.$refs.observeAddressDetails.validate();
    },
    validateBankingDetails() {
      this.$refs.observeBankingDetails.validate();
    },
    submitOrder() {
      this.$data.userId = this.$store.getters.getUserId;
      this.$data.basketId = this.$store.state.basket.basket.id;
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

<codepen-resources lang="json">
  {
    "js": ["https://cdn.jsdelivr.net/npm/vee-validate@3.x/dist/vee-validate.js"]
  }
</codepen-resources>