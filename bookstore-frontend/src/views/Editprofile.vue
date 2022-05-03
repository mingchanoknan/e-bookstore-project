<template>
  <v-form>
    <v-container class="body">
      <div class="head-name" style="padding-top: 2rem">
        <center><h1>Edit Profile</h1></center>
      </div>
      <v-divider></v-divider><br/>
      <v-row>
        <v-col cols="12" md="4" lg="6">
          <h4 style="color = 'black'">Username</h4>
          <v-text-field label="Solo" solo background-color="#EDC4D6" color="black" rounded dense
           v-model="username">
          </v-text-field>
        </v-col>
        

        <v-col cols="12" md="4" lg="6">
          <h4>Password</h4>

                              <v-text-field solo background-color="#EDC4D6" color="black" rounded dense
                      prepend-inner-icon="mdi-lock"
                      label="Password"
                      outlined
                      v-model="password"
                      :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="passwordShow = !passwordShow"
                      :type="passwordShow ? 'text' : 'password'"
                    ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" lg="6">
          <h4>Firstname</h4>
          <v-text-field label="Solo" solo background-color="#EDC4D6" color="black" rounded dense
           v-model="title">
          </v-text-field>
        </v-col>

        <v-col cols="12" lg="6" md="4">
          <h4>Lastname</h4>
          <v-text-field label="Solo" solo background-color="#EDC4D6" color="black" rounded dense
           v-model="title">
          </v-text-field>
        </v-col>
        <v-col cols="12" lg="4" md="6" sm="12">
          <h4 style="color = 'black'">Birthdate</h4>
                    <v-text-field solo rounded
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
      <v-row>
      </v-row>
      <v-divider></v-divider><br>
      <div align="right">
      <v-btn title color="black" style="color: white" large @click="$router.push('/profile')"> กลับไปหน้าโปรไฟล์ </v-btn>
      <v-btn title color="black" style="color: white; margin-left: 10px" large @click="editprofile()"> ยืนยันการแก้ไข </v-btn>
      </div>
    </v-container>
  </v-form>
</template>
<script>
import axios from "@/plugins/axios";
export default {
  name: "AddBookForm",
  components: {},
  data: () => ({
    allType: [],
    type: "",
    author: "",
    allAuthor: [],
    title: "",
    abstract: "",
    price: "",
    publisher: "",
    set: "",
    image: null,
    file: null,
    password: 'Password',
    passwordShow: false,
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => (`The email and password you entered don't match`),
    }
  }),
  created() {
    this.getTypeBook();
  },
  methods: {
    async getTypeBook() {
      try {
        const result = await axios.get("http://localhost:3000/bookType");
        for (let type of result.data) {
          this.allType.push(type.type_name);
        }
        console.log(this.allType);
      } catch (err) {
        console.log(err.message);
      }
    },
    addAuthor() {
      this.allAuthor.push(this.author);
      this.author = "";
    },
    async addBook() {
      var formData = new FormData();
      formData.append("title", this.title);
      formData.append("abstrac", this.abstract);
      formData.append("price", this.price);
      formData.append("publisher", this.publisher);
      formData.append("type", this.type);
      formData.append("set", this.set);

      formData.append("file", this.file);
      if (this.image != null) {
        formData.append("image", this.image);
      }
      for (let aut of this.allAuthor) {
        formData.append("author[]", aut);
      }
      try {
        const result = await axios.post(
          `http://localhost:3000/addbook/${this.$store.state.user.admin_id}`,
          formData
        );
        console.log(result.data);
      } catch (err) {
        console.log(err);
      }
    },
    cancle(){
        this.title = ""
        this.abstract = ""
        this.price = ""
        this.publisher = ""
        this.type = ""
        this.set = ""
        this.file = null
        this.image = null
        this.allAuthor = []
        this.$router.push('/')
    },
    async editprofile() {
      
    }
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
.body{
    font-family: 'Kanit', sans-serif;
}
</style>
