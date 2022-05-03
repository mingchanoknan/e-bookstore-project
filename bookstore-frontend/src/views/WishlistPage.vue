<template>
  <div>
    <v-container grid-list-lg>
        <div class="head-name" style="padding-top: 2rem">
          <center><h1>Wish List</h1></center>
        </div>
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
        <v-flex v-for="item in interestedBook" :key="item.id" xs12 md6 lg3>
          <WishbookCard ref="close" :book="item" />
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
   interestedBook:"",
  }),
  created() {
    this.getBook();
  },
  methods: {
    close(){
      console.log("123")
    },
    async getBook() {
      try {
        let result = await axios(`http://localhost:3000/interestBook/${this.$store.state.user.customer_id}`);
        this.interestedBook = result.data;
        console.log(result.data)
      } catch (err) {
        console.log(err.message);
      }
    },async addToCart(ebookId){
      try{
        const result = await axios.post(`/addItem/${this.$store.state.user.cart.cart_id}/${ebookId}`)
      
      console.log(result.data)
      }catch(err){
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
};
</script>
<style scoped></style>
