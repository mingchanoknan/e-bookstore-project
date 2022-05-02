<template>
  <div>

    <v-container style="font-family: 'Kanit', sans-serif">
      <v-row>
        <v-col lg="6" sm="12" md="12" align="right">
          <v-img
            :src="'http://localhost:3000/' + book.image_cover"
            align="center"
            style="max-height: 550px; max-width: 350px"
          ></v-img>
        </v-col>
        <v-col lg="6" sm="12" md="12">
          <h1>{{book.title}}</h1>
          <!-- <v-rating
            v-model="rating"
            background-color="black"
            color="black"
          ></v-rating> -->
          <p>โดย <span v-for="aut in book.author" :key="aut.author_id"><span style="text-decoration:underline;">{{aut.author_name}}</span>/
            </span></p>
          <p>สำนักพิมพ์ {{book.publisher_name}}</p>
          <p>หมวดหมู่ {{book.type_name}}</p>
          <v-btn rounded color="#EFFFE3" large> มีแล้ว </v-btn>
          <v-btn rounded color="#EDC4D6" large> ซื้อ 69 บาท </v-btn>
          <v-icon color="black" large>mdi-notebook-heart-outline</v-icon>
          <p></p>
          <v-card
            max-width="400"
            color="#686868"
            style="color: white; padding: 1rem"
          >
            <p style="font-size: 15px">
              {{book.abstract}}
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="font-family: 'Kanit', sans-serif">
      <v-row>
        <v-col lg="6" sm="12" md="12" align="left" height="300px">
          <p>READER REVIWES</p>
        </v-col>
        <v-col lg="6" sm="12" md="12">
          <v-card
            max-width="500"
            color="#686868"
            style="color: white; padding: 1rem"
          >
            <center>
              <h1>{{book.average_rating}}</h1>
              <v-rating
                v-model="rating"
                background-color="purple lighten-3"
                color="purple lighten-3"
                large
                 readonly
              ></v-rating>
              <p>Average from 4 Reviews</p>
              <v-btn rounded color="#EFFFE3" large v-on:click="isShow = true"> WRITE REVIWE </v-btn>
            </center>
            <p></p> WRITE REVIWE
          </v-card>
        </v-col>
        <v-col lg="12" sm="12" md="12">
          <v-card color="white" style="color: white; padding: 1rem" v-if="isShow">
            <v-rating
              background-color="purple lighten-3"
              color="purple lighten-3"
              large
             
            ></v-rating>
            <p>Average from 4 Reviews</p>
            <v-textarea
              filled
              name="input-7-4"
              label="แสดงความคิดเห็น"
              value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
            ></v-textarea>
            <p></p>
            <v-btn rounded color="#EFFFE3" large @click="saveReview"> SAVE </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="font-family: 'Kanit', sans-serif">
      <v-row>
        <v-col lg="12" sm="12" md="12" height="300px" mx-auto>
          <v-card
            class="pa-md-4 mx-lg-auto"
            color="#FFFEEB"
            style="color: black; padding: 1rem"
          >
            <v-card-text>
              
              สนุกมากกกกกก สมกับที่รอคอยเลยค่ะ เพราะว่าหลังอ่านทัณฑ์สนธยาจบ
              ก็รอเล่มนี้มาตลอดเลย แล้วก็ดีตามที่คาดไว้เลย
              เราชอบสายแฟนตาซีโรแมนติกอยู่แล้วด้วย ฟินมาก น่ารักมาก ดราม่าน้อย
              มีปมเข้ามาให้เรื่องราวน่าติดตาม
            </v-card-text>
            <div align="right">
            <p>Kulanitframe</p>
            <p>57 ธ.ค. 2564 0:53 น<v-rating
              v-model="rating"
              background-color="purple lighten-3"
              color="purple lighten-3" small
            ></v-rating></p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import axios from '@/plugins/axios'
// import TypeBar from "../components/bar/Typebar.vue";
export default {
  name: "DetailPage",
  components: {
    // TypeBar,
  },
  data: () => ({
    book:"",
    rating:"",
  }),
  created(){
    this.getBook()
  },

  methods: {
    async getBook(){
      const result = await axios.get("http://localhost:3000/getDetailBook/"+ this.$route.params.bookId)
      this.book = result.data
      this.rating = this.book.average_rating
    // console.log(this.$route.params.bookId)
    },
    saveReview() {
      this.isShow = false

    }
  }
};
</script>
<style scoped>
</style>
