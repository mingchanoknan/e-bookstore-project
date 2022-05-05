<template>
  <v-form v-model="valid">
    <v-container class="body">
      <div class="head-name" style="padding-top: 2rem">
        <center><h1>Edit Profile</h1></center>
      </div>
      <v-divider></v-divider><br />
      <v-row>
        <div class="avatar-upload">
          <div class="avatar-edit">
            <input
              @change="selectImages"
              type="file"
              id="imageUpload"
              accept=".png, .jpg, .jpeg"
            />
            <label for="imageUpload"></label>
          </div>
          <div class="avatar-preview">
            <v-img
              v-if="!hasImg"
              src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
            >
            </v-img>

            <v-img
              v-else-if="hasImg && imgProfile != null"
              :src="showSelectImage()"
            >
            </v-img>
            <v-img
              v-else
              :src="`http://localhost:3000/${$store.state.user.image_path}`"
            >
            </v-img>

            <!-- <div
                id="imagePreview"
                style="background-image: url('http://i.pravatar.cc/500?img=7')"
              ></div> -->
          </div>
        </div>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" lg="6">
          <h4 style="color = 'black'">Username *</h4>
          <v-text-field
            label="Solo"
            solo
            background-color="#EDC4D6"
            color="black"
            rounded
            dense
            :rules="nameRules"
            v-model="username"
          >
          </v-text-field>
        </v-col>

        <v-col cols="12" md="4" lg="6"> </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" lg="6">
          <h4>Firstname *</h4>
          <v-text-field
            label="Solo"
            solo
            background-color="#EDC4D6"
            color="black"
            rounded
            dense
            v-model="fname"
            :rules="nameRules"
          >
          </v-text-field>
        </v-col>

        <v-col cols="12" lg="6" md="4">
          <h4>Lastname *</h4>
          <v-text-field
            label="Solo"
            :rules="nameRules"
            solo
            background-color="#EDC4D6"
            color="black"
            rounded
            dense
            v-model="lname"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" lg="4" md="6" sm="12">
          <h4 style="color = 'black'">Birthdate *</h4>
          <v-text-field
            solo
            :rules="nameRules"
            rounded
            prepend-inner-icon="mdi-cake-variant"
            label="Date of birth"
            outlined
            dense
            color="black"
            type="date"
            background-color="#EDC4D6"
            v-model="birthdate"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row> </v-row>
      <v-divider></v-divider><br />
      <div align="right">
        <v-btn
          title
          color="black"
          style="color: white"
          large
          @click="$router.push('/profile')"
        >
          กลับไปหน้าโปรไฟล์
        </v-btn>
        <v-btn
          title
          color="black"
          style="color: white; margin-left: 10px"
          large
          @click="saveEditprofile()"
        >
          ยืนยันการแก้ไข
        </v-btn>
      </div>
    </v-container>
  </v-form>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import axios from "@/plugins/axios";
export default {
  name: "AddBookForm",
  components: {},
  data: () => ({
    username: "",
    fname: "",
    lname: "",
    birthdate: null,
    hasImg: false,
    imgProfile: null,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
    nameRules: [(v) => !!v || "Required."],
    valid: true,
  }),
  validations: {
    username: { required },
    fname: { required },
    lname: { required },
    birthdate: { required },
  },
  created() {
    this.username = this.$store.state.user.username;
    this.fname = this.$store.state.user.fname;
    this.lname = this.$store.state.user.lname;
    this.birthdate = this.$store.state.user.date_of_birth
      .toString()
      .substr(0, 10);
    if (this.$store.state.user.image_path != null) {
      this.hasImg = true;
    }
  },
  methods: {
    selectImages(event) {
      this.hasImg = true;
      this.imgProfile = event.target.files;
    },
    async saveEditprofile() {
      let formData = new FormData();
      formData.append("username", this.username);
      formData.append("fname", this.fname);
      formData.append("lname", this.lname);
      formData.append("date_of_birth", this.birthdate);
      this.$v.$touch();
      if (
        !this.$v.username.$error &&
        !this.$v.fname.$error &&
        !this.$v.lname.$error &&
        !this.$v.birthdate.$error
      ) {
        try {
          var result;
          if (this.$store.state.user.role == "customer") {
            if (this.imgProfile != null) {
              formData.append("image", this.imgProfile[0]);
              console.log(formData);
              result = await axios.put(
                `http://localhost:3000/customer/editProfile/${this.$store.state.user.customer_id}`,
                formData
              );
            } else {
              result = await axios.put(
                `http://localhost:3000/customer/editProfile/${this.$store.state.user.customer_id}`,
                formData
              );
            }
          } else {
            if (this.imgProfile != null) {
              formData.append("image", this.imgProfile[0]);
              console.log(formData);
              result = await axios.put(
                `http://localhost:3000/admin/editProfile/${this.$store.state.user.admin_id}`,
                formData
              );
            } else {
              result = await axios.put(
                `http://localhost:3000/admin/editProfile/${this.$store.state.user.admin_id}`,
                formData
              );
            }
          }
          console.log(result.data);
          this.$router.push("/profile");
        } catch (err) {
          console.log(err);
        }
      } else {
        alert("ไม่ถูกต้องกรุณาตรวจสอบอีกครั้ง!");
      }
    },
    showSelectImage() {
      if (this.imgProfile == null) {
        return;
      }
      return URL.createObjectURL(
        new Blob(this.imgProfile, { type: "application/zip" })
      );
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");
.body {
  font-family: "Kanit", sans-serif;
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
