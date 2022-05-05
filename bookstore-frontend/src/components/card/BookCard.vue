<template>
  <!-- <div>This is card</div> -->
  <v-card class="mx-auto my-12 font" max-width="374" style="position: relative">
    <div class="background-card"></div>
    <center class="front pt-6">
      <v-img
        v-if="$props.book.image_cover == null"
        height="250"
        width="70%"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>
      <v-img
        v-else
        height="250"
        width="70%"
        :src="'http://localhost:3000/' + $props.book.image_cover"
      ></v-img>
    </center>
    <div class="front">
      <v-container fluid class="px-6 py-6">
        <p class="type">{{ $props.book.type_name }}</p>
        <v-tooltip bottom color="#da9c9d">
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" @click="getBook()" class="header">
              {{ $props.book.title }}
            </div>
          </template>
          <span>{{ $props.book.title }}</span>
        </v-tooltip>
        <div class="author">
          <span v-for="(author, index) in $props.book.author" :key="index"
            ><span style="text-decoration: underline">{{
              author.author_name
            }}</span
            >&nbsp;&nbsp;</span
          >
        </div>
        <div class="price">{{ $props.book.price }} ฿</div>
      </v-container>
      <v-container class="px-6 pb-6">
        <span>
          <v-row>
            <v-rating
              :value="$props.book.average_rating"
              color="amber"
              dense
              half-increments
              readonly
              size="25"
            ></v-rating>
            <v-spacer></v-spacer>
            <span
              v-if="
                $store.state.user == null || $store.state.user.role != 'admin'
              "
            >
              <v-icon
                @click="addToCart($props.book.ebook_id)"
                large
                class="pr-3"
                >mdi-cart-outline</v-icon
              >
              <v-icon @click="addToInterest($props.book.ebook_id)" large
                >mdi-notebook-heart-outline</v-icon
              >
            </span>
            <span v-else>
              <v-icon large @click="editbook($props.book.ebook_id)" class="pr-3"
                >mdi-pencil-outline</v-icon
              ></span
            >
          </v-row>
        </span>
      </v-container>
    </div>
  </v-card>
</template>
<script>
import axios from "@/plugins/axios";
export default {
  name: "BookCard",
  data: () => ({
    data: "",
  }),
  props: ["book"],
  created() {},
  methods: {
    getBook() {
      this.$router.push("/bookdetail/" + this.$props.book.ebook_id);
    },
    async addToCart(ebookId) {
      if (this.$store.state.user == null) {
        this.$store.dispatch("modalLoginAction");
      } else {
        let text = "ต้องการเพิ่มหนังสือลงตะกร้าหรือไม่";
        if (confirm(text) == true) {
          try {
            const result = await axios.post(
              `/addItem/${this.$store.state.user.cart.cart_id}/${ebookId}`
            );

            console.log(result.data);
          } catch (err) {
            console.log(err);
          }
        }
      }
    },
    async addToInterest(ebookId) {
      if (this.$store.state.user == null) {
        this.$store.dispatch("modalLoginAction");
      } else {
        let text = "ต้องการเพิ่มหนังสือในรายการที่สนใจหรือไม่";
        if (confirm(text) == true) {
          try {
            const result = await axios.put(
              `/addToInterest/${ebookId}/${this.$store.state.user.customer_id}`
            );
            console.log(result.data);
          } catch (err) {
            console.log(err);
          }
        }
      }
    },
    editbook() {
      this.$router.push("/editbook/" + this.$props.book.ebook_id);
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap");
.font {
  font-family: "Kanit", sans-serif;
}
.background-card {
  background-color: #da9c9d;
  width: 100%;
  height: 40%;
  position: absolute;
}
.front {
  position: relative;
}
.type {
  text-decoration: underline;
  color: rgb(163, 188, 196);
  font-weight: 500;
}
.header {
  font-size: 1.4em;
  padding-left: 0.5em;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.author {
  font-size: 1em;
  padding-left: 1.3em;
  color: #a57b7c;
  font-weight: bold;
}
.price {
  text-align: right;
  font-size: 1.6em;
  font-weight: bold;
  color: #3b85c9;
}
.v-tooltip__content {
  color: black !important;
  font-size: 1.2em;
}
</style>
