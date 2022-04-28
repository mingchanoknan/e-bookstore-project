<template>
  <div>
    <v-app>
      <v-container>
        <h1 class="mb-3">Register</h1>
        <v-card color="#FFFEEB">
        <v-row no-gutters>
          <v-col lg="5" sm="12" md="12">         
          <v-img src="../image/login-2.png" height="100%" width="100%"></v-img> 
          </v-col>
          <v-col lg="7" sm="12" md="12" >
            <v-stepper v-model="e1" height="100%">
              <v-stepper-header >
                <v-stepper-step :complete="e1 > 1" step="1">
                  Name of step 1
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="e1 > 2" step="2">
                  Name of step 2
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3"> Name of step 3 </v-stepper-step>
              </v-stepper-header>

              <v-stepper-items>
                <v-stepper-content step="1" >
                  <v-card class="mb-12" >
                    <v-text-field
                      label="Username"
                      placeholder="Placeholder"
                      outlined
                      v-model="username" :rules="inputRules"
                    >
                    </v-text-field>
                    <v-text-field
                      label="Password"
                      placeholder="Placeholder"
                      outlined
                      v-model="password" :rules="inputRules"
                    ></v-text-field>
                    <v-text-field
                      label="Repeat Password"
                      placeholder="Placeholder"
                      outlined
                      v-model="confirmpassword" :rules="inputRules"
                    ></v-text-field>
                  </v-card>
                  <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">
                  <v-card class="mb-12">
                    <v-text-field
                      label="Firstname"
                      placeholder="Placeholder"
                      outlined
                      v-model="firstname" :rules="inputRules"
                    ></v-text-field>
                    <v-text-field
                      label="Lastname"
                      placeholder="Placeholder"
                      outlined
                      v-model="lastname" :rules="inputRules"
                    ></v-text-field>
                  </v-card>
                  <v-btn color="primary" @click="e1 = --e1"> Cancel </v-btn>
                  <v-btn color="primary" @click="e1 = 3" > Continue </v-btn>
                </v-stepper-content>

                <v-stepper-content step="3">
                  <v-card class="mb-12">
                    <v-text-field
                      label="วัน/เดือน/ปีเกิด"
                      placeholder="Placeholder"
                      outlined
                      v-model="birthdate" :rules="inputRules"
                    ></v-text-field>
                    <v-text-field
                      label="email"
                      placeholder="Placeholder"
                      outlined
                      v-model="email" :rules="inputRules"
                    ></v-text-field>
                    <v-text-field
                      label="telephone"
                      placeholder="Placeholder"
                      outlined
                      v-model="telephone" :rules="inputRules"
                    ></v-text-field>
                  </v-card>
                  <v-btn color="primary" @click="e1 = --e1"> Prev </v-btn>
                  <v-btn color="primary" @click="e1 = 1"> Submit </v-btn>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-col>
        </v-row>
      </v-card>
      </v-container>
    </v-app>
  </div>
</template>

<script>
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
    email: "",
    telephone: "",
    inputRules:[
      (v) => !!v || "Required."
    ],
    valid: false,
  }),
  methods: {
  },
};
</script>
<style scoped>
.content {
  max-width: 800px;
  margin: auto;
  background: rgb(250, 206, 255);
  padding: 10px;
}
</style>