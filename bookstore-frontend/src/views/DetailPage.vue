<template>
  <div>
    <TypeBar />

    <v-container style="font-family: 'Kanit', sans-serif">
      <v-row>
        <v-col lg="6" sm="12" md="12" align="right">
          <v-img
            src="https://cdn-local.mebmarket.com/meb/server1/193092/Thumbnail/book_detail_large.gif?2"
            align="center"
            style="max-height: 550px; max-width: 350px"
          ></v-img>
        </v-col>
        <v-col lg="6" sm="12" md="12">
          <h1>เจ้านี่เหรอซอมบี้? 4</h1>
          <v-rating
            v-model="rating"
            background-color="black"
            color="black"
          ></v-rating>
          <p>โดย SACCHI/ SHINICHI KIMURA/ KOBUICHI/ MURIRIN</p>
          <p>สำนักพิมพ์ Bongkoch Publishing</p>
          <p>หมวดหมู่ การ์ตูนทั่วไป</p>
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
              มืดมนแมนเซอร์งั้นเหรอ...
              ก็เป็นเทศบาลคอยกำจัดข้าวเหลือที่มีความสำคัญไงล่ะ!
              หลังจากที่ยูหายตัวไป เซร่าก็ซึมหงอย ส่วนฮารุนะก็เปลี่ยนร่างเป็น
              "อุนเนี้ย~ว?!" โธ่โว้ย อยากเจอกับยูจัง!
              การ์ตูนญี่ปุ่นตลกโรแมนติกพารานอร์มอลมืดมนแมนเซอร์งั้นเหรอ...
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
              <h1>4.3</h1>
              <v-rating
                v-model="rating"
                background-color="purple lighten-3"
                color="purple lighten-3"
                large
              ></v-rating>
              <p>Average from 4 Reviews</p>
              <v-btn rounded color="#EFFFE3" large v-on:click="isShow = true"> WRITE REVIWE </v-btn>
            </center>
            <p></p>
          </v-card>
        </v-col>
        <v-col lg="12" sm="12" md="12">
          <v-card color="white" style="color: white; padding: 1rem" v-if="isShow">
            <v-rating
              v-model="rating"
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
//import axios from '@/plugins/axios'
import TypeBar from "../components/bar/Typebar.vue";
export default {
  name: "DetailPage",
  components: {
    TypeBar,
  },
  data: () => ({
    isShow:false
  }),
  methods: {
    saveReview() {
      this.isShow = false
    }
  }
};
</script>
<style scoped>
</style>