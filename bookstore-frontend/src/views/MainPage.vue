<template>
  <div>
    <TypeBar />
    <v-container fluid grid-list-md>
                    <v-layout row wrap>
                        <v-flex v-for="item in allBook" :key="item.id" xs12 md6 lg3 >
                            <BookCard :book="item"/>
                        </v-flex>
                    </v-layout>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
import TypeBar from "../components/bar/Typebar.vue";
import BookCard from "@/components/card/BookCard.vue";
export default {
  name: "MainPage",
  components: {
    TypeBar,
    BookCard,
},
  data: () => ({
    rowQuantity: "",
    allBook: "",
  }),
  created() {
    this.getAllBook();
  },
  methods: {
    async getAllBook() {
      try {
        const result = await axios("http://localhost:3000/getAllBook");
        this.allBook = result.data[0];
      } catch (err) {
        console.log(err.message);
      }
    },
  },
  computed: {
      
  },
  watch: {
  }
};
</script>
<style scoped></style>
