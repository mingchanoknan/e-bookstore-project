<template>
  <div>
    <TypeBar />
    <br />
    <v-container style="font-family: 'Kanit', sans-serif">
      <center><h1>Cart Item</h1></center>
      <v-divider></v-divider><br />

      <v-row>
        <v-col lg="6" sm="12" md="12">
          <v-card
            max-width="500"
            color="#686868"
            style="color: white;"
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
              <v-btn rounded color="#EFFFE3" large> WRITE REVIWE </v-btn>
            </center>
            <p></p>
          </v-card>
            <v-divider></v-divider><br/>

        </v-col>
        <v-col lg="6" sm="12" md="12">
          <v-card color="#686868" style="color: white; padding: 1rem">
            <center><h1>YOU MAY BE INTERESTED IN…</h1></center>

            <v-row>
              <v-col lg="6" sm="12" md="12">
                <v-card
                  class="mx-auto my-12 font"
                  style="position: relative"
                  height="auto"
                  width="250px"
                >
                  <div class="background-card"></div>
                  <center class="front pt-6">
                    <v-img
                      height="auto"
                      width="150"
                      src="https://cdn-local.mebmarket.com/meb/server1/193092/Thumbnail/book_detail_large.gif?2"
                    >
                    </v-img>
                  </center>
                  <div class="front">
                    <v-container fluid class="px-6 py-6">
                      <v-card></v-card>
                      <p class="type">cartoon</p>
                      <v-tooltip bottom color="#da9c9d">
                        <template v-slot:activator="{ on, attrs }">
                          <div v-bind="attrs" v-on="on" class="header">
                            beautiful
                          </div>
                        </template>
                        <span>beautiful</span>
                      </v-tooltip>
                      <div class="author">
                        <span style="text-decoration: underline"
                          >frame&nbsp;&nbsp;</span
                        >
                      </div>
                      <div class="price">100 ฿</div>
                    </v-container>
                    <v-container class="px-6 pb-6">
                      <span>
                        <v-row>
                          <v-spacer></v-spacer>
                          <v-icon large class="pr-3">mdi-cart-outline</v-icon>
                          <v-icon large>mdi-notebook-heart-outline</v-icon>
                        </v-row>
                      </span>
                    </v-container>
                  </div>
                </v-card>
              </v-col>
              <v-col lg="6" sm="12" md="12">
                <v-card
                  class="mx-auto my-12 font"
                  style="position: relative"
                  height="auto"
                  width="250px"
                >
                  <div class="background-card"></div>
                  <center class="front pt-6">
                    <v-img
                      height="auto"
                      width="150"
                      src="https://cdn-local.mebmarket.com/meb/server1/193092/Thumbnail/book_detail_large.gif?2"
                    >
                    </v-img>
                  </center>
                  <div class="front">
                    <v-container fluid class="px-6 py-6">
                      <v-card></v-card>
                      <p class="type">cartoon</p>
                      <v-tooltip bottom color="#da9c9d">
                        <template v-slot:activator="{ on, attrs }">
                          <div v-bind="attrs" v-on="on" class="header">
                            beautiful
                          </div>
                        </template>
                        <span>beautiful</span>
                      </v-tooltip>
                      <div class="author">
                        <span style="text-decoration: underline"
                          >frame&nbsp;&nbsp;</span
                        >
                      </div>
                      <div class="price">100 ฿</div>
                    </v-container>
                    <v-container class="px-6 pb-6">
                      <span>
                        <v-row>
                          <v-spacer></v-spacer>
                          <v-icon large class="pr-3">mdi-cart-outline</v-icon>
                          <v-icon large>mdi-notebook-heart-outline</v-icon>
                        </v-row>
                      </span>
                    </v-container>
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <h1>CART TOTALS</h1>
            <v-divider></v-divider><br/>
            <p>ราคาสินค้า 709.00 THB</p>
            <center>
              <v-btn
                title
                color="black"
                style="color: white"
                large
                width="250px"
              >
                ชำระเงิน
              </v-btn>
            </center>
          </v-card>
          <center>
            <v-btn title color="#D7ECFF" large> WRITE REVIWE </v-btn>
          </center>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import TypeBar from "../components/bar/Typebar.vue";
export default {
  name: "DetailPage",
  components: {
    TypeBar,
  },
  data: () => ({}),
};
</script>
<style scoped>
</style>
