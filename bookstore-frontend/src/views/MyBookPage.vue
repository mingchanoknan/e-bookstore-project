<template>
  <div>
    <v-container grid-list-lg>
      <div class="head-name" style="padding-top: 2rem">
        <center><h1>My Books</h1></center>
      </div>
      <v-divider></v-divider><br />

      <!-- <v-layout row wrap  v-if="$store.state.select == 1">
                        <v-flex v-for="item in allBook" :key="item.id" xs12 md6 lg3>
                            <BookCard :book="item"/>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap  v-if="$store.state.select == 2">
                        <v-flex v-for="item in allBook" :key="item.id" xs12 md6 lg3>
                            <BookCard :book="item"/>
                        </v-flex>
                    </v-layout> -->
      <v-layout row wrap>
        <v-flex v-for="item in allBook" :key="item.id" xs12 md6 lg3>
          <MybookCard :book="item" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import axios from "@/plugins/axios";
import MybookCard from "@/components/card/MybookCard.vue";
export default {
  name: "MainPage",
  components: {
    MybookCard,
  },
  data: () => ({
    rowQuantity: "",
    allBook: "",
    novelBooks: "",
    comicBooks: "",
    travelBooks: "",
    textBooks: "",
    technologyBooks: "",
  }),
  created() {
    this.getMyBook();
  },
  methods: {
    // async getBook() {
    //   try {
    //     let result = await axios("http://localhost:3000/getAllBook");
    //     this.allBook = result.data;
    //     result = await axios("http://localhost:3000/getNovelBooks");
    //     this.novelBooks = result.data;
    //     result = await axios("http://localhost:3000/getComicBooks");
    //     this.comicBooks = result.data;
    //     result = await axios("http://localhost:3000/getTravelBooks");
    //     this.travelBooks = result.data;
    //     result = await axios("http://localhost:3000/getTextBooks");
    //     this.textBooks = result.data;
    //     result = await axios("http://localhost:3000/getTechnologyBooks");
    //     this.technologyBooks = result.data;
    //     // console.log(this.comicBooks)
    //   } catch (err) {
    //     console.log(err.message);
    //   }
    // },
    async getMyBook() {
      try {
        console.log(this.$store.state.user.customer_id);
        let result = await axios(
          `http://localhost:3000/getMyBook/${this.$store.state.user.customer_id}`
        );
        this.allBook = result.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {},
  watch: {},
};
</script>
<style scoped></style>
