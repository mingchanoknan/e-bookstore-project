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
                <v-img  v-if="infoBook.image_cover == null"
        height="250"
        width="70%"
       :src="'https://cdn.vuetifyjs.com/images/cards/cooking.png'"
      ></v-img>
      <v-img v-else
        height="250"
        width="70%"
       :src="'http://localhost:3000/' + infoBook.image_cover"
      ></v-img>
          <v-file-input accept="image/png, image/jpeg"
            prepend-icon="mdi-image-plus"
            label="Add file image" solo dense v-model="image"
          >
          </v-file-input>
                              <!-- <h4 style="color = 'black'">ชื่อประเภท *</h4>
          <v-select :items="allType" label="ประเภทของหนังสือ" dense solo
           v-model="type">
          </v-select>
                              <h4 style="color = 'black'">ชื่อผู้แต่ง *</h4>
          <v-text-field label="Solo" solo background-color="white" color="black" rounded dense
           v-model="author">
          </v-text-field>
                              <h4 style="color = 'black'">ชื่อสำนักพิมพ์ *</h4>
          <v-text-field label="Solo" solo background-color="white" color="black" rounded dense
           v-model="publisher">
          </v-text-field> -->
          <br />

          <v-divider></v-divider>
        </v-col>

        <v-col lg="6" sm="12" md="12">
          <div class="mx-6 mt-6">
                  <h4 style="color = 'black'">ชื่อหนังสือ </h4>
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
                    <h4>หนังสือฉบับเต็ม </h4>
          <v-file-input accept="application/pdf" label="Avatar" solo dense
           v-model="file">
          </v-file-input>


      </div>
          <br />
          
        </v-col>
      </v-row>  <center>
      <v-btn color="black" style="color:white; margin-right:10px" @click="saveEditBook()"> Save </v-btn>
      <v-btn color="black" style="color:white" @click="cancle()">cancle</v-btn></center>
    </v-container>
  </v-form>
</template>
<script>
import axios from "@/plugins/axios";
export default {
  name: "EditBookForm",
  components: {},
  data: () => ({
    infoBook:[],
    title: "",
    abstract: "",
    price: "",
    set: "",
    image: null,
    file: null,
  }),
  created() {
    this.getBook();
  },
  methods: {
        async getBook() {
      const result = await axios.get(
        "http://localhost:3000/getDetailBook/" + this.$route.params.bookId
      );
      this.infoBook = result.data;
      this.title = this.infoBook.title
      this.abstract = this.infoBook.abstract
      this.price= this.infoBook.price
      this.set = this.infoBook.set_name

      // console.log(this.$route.params.bookId)
    },
    async saveEditBook() {
      var formData = new FormData();
      formData.append("title", this.title);
      formData.append("abstract", this.abstract);
      formData.append("price", this.price);
      if(this.set != undefined){
        formData.append("set", this.set);
      }
      
      if(this.file != null){
        formData.append("file", this.file);
      }
      if (this.image != null) {
        formData.append("image", this.image);
      }
      try {
        const result = await axios.put(
          `http://localhost:3000/editBook/${this.$route.params.bookId}/${this.$store.state.user.admin_id}`,
          formData
        );
        console.log(result.data);
        this.$router.push("/bookdetail/"+this.$route.params.bookId)
      } catch (err) {
        console.log(err);
      }
    },
    cancle() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped></style>
