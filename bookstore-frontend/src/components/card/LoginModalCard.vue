<template>
  <v-form v-model="valid">
    <v-container>
      <div class="close-container" @click="activeModal()">
        <v-icon large>mdi-close</v-icon>
      </div>
      <div class="head-name">
        <center><h1>LOGIN</h1></center>
      </div>
      <div class="mx-6 mt-6">
        <v-text-field
          v-model="username"
          :rules="nameRules"
          label="Username"
          background-color="#DA9C9D"
          color="black"
          required
          filled
          class="menu"
        ></v-text-field>

        <v-text-field
          v-model="password"
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
        <div class="mb-2">
          <v-btn rounded color="#9FCDDE" large @click="loginCustomer()" > LOGIN AS USER</v-btn>
        </div>
        <div class="mt-2">
          <v-btn rounded color="#9FCDDE" large @click="loginAdmin()"> LOGIN AS ADMIN</v-btn>
        </div>
      </div>

      <div style="padding-top: 2rem" class="mx-6 mb-2">
        <center class="font-thai"><p>หากยังไม่สมัครบัญชี โปรด</p></center>
        <v-card class="mx-auto" max-width="29rem" outlined>
          <v-list-item three-line class="font-thai">
            <v-list-item-content>
              <v-list-item-title class="font-thai" style="font-size: 1.25rem">
                สมาชิกใหม่ ?
              </v-list-item-title>
              <v-list-item-subtitle
                >รับข้อเสนอแนะสินค้าล่าสุดจากเรา</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-btn
            block
            tile
            color="#312A22"
            style="color: white"
            @click="routeToRegister()"
          >
            REGISTER
          </v-btn>
        </v-card>
      </div>
    </v-container>
  </v-form>
</template>
<script>
import { required} from "vuelidate/lib/validators";
import axios from '@/plugins/axios'
export default {
  name: "LoginCard",
  components: {},
  data: () => ({
    username: "",
    password: "",
    nameRules: [(v) => !!v || "Required."],
    valid: true,
  }),
  validations: {
    username: { required },
    password: { required },
  },
  methods: {
    activeModal() {
      console.log("wda");
      this.$store.dispatch("modalLoginAction");
    },
    routeToRegister() {
      this.$store.dispatch("modalLoginAction");
      this.$router.push("/customerRegister");
    },
    async loginCustomer(){
      this.$v.$touch()
      if (!this.$v.username.$error && !this.$v.password.$error) {
      try{
        
         const result = await axios.post("http://localhost:3000/customer/login" ,{username: this.username, password: this.password})
        localStorage.setItem('token', result.data.token.token)
        this.$store.dispatch("keepUser", result.data.user)
        this.activeModal()
      }
      catch(err){
        alert("ลูกค้ากรอกรหัสผ่านผิดกรุณาตรวจสอบอีกครั้ง!");
      }}
    },
    async loginAdmin(){
      if (!this.$v.username.$error && !this.$v.password.$error) {
      try{
        const result = await axios.post("http://localhost:3000/admin/login" ,{username: this.username, password: this.password})
        console.log(result.data)
        localStorage.setItem('token', result.data.token.token)
        this.$store.dispatch("keepUser", result.data.user)   
        this.activeModal()
      }
      catch(err){
        alert("Admin กรอกรหัสผ่านผิดกรุณาตรวจสอบอีกครั้ง!");
      }}
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Boogaloo&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");
.head-name {
  color: black;
  font-family: "Boogaloo", cursive;
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
.close-container{
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
}
</style>
l
