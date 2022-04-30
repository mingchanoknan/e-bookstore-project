<template>
  <div>
    <span v-for="set of setBook" :key="set.set_id">
       <h1>{{set.name}}</h1>
      <v-layout row wrap>
        <v-flex v-for="item in set.list" :key="item.ebook_id" xs12 md6 lg3>
          <BookCard :book="item" />
        </v-flex>
      </v-layout>
    </span>
  </div>
</template>
<script>
import axios from "axios";
import BookCard from "../card/BookCard.vue";
export default {
  name: "SetBookLayout",
  components: { BookCard },
  data: () => ({
    setBook: [],
    book: [],
  }),
  created() {
    this.getAllSetBook();
  },
  methods: {
    async getAllSetBook() {
      try {
        const result = await axios.get("http://localhost:3000/getSetBooks");
        const set = result.data;
        for (let item of set) {
          const result = await axios.get(
            `http://localhost:3000/getBySetId/${item.set_id}`
          );
          console.log(result.data);
          let obj = {
            name: item.set_name,
            list: result.data,
          };
          this.setBook.push(obj);
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped></style>
