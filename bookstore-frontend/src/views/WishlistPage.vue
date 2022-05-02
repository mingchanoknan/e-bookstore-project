<template>
  <div>
    <v-container grid-list-lg>
            <center><h1>WISH LIST</h1></center>
      <v-divider></v-divider><br/>

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
          <WishbookCard :book="item" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import axios from '@/plugins/axios';
import WishbookCard from "@/components/card/WishbookCard.vue";
export default {
  name: "MainPage",
  components: {
    WishbookCard,
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
    this.getBook();
  },
  methods: {
    async getBook() {
      try {
        let result = await axios("http://localhost:3000/getAllBook");
        this.allBook = result.data;
        result = await axios("http://localhost:3000/getNovelBooks");
        this.novelBooks = result.data;
        result = await axios("http://localhost:3000/getComicBooks");
        this.comicBooks = result.data;
        result = await axios("http://localhost:3000/getTravelBooks");
        this.travelBooks = result.data;
        result = await axios("http://localhost:3000/getTextBooks");
        this.textBooks = result.data;
        result = await axios("http://localhost:3000/getTechnologyBooks");
        this.technologyBooks = result.data;
        // console.log(this.comicBooks)
      } catch (err) {
        console.log(err.message);
      }
    },
  },
  computed: {},
  watch: {},
};
</script>
<style scoped></style>
