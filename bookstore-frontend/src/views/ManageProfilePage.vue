<template>
  <div>
    <br />
    <v-container style="font-family: 'Kanit', sans-serif">
      <center><h1>My Account</h1></center>
      <v-divider></v-divider><br />
      <v-row>
        <v-col lg="3" sm="12" md="12">
          <div class="avatar-upload">
            <div class="avatar-preview">
              <v-img
                v-if="user.image_path == undefined || user.image_path == null"
                src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
              >
              </v-img>
              <v-img v-else :src="`http://localhost:3000/${user.image_path}`">
              </v-img>
              <!-- <div
                id="imagePreview"
                style="background-image: url('http://i.pravatar.cc/500?img=7')"
              ></div> -->
            </div>
          </div>
        </v-col>

        <v-col lg="9" sm="12" md="12">
          <v-card
            color="#EFFFE3"
            style="color: black; padding: 1rem; font-size: large"
            height="250px"
          >
            <v-row>
              <v-col lg="6" sm="12" md="12">
                <h4>Username : {{ user.username }}</h4>
              </v-col>
              <v-col lg="6" sm="12" md="12">
                <p>Firstname : {{ user.fname }}</p>
                <p>Lastname : {{ user.lname }}</p>
                <p>
                  Date of brith :
                  {{ (user.date_of_birth) }}
                </p>
                <p v-if="$store.state.user.role != 'customer'">
                  position: {{ $store.state.user.position }}
                </p>
                <p v-else>Member level : {{ $store.state.user.member_level }}</p>
              </v-col>
            </v-row>
          </v-card>

          <br />
          <div align="right">
            <v-btn
              @click="$router.push('/editprofile')"
              title
              color="black"
              style="color: white; margin-right: 10px"
              large
              width="250px"
            >
              แก้ไขข้อมูลส่วนตัว
            </v-btn>
            <v-btn
              @click="toggle()"
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
      <v-row v-if="$store.state.user.role == 'customer'">
        <v-col lg="6" sm="12" md="12">
          <v-sheet
            border-variant="primary"
            @click="$router.push('/mybook')"
            class="mx-auto transition-swing"
            color="#FEEEF5"
            elevation="12"
            height="128"
            width="65%"
            rounded="xl"
            ><v-container
              ><h3>ชั้นหนังสือของฉัน</h3>
              <small>รายการหนังสือทั้งหมดของคุณ</small></v-container
            ></v-sheet
          ><br />
        </v-col>

        <v-col lg="6" sm="12" md="12">
          <v-sheet
            @click="$router.push('/wishlist')"
            class="mx-auto transition-swing"
            color="#FEEEF5"
            elevation="12"
            height="128"
            width="65%"
            rounded="xl"
            ><v-container
              ><h3>รายการที่อยากได้</h3>
              <small>รายการหนังสือที่อยากได้</small></v-container
            ></v-sheet
          >

          <br />
        </v-col>
      </v-row>
    </v-container>
    <PasswordEditCard :active="toggleEdit" />
  </div>
</template>
<script>
import PasswordEditCard from "../components/card/PasswordEditCard.vue";
import axios from "@/plugins/axios";
export default {
  name: "DetailPage",
  components: {
    PasswordEditCard,
  },
  data: () => ({
    toggleEdit: false,
    user: [],
  }),
  mounted() {
    this.getProfile();
  },
  methods: {
    toggle() {
      this.toggleEdit = !this.toggleEdit;
    },
    async getProfile() {
      let result;

      if (this.$store.state.user.role == "customer") {
        result = await axios.get(
          "http://localhost:3000/customer/profile/" +
            this.$store.state.user.customer_id
        );
      } else {
        result = await axios.get(
          "http://localhost:3000/admin/profile/" +
            this.$store.state.user.admin_id
        );
      }
      console.log(result.data)
      this.user = result.data[0];
      this.user.date_of_birth = (new Date(this.user.date_of_birth)).toString().substr(0, 16);
      // console.log(result.data[0].date_of_birth.substr(0,10))
    },
  },
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
