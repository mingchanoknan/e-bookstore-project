<template>
  <v-form v-model="valid">
    <v-container>
      <center><h1>เข้าสู่ระบบ</h1></center>
      <div class="mx-6 mt-6">
          <v-text-field
        v-model="firstname"
        :rules="nameRules"
        label="Username"
        background-color="#DA9C9D"
        color="black"
        filled
        required
      ></v-text-field>

      <v-text-field
        v-model="firstname"
        :rules="nameRules"
        label="Password"
        background-color="#DA9C9D"
         color="black"
        filled
        required
      ></v-text-field>
      </div>
      
      <div class="text-center">
        <v-btn rounded color="#9FCDDE" large> เข้าสู่ระบบ </v-btn>
      </div>
    </v-container>
  </v-form>
</template>
<script>
export default {
  name: "LoginCard",
};
</script>
<style scoped></style>
l
