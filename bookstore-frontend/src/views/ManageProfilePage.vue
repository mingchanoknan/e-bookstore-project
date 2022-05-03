<template>
  <div>
    <br />
    <v-container style="font-family: 'Kanit', sans-serif">
      <center><h1>My Account</h1></center>
      <v-divider></v-divider><br/>
      <v-row>
        <v-col lg="3" sm="12" md="12">
          <div class="avatar-upload">
            <div class="avatar-edit">
              <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
              <label for="imageUpload"></label>
            </div>
            <div class="avatar-preview">
              <div
                id="imagePreview"
                style="background-image: url('http://i.pravatar.cc/500?img=7')"
              ></div>
            </div>
          </div>
        </v-col>

        <v-col lg="9" sm="12" md="12">
          <v-card
            color="#EFFFE3"
            style="color: black; padding: 1rem; font-size:large"
            height="250px"
          >
          <v-row>
            <v-col lg="6" sm="12" md="12">
              <p>Username :</p>
              <p>Email :</p>
              <p>Password : ********</p>
            </v-col>
            <v-col lg="6" sm="12" md="12">
              <p>Firstname : </p>
              <p>Lastname : </p>
              <p>Date of brith : </p>
              <p>Member level :</p>
            </v-col>
          </v-row>
          </v-card>

          <br/>
          <div align="right">
            <v-btn @click="$router.push('/editprofile')"
              title
              color="black"
              style="color: white; margin-right: 10px"
              large
              width="250px"
            >
              แก้ไขข้อมูลส่วนตัว
            </v-btn>
            <v-btn
              title
              color="black"
              style="color: white; margin-right: 10px"
              large
              width="250px"
            >
              แก้ไขรหัสผ่าน
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="6" sm="12" md="12" >
              <v-sheet border-variant="primary" @click="$router.push('/mybook')"
      class="mx-auto transition-swing" color="#FEEEF5"
      elevation="12"
      height="128"
      width="65%" rounded="xl"
    ><v-container><h3>ชั้นหนังสือของฉัน</h3><small>รายการหนังสือทั้งหมดของคุณ</small></v-container></v-sheet><br>
       
        </v-col>

        <v-col lg="6" sm="12" md="12">
                <v-sheet
       @click="$router.push('/wishlist')"
      class="mx-auto transition-swing" color="#FEEEF5"
      elevation="12"
      height="128"
      width="65%" rounded="xl"
    ><v-container><h3>รายการที่อยากได้</h3><small>รายการหนังสือที่อยากได้</small></v-container></v-sheet>

            <br>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "DetailPage",
  components: {},
  data: () => ({}),
  methods:{
  }
};
</script>
<style scoped>
body {
  background: whitesmoke;
  font-family: "Open Sans", sans-serif;
}

h1 small {
  display: block;
  font-size: 15px;
  padding-top: 8px;
  color: gray;
}
.avatar-upload {
  position: relative;
  max-width: 205px;
  margin: 50px auto;
}
.avatar-upload .avatar-edit {
  position: absolute;
  right: 12px;
  z-index: 1;
  top: 10px;
}
.avatar-upload .avatar-edit input {
  display: none;
}
.avatar-upload .avatar-edit input + label {
  display: inline-block;
  width: 34px;
  height: 34px;
  margin-bottom: 0;
  border-radius: 100%;
  background: #d8d3ff;
  border: 1px solid transparent;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  font-weight: normal;
  transition: all 0.2s ease-in-out;
}
.avatar-upload .avatar-edit input + label:hover {
  background: #f1f1f1;
  border-color: #d6d6d6;
}
.avatar-upload .avatar-edit input + label:after {
  content: "📷";
  font-family: "FontAwesome";
  color: #757575;
  position: absolute;
  top: 5px;
  left: 0;
  right: 0;
  text-align: center;
  margin: auto;
}
.avatar-upload .avatar-preview {
  width: 192px;
  height: 192px;
  position: relative;
  border-radius: 100%;
  border: 6px solid #f8f8f8;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
}
.avatar-upload .avatar-preview > div {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
