<template>
  <v-form>
    <v-container>
      <div class="head-name" style="padding-top: 2rem">
        <center><h1>EDIT BOOK</h1></center>
      </div>
      <v-divider></v-divider><br />

      <v-row>
        <v-col lg="6" sm="12" md="12">
          <h4>รูปภาพปกหนังสือ</h4>
            <v-img height="250" width="70%" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
          <v-file-input accept="image/png, image/jpeg"
            prepend-icon="mdi-image-plus"
            label="Add file image" solo dense v-model="image"
          ></v-file-input>
                              <h4 style="color = 'black'">ชื่อประเภท *</h4>
<p>ชื่อประเภท</p>
                              <h4 style="color = 'black'">ชื่อผู้แต่ง *</h4>
<p>ชื่อผู้แต่ง</p>

                              <h4 style="color = 'black'">ชื่อสำนักพิมพ์ *</h4>
<p>ชื่อสำนักพิมพ์</p>

          <br />

          <v-divider></v-divider>
        </v-col>

        <v-col lg="6" sm="12" md="12">
          <div class="mx-6 mt-6">
                  <h4 style="color = 'black'">ชื่อหนังสือ *</h4>
          <v-text-field label="Solo" solo background-color="white" color="black" rounded dense
           v-model="title">
          </v-text-field>
          <h4>เรื่องย่อของหนังสือ</h4>
          <v-textarea solo name="input-7-4" label="Solo textarea"
          v-model="abstract"
          ></v-textarea>
                          <h4 style="color = 'black'">ราคา</h4>
          <v-text-field label="Solo" solo background-color="white" color="black" rounded dense
           v-model="price">
          </v-text-field>
                          <h4 style="color = 'black'">เซตหนังสือ</h4>
          <v-text-field label="Solo" solo background-color="white" color="black" rounded dense
           v-model="set">
          </v-text-field>
                    <h4>หนังสือฉบับเต็ม *</h4>
          <v-file-input accept="application/pdf" label="Avatar" solo dense
           v-model="file">
          </v-file-input>


      </div>
          <br />
          
        </v-col>
      </v-row>  <center>
      <v-btn color="black" style="color:white; margin-right:10px" @click="addBook()"> Save </v-btn>
      <v-btn color="black" style="color:white" @click="cancle()">cancle</v-btn></center>
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
      let text = "ยืนยันการแก้ไขหนังสือ";
      if (confirm(text) == true) {
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
      }}
      else {
    this.$router.push("/editbook");
  }
    },
    cancle() {
      this.title = "";
      this.abstract = "";
      this.price = "";
      this.publisher = "";
      this.type = "";
      this.set = "";
      this.file = null;
      this.image = null;
      this.allAuthor = [];
      this.$router.push("/");
    },
  },
};
</script>
<style scoped></style>
