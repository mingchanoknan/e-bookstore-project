<template>
  <v-form style="background-color: #bfd0fd" v-model="valid">
    <v-container>
      <center><h1>ADD A NEW BOOK</h1></center>
      <v-row>
        <v-col cols="12" md="4" lg="4">
          <h4 style="color = 'black'">ชื่อหนังสือ *</h4>
          <v-text-field label="Solo" solo required background-color="white" color="black" rounded dense :rules="nameRules"
           v-model="title">
          </v-text-field>
        </v-col>

        <v-col cols="12" sm="4" lg="4">
          <v-select :items="allType" label="ประเภทของหนังสือ" dense solo
           v-model="type">
          </v-select>
        </v-col>

        <v-col cols="12" md="4" lg="4">
          <h4>รูปภาพปกหนังสือ</h4>
          <v-file-input accept="image/png, image/jpeg"
            prepend-icon="mdi-image-plus"
            label="Add file image" solo dense v-model="image"
          ></v-file-input>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="4" md="6" sm="12">
          <h4>เรื่องย่อของหนังสือ</h4>
          <v-textarea solo name="input-7-4" label="Solo textarea"
          v-model="abstract"
          ></v-textarea>
        </v-col>

        <v-col cols="12" lg="4" md="6" sm="12">
          <v-row>
            <h4>ชื่อผู้แต่ง</h4>
            <v-btn class="mx-2" fab dark x-small color="indigo"
             @click="addAuthor()">
            <v-icon dark> mdi-plus </v-icon>
            </v-btn>
          </v-row>
          <div>
            <v-text-field label="Solo" solo background-color="white" color="black" rounded dense
              v-model="author" class="mt-6">
            </v-text-field>
            <span v-for="(author, index) in allAuthor" :key="index">
              <v-chip class="ma-2" close
                @click:close="allAuthor.splice(index, 1)"
              >
                {{ author }}
              </v-chip>
            </span>
          </div>
        </v-col>
        <v-col cols="12" lg="4" md="6" sm="12">
          <h4 style="color = 'black'">ชื่อสำนักพิมพ์ *</h4>
          <v-text-field label="Solo" solo background-color="white" color="black" :rules="nameRules" required rounded dense
           v-model="publisher">
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="4" md="6" sm="12">
          <h4>หนังสือฉบับเต็ม *</h4>
          <v-file-input accept="application/pdf" required label="Avatar" solo dense :rules="nameRules"
           v-model="file">
          </v-file-input>
        </v-col>
        <v-col cols="12" lg="3" md="6" sm="12">
          <h4 style="color = 'black'">ราคาของหนังสือ</h4>
          <v-text-field label="Solo" solo background-color="white" color="black" rounded dense
           v-model="price">
          </v-text-field>
        </v-col>
        <v-col cols="12" lg="5" md="6" sm="12">
          <h4 style="color = 'black'">ชื่อของหนังสือชุด</h4>
          <v-text-field label="Solo" solo background-color="white" color="black" rounded dense
           v-model="set">
          </v-text-field>
        </v-col>
      </v-row>
      <v-btn color="#6BE89D" @click="addBook()"> Add </v-btn>
      <v-btn color="#F13F3F" @click="cancle()">cancle</v-btn>
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
    nameRules: [(v) => !!v || "Required."],
    valid: true,
  }),
  validations: {
    title: { required },
    publisher: { required },
    file: { required },
  },
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
      this.$v.$touch()
      if (!this.$v.title.$error && !this.$v.publisher.$error && !this.$v.file.$error) {
      var formData = new FormData();
      formData.append("title", this.title);
      formData.append("abstract", this.abstract);
      formData.append("price", this.price);
      formData.append("publisher", this.publisher);
      formData.append("type", this.type);
      if(this.set != ""){
        formData.append("set", this.set);
      }
      

      formData.append("file", this.file);
      if (this.image != null) {
        formData.append("image", this.image);
      }
      for (let aut of this.allAuthor) {
        formData.append("author[]", aut);
        console.log(aut)
      }
      try {
        const result = await axios.post(
          `http://localhost:3000/addbook/${this.$store.state.user.admin_id}`,
          formData
        );
        this.$router.push("/")
        console.log(result.data);
      } catch (err) {
        console.log(err);
      }}else{
        alert("ไม่ถูกต้อง กรุณาตรวจสอบข้อมูลใหม่")
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
    }
  },
};
</script>
<style scoped></style>
