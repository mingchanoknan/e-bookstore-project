<template>
  <div>
    <TypeBar />

    <v-btn
      v-if="$store.state.user != null && $store.state.user.role == 'admin'"
      class="mx-2 position-bottomRight"
      fab
      large
      dark
      color="#638AEF"
      @click="$router.push('/addBookForm')"
    >
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
    <v-container grid-list-lg>
      <v-layout row wrap v-if="$store.state.select == 1">
        <v-flex v-for="item in popular" :key="item.id" xs12 md6 lg3>
          <BookCard :book="item" />
        </v-flex>
      </v-layout>
      <v-layout row wrap v-if="$store.state.select == 2">
        <v-flex v-for="item in newBook" :key="item.id" xs12 md6 lg3>
          <BookCard :book="item" />
        </v-flex>
      </v-layout>
      <v-layout row wrap v-if="$store.state.select == 3">
        <v-flex v-for="item in allBook" :key="item.id" xs12 md6 lg3>
          <BookCard :book="item" />
        </v-flex>
      </v-layout>
      <v-layout row wrap v-if="$store.state.select == 4">
        <v-flex v-for="item in novelBooks" :key="item.id" xs12 md6 lg3>
          <BookCard :book="item" />
        </v-flex>
      </v-layout>
      <v-layout row wrap v-if="$store.state.select == 5">
        <v-flex v-for="item in comicBooks" :key="item.id" xs12 md6 lg3>
          <BookCard :book="item" />
        </v-flex>
      </v-layout>
      <v-layout row wrap v-if="$store.state.select == 6">
        <v-flex v-for="item in travelBooks" :key="item.id" xs12 md6 lg3>
          <BookCard :book="item" />
        </v-flex>
      </v-layout>
      <v-layout row wrap v-if="$store.state.select == 7">
        <v-flex v-for="item in textBooks" :key="item.id" xs12 md6 lg3>
          <BookCard :book="item" />
        </v-flex>
      </v-layout>
      <v-layout row wrap v-if="$store.state.select == 8">
        <v-flex v-for="item in technologyBooks" :key="item.id" xs12 md6 lg3>
          <BookCard :book="item" />
        </v-flex>
      </v-layout>
      <v-layout v-if="$store.state.select == 9">
        <SetBook />
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import axios from "@/plugins/axios";
import TypeBar from "../components/bar/Typebar.vue";
import BookCard from "@/components/card/BookCard.vue";
import SetBook from "../components/layout/SetBook.vue";
export default {
  name: "MainPage",
  components: {
    TypeBar,
    BookCard,
    SetBook,
  },
  data: () => ({
    rowQuantity: "",
    allBook: "",
    novelBooks: "",
    comicBooks: "",
    travelBooks: "",
    textBooks: "",
    technologyBooks: "",
    newBook: "",
    popular: "",
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
        result = await axios("http://localhost:3000/getNewBooks");
        this.newBook = result.data;
        result = await axios("http://localhost:3000/getPopularBooks");
        this.popular = result.data;
         console.log(this.popular)
      } catch (err) {
        console.log(err.message);
      }
    },
  },
  computed: {},
  watch: {},
};
</script>
<style scoped>
.position-bottomRight {
  position: fixed;
  z-index: 1000;
  bottom: 20px;
  right: 20px;
}
</style>
