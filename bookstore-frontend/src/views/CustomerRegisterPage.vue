<template>
  <div>
    <v-container class="wrapper">
      <v-card color="#FFFEEB">
        <v-row no-gutters>
          <v-col lg="5" sm="12" md="5">
            <v-img
              src="../components/image/login-2.png"
              height="100%"
              width="100%"
            ></v-img>
          </v-col>
          <v-col lg="7" sm="12" md="7">
            <v-stepper v-model="e1" height="100%">
              <v-stepper-header background-color="black">
                <v-stepper-step :complete="e1 > 1" step="1" color="#8BBAE5">
                  Account Information
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="e1 > 2" step="2" color="#8BBAE5">
                  User Information
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3" color="#8BBAE5">
                  Role validation
                </v-stepper-step>
              </v-stepper-header>

              <v-stepper-items>
                <v-stepper-content step="1">
                  <div class="px-3">
                    <v-text-field
                      prepend-inner-icon="mdi-account"
                      label="Username"
                      outlined
                      dense
                      color="black"
                      background-color="#EDC4D6"
                      v-model="username"
                    ></v-text-field>
                    <v-text-field
                      prepend-inner-icon="mdi-lock"
                      label="Password"
                      outlined
                      dense
                      color="black"
                      v-model="password"
                      :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="passwordShow = !passwordShow"
                      :type="passwordShow ? 'text' : 'password'"
                      background-color="#EDC4D6"
                    ></v-text-field>
                    <v-text-field
                      prepend-inner-icon="mdi-lock-alert"
                      label="Repeat Password"
                      outlined
                      dense
                      color="black"
                      v-model="confirmpassword"
                      :append-icon="repeatShow ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="repeatShow = !repeatShow"
                      :type="repeatShow ? 'text' : 'password'"
                      background-color="#EDC4D6"
                    ></v-text-field>
                  </div>
                  <div class="ma-2 btn-container-single">
                    <v-btn
                      class="white--text"
                      color="#8BBAE5"
                      elevation="5"
                      @click="e1 = 2"
                    >
                      Next
                    </v-btn>
                  </div>
                </v-stepper-content>

                <v-stepper-content step="2">
                  <div class="px-3">
                    <v-text-field
                      prepend-inner-icon="mdi-account-check"
                      label="First Name"
                      outlined
                      dense
                      color="black"
                      v-model="firstname"
                      background-color="#EDC4D6"
                    ></v-text-field>
                    <v-text-field
                      prepend-inner-icon="mdi-account-check"
                      label="Last Name"
                      outlined
                      dense
                      color="black"
                      background-color="#EDC4D6"
                      v-model="lastname"
                    ></v-text-field>
                    <v-text-field
                      prepend-inner-icon="mdi-cake-variant"
                      label="Date of birth"
                      outlined
                      dense
                      color="black"
                      type="date"
                      background-color="#EDC4D6"
                      v-model="birthdate"
                    ></v-text-field>
                  </div>
                  <div class="pa-2 btn-container">
                    <v-btn
                      class="white--text"
                      color="#8BBAE5"
                      elevation="5"
                      @click="e1 = --e1"
                    >
                      Back
                    </v-btn>
                    <v-btn
                      class="white--text"
                      color="#8BBAE5"
                      elevation="5"
                      @click="e1 = 3"
                    >
                      Next
                    </v-btn>
                  </div>
                </v-stepper-content>

                <v-stepper-content step="3">
                  <div class="px-3">
                    <v-checkbox
                      v-model="isAdmin"
                      label="Are you sign up as Admin?"
                    ></v-checkbox>
                    <v-text-field
                      v-if="isAdmin"
                      v-model="position"
                      prepend-inner-icon="mdi-shield-crown"
                      label="Position"
                      outlined
                      dense
                      color="black"
                      background-color="#EDC4D6"
                    ></v-text-field>
                    <v-text-field
                      v-if="isAdmin"
                      prepend-inner-icon="mdi-key-variant"
                      label="Secret Code"
                      outlined
                      dense
                      color="black"
                      v-model="secretCode"
                      :append-icon="secretShow ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="secretShow = !secretShow"
                      :type="secretShow ? 'text' : 'password'"
                      background-color="#EDC4D6"
                    ></v-text-field>
                  </div>
                  <div class="pa-2 btn-container">
                    <v-btn
                      class="white--text"
                      color="#8BBAE5"
                      elevation="5"
                      @click="e1 = --e1"
                    >
                      Back
                    </v-btn>
                    <v-btn
                      class="white--text"
                      color="#6fcead"
                      @click="register()"
                      elevation="5"
                    >
                      Submit
                    </v-btn>
                  </div>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data: () => ({
    e1: 1,
    username: "",
    password: "",
    confirmpassword: "",
    firstname: "",
    lastname: "",
    birthdate: "",
    secretCode: "",
    position: "",
    isAdmin: false,
    passwordShow: false,
    repeatShow: false,
    secretShow: false,
    inputRules: [(v) => !!v || "Required."],
    valid: false,
  }),

  methods: {
    async register() {
      try {
        if (this.isAdmin) {
          const result = await axios.post(
            "http://localhost:3000/admin/register",
            {
              username: this.username,
              password: this.password,
              fname: this.firstname,
              lname: this.lastname,
              date_of_birth: this.birthdate,
              position: this.position,
              secretCode: this.secretCode
            }
          );
          console.log(result.data);
        } else {
          const result = await axios.post(
            "http://localhost:3000/customer/register",
            {
              username: this.username,
              password: this.password,
              fname: this.firstname,
              lname: this.lastname,
              date_of_birth: this.birthdate,
            }
          );
          console.log(result.data);
        }
        this.$store.dispatch("modalLoginAction")
        this.$router.push('/')
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped>
.v-stepper__header {
  background-color: #f1eee8 !important;
}
.btn-container {
  display: flex;
  justify-content: space-between;
}
.btn-container-single {
  display: flex;
  justify-content: flex-end;
}
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>