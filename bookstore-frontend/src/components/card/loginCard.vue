<template>
  <v-form v-model="valid">
    <v-container >  
      <div style="position: absolute;top: 0;right: 0;">  
      <v-icon >mdi-close</v-icon>
      </div>
      <div class="head-name" style="padding-top:2rem"><center><h1> LOGIN </h1></center></div>
      <div class="mx-6 mt-6">
          <v-text-field
        v-model="firstname"
        :rules="nameRules"
        label="Username"
        background-color="#DA9C9D"
        color="black"
        required
        filled class="menu"
      ></v-text-field>

      <v-text-field
        v-model="firstname"
        :rules="nameRules"
        label="Password"
        background-color="#DA9C9D"
         color="black"
        required
        filled
        type="password"
      ></v-text-field>
      </div>
      
      <div class="text-center">
        <v-btn rounded color="#9FCDDE" large> LOGIN </v-btn>
        <v-btn rounded color="#9FCDDE" large> LOGIN ADMIN</v-btn>
      </div>

      <div style="padding-top:2rem">
        <center class="font-thai"><p>หากยังไม่สมัครบัญชี โปรด</p></center>
        <v-card class="mx-auto" max-width="29rem" outlined>
          <v-list-item three-line class="font-thai">
            <v-list-item-content >
              <v-list-item-title class="font-thai" style="font-size:1.25rem">
                สมาชิกใหม่ ?
              </v-list-item-title>
              <v-list-item-subtitle>รับข้อเสนอแนะสินค้าล่าสุดจากเรา</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-btn block tile color="#312A22" style="color:white" @click="$router.push('/customerRegister')">
            REGISTER
          </v-btn>
        </v-card>
      </div>
    </v-container>
  </v-form>
</template>
<script>
export default {
  name: "LoginCard",
  components: {},
  data: () => ({
    username: "",
    password: "",
    nameRules:[
      (v) => !!v || "Required."
    ],
    valid: false,
  }),
  methods: {
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Boogaloo&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
.head-name {
  color: black;
  font-family: "Boogaloo", cursive;
  letter-spacing: 1px;
  font-size: xx-color="black" large;
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
  font-family: 'Kanit', sans-serif;
}
</style>
l
