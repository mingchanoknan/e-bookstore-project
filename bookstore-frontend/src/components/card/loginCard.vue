<template>
  <v-form v-model="valid">
    <v-container >  
      <div style="position: absolute;top: 0;right: 0;">  
      <v-icon >mdi-close</v-icon>
      </div>
      <div style="padding-top:2rem"><center><h1> LOGIN </h1></center></div>
      <div class="mx-6 mt-6">
          <v-text-field
        v-model="firstname"
        :rules="nameRules"
        label="Username"
        background-color="#DA9C9D"
        color="black"
        required
      ></v-text-field>

      <v-text-field
        v-model="firstname"
        :rules="nameRules"
        label="Password"
        background-color="#DA9C9D"
         color="black"
        required
        type="password"
      ></v-text-field>
      </div>
      
      <div class="text-center">
        <v-btn rounded color="#9FCDDE" large> LOGIN </v-btn>
        <p style="text-decoration: underline">forgot password</p>
            <v-avatar>
      <v-img src="../image/googleIcon.png" height="100%" width="100%"></v-img>
    </v-avatar>
      </div>

      <div style="padding-top:2rem">
        <center><p>หากยังไม่สมัครบัญชี โปรด</p></center>
        <v-card class="mx-auto" max-width="29rem" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                สมาชิกใหม่ ?
              </v-list-item-title>
              <v-list-item-subtitle>รับข้อเสนอแนะสินค้าล่าสุดจากเรา</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-btn block tile color="#312A22" style="color:white">
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
<style scoped></style>
l
