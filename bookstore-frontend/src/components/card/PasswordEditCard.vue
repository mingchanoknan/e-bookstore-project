<template>
  <v-form v-model="valid">
    <v-container>
      <div class="close-container">
      <v-icon large>mdi-close</v-icon>
      </div>
      <div class="head-name">
        <center><h1>แก้ไขรหัสผ่าน</h1></center>
      </div>
      <div class="mx-6 mt-6">
                  <v-text-field
          solo
          background-color="#EDC4D6"
          color="black"
          dense
          prepend-inner-icon="mdi-lock"
          label="Password"
          outlined
          v-model="password"
          :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="passwordShow = !passwordShow"
          :type="passwordShow ? 'text' : 'password'"
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

      <div align="right">
        <div class="mb-2">
          <v-btn rounded color="#9FCDDE" large @click="loginCustomer()">
            LOGIN AS USER</v-btn
          >
        </div>
      </div>

    
    </v-container>
  </v-form>
</template>
<script>
import axios from "@/plugins/axios";
export default {
  name: "LoginCard",
  components: {},
  data: () => ({
    username: "",
    password: "",
    nameRules: [(v) => !!v || "Required."],
    valid: true,
  }),
  methods: {
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Boogaloo&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");
.head-name {
  color: black;
  font-family: 'Kanit', sans-serif;
  letter-spacing: 1px;
  font-size: xx-color= "black" large;
  padding-left: 0.8em;
  padding-right: 1em;
}
.menu {
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  padding-left: 0.2em;
  padding-right: 0.2em;
  margin-bottom: 0px !important;
  font-family: "Open Sans", sans-serif;
}
.font-thai {
  font-family: "Kanit", sans-serif;
}
.close-container {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
}
</style>
l
