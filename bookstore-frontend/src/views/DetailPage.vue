<template>
  <div>
    <v-container style="font-family: 'Kanit', sans-serif">
      <v-row>
        <v-col lg="6" sm="12" md="12" align="right">
          <v-img
            v-if="book.image_cover == null"
            align="center"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
          <v-img
            v-else

            align="center"
            :src="'http://localhost:3000/' + book.image_cover"
          ></v-img>
        </v-col>
        <v-col lg="6" sm="12" md="12">
          <h1>{{ book.title }}</h1>
          <!-- <v-rating
            v-model="rating"
            background-color="black"
            color="black"
          ></v-rating> -->
          <p>
            <b>โดย</b>
            <span v-for="aut in book.author" :key="aut.author_id"
              ><span style="text-decoration: underline">
                {{ aut.author_name }}</span
              >/
            </span>
          </p>
          <p><b>สำนักพิมพ์</b> {{ book.publisher_name }}</p>
          <p><b>หมวดหมู่</b> {{ book.type_name }}</p>

          <v-btn
            rounded
            color="#EFFFE3"
            large
            v-if="$store.state.user!=null && (isOwner || $store.state.user.role != 'customer')"
            @click="openNewTab(book)"
          >
            เปิดอ่าน
          </v-btn>
          <v-btn
            @click="addToCart($route.params.bookId)"
            rounded
            color="#EDC4D6"
            large
            v-else
            >ซื้อ {{ book.price }} บาท</v-btn
          >
          <v-icon v-if="isInterest && !isOwner" color="pink" large
            >mdi-notebook-heart</v-icon
          >
          <v-icon
            v-else-if="
              $store.state.user ==null ||( !isInterest && !isOwner &&  $store.state.user.role == 'customer' )
            "
            color="black"
            large
            >mdi-notebook-heart-outline</v-icon
          >

          <v-icon v-if="!isFavorite && isOwner" color="black" large
            >mdi-cards-heart-outline</v-icon
          >
          <v-icon v-else-if="isFavorite && isOwner" color="pink" large
            >mdi-cards-heart</v-icon
          >
          <span
            class="ml-3"
            v-if="
              $store.state.user != null && $store.state.user.role != 'customer'
            "
          >
            <v-icon large @click="editbook()" class="pr-3"
              >mdi-pencil-outline</v-icon
            >
            <v-icon large class="pr-3" @click="deletebook()"
              >mdi-trash-can-outline</v-icon
            >
          </span>

          <p></p>
          <v-card
            max-width="400"
            color="#686868"
            style="color: white; padding: 1rem"
          >
            <p style="font-size: 15px">
              {{ book.abstract }}
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="font-family: 'Kanit', sans-serif">
      <v-row>
        <v-col lg="6" sm="12" md="12" align="left" height="300px">
          <p>READER REVIWES</p>
          <div
            style="
              display: flex;
              justify-content: flex-start;
              align-items: center;
            "
          >
            <v-rating
              :value="5"
              background-color="purple lighten-3"
              size="18"
              readonly
            ></v-rating>
            <v-progress-linear value="10" buffer-value="45"></v-progress-linear>
          </div>

          <div
            style="
              display: flex;
              justify-content: flex-start;
              align-items: center;
            "
          >
            <v-rating
              :value="4"
              background-color="purple lighten-3"
              size="18"
              readonly
            ></v-rating>
            <v-progress-linear value="10" buffer-value="45"></v-progress-linear>
          </div>
          <div
            style="
              display: flex;
              justify-content: flex-start;
              align-items: center;
            "
          >
            <v-rating
              :value="3"
              background-color="purple lighten-3"
              size="18"
              readonly
            ></v-rating>
            <v-progress-linear value="10" buffer-value="45"></v-progress-linear>
          </div>
          <div
            style="
              display: flex;
              justify-content: flex-start;
              align-items: center;
            "
          >
            <v-rating
              :value="2"
              background-color="purple lighten-3"
              size="18"
              readonly
            ></v-rating>
            <v-progress-linear value="10" buffer-value="45"></v-progress-linear>
          </div>
          <div
            style="
              display: flex;
              justify-content: flex-start;
              align-items: center;
            "
          >
            <v-rating
              :value="1"
              background-color="purple lighten-3"
              size="18"
              readonly
            ></v-rating>
            <v-progress-linear value="10" buffer-value="45"></v-progress-linear>
          </div>
        </v-col>
        <v-col lg="6" sm="12" md="12">
          <v-card
            max-width="500"
            color="#686868"
            style="color: white; padding: 1rem"
          >
            <center>
              <h1>{{ book.average_rating }}</h1>
              <v-rating
                v-model="rating"
                background-color="purple lighten-3"
                color="purple lighten-3"
                large
                readonly
              ></v-rating>
              <p>Average from {{ allComment.length }} Reviews</p>
              <v-btn
                v-if="isOwner && !isComment"
                rounded
                color="#EFFFE3"
                large
                @click="isShow = true"
              >
                WRITE REVIWE
              </v-btn>
            </center>
            <p></p>
            WRITE REVIWE
          </v-card>
        </v-col>
        <v-col lg="12" sm="12" md="12">
          <v-card
            color="white"
            style="color: white; padding: 1rem"
            v-if="isShow"
          >
            <v-rating
              background-color="purple lighten-3"
              color="purple lighten-3"
              large
              v-model="ratingCustomer"
            ></v-rating>
            <p>Average from 4 Reviews</p>
            <v-textarea
              filled
              name="input-7-4"
              label="แสดงความคิดเห็น"
              v-model="commentCustomer"
            ></v-textarea>
            <p></p>
            <v-btn rounded color="#EFFFE3" large @click="saveComment">
              SAVE
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="font-family: 'Kanit', sans-serif">
      <v-row>
        <v-col lg="12" sm="12" md="12" height="300px" mx-auto>
          <v-card
            v-for="(comment, index) in allComment"
            :key="comment.comment_id"
            class="pa-md-4 mx-lg-auto"
            color="#FFFEEB"
            style="color: black; padding: 1rem"
          >
            <v-card-title>
              <v-row>
                <v-col>
                  <v-avatar size="56" v-if ="comment.image_path == null">
                    <img
                      alt="user"
                      src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                    />
                  </v-avatar>
                  <v-avatar size="56" v-else>
                    <img
                      alt="user"
                      :src="'http://localhost:3000'+comment.image_path"
                    />
                  </v-avatar>
                </v-col>
                <v-col>
                  <v-row>
                    <p class="ml-3">{{ comment.username }}</p>
                  </v-row>

                  <v-row>
                    <v-rating
                      v-show="!isShowedit"
                      :value="comment.rate"
                      background-color="purple lighten-3"
                      size="18"
                      readonly
                    ></v-rating>
                    <p v-show="!isShowedit">
                      {{
                        new Date(comment.comment_date).toString().substr(0, 24)
                      }}
                    </p>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text>
              <!-- <v-textarea
                name="input-7-1"
                filled
                label="Label"
                auto-grow
                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              ></v-textarea> -->
              <p v-show="!isShowedit">{{ comment.comment }}</p>
              <v-card
                color="white"
                style="color: white; padding: 1rem"
                v-if="isShowedit"
              >
                <v-rating
                  background-color="purple lighten-3"
                  color="purple lighten-3"
                  large
                  v-model="ratingEditCustomer"
                ></v-rating>
                <p>Average from 4 Reviews</p>
                <v-textarea
                  filled
                  name="input-7-4"
                  label="แสดงความคิดเห็น"
                  v-model="commentEditCustomer"
                ></v-textarea>
                <p></p>
                <v-btn
                  rounded
                  color="#EFFFE3"
                  large
                  @click="editComment(comment)"
                >
                  SAVE EDIT
                </v-btn>
                <v-btn
                  rounded
                  color="#EFFFE3"
                  large
                  @click="isShowedit = false"
                >
                  CANCEL
                </v-btn>
              </v-card>
            </v-card-text>
            <v-card-actions>
              <v-btn
                v-if="
                  $store.state.user != null &&
                  $store.state.user.role == 'customer' &&
                  $store.state.user.customer_id == comment.customer_id &&
                  !isShowedit
                "
                color="orange"
                text
                @click="editCommentBtn(comment)"
              >
                Edit</v-btn
              >
              <v-btn
                v-if="
                  $store.state.user != null &&
                  $store.state.user.role == 'customer' &&
                  $store.state.user.customer_id == comment.customer_id &&
                  !isShowedit
                "
                @click="deleteComment(index)"
                color="orange"
                text
                >delete</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import axios from "@/plugins/axios";
// import TypeBar from "../components/bar/Typebar.vue";
export default {
  name: "DetailPage",
  components: {
    // TypeBar,
  },
  data: () => ({
    book: "",
    rating: 0,
    allComment: [],
    isShow: false,
    isShowedit: false,
    isOwner: false,
    isFavorite: false,
    isInterest: false,
    commentCustomer: "",
    ratingCustomer: 0,
    ratingEditCustomer: 0,
    commentEditCustomer: 0,
    isComment: false,
  }),
  validations: {
    commentCustomer: { required },
  },
  created() {
    this.getBook();
    this.getComment();
    if (
      this.$store.state.user != null &&
      this.$store.state.user.role == "customer"
    ) {
      this.checkBookAboutCustomer();
    }
  },

  methods: {
    async addToCart(ebookId) {

      
      if (this.$store.state.user == null) {
        this.$store.dispatch("modalLoginAction");
      } else {
        if (confirm("Want to add to cart?")) {
          try {
            const result = await axios.post(
              `/addItem/${this.$store.state.user.cart.cart_id}/${ebookId}/${this.$store.state.user.customer_id}`
            );
            console.log(result.data);
          } catch (err) {
            console.log(err);
          }
        }

      }
    },
    async getBook() {
      const result = await axios.get(
        "http://localhost:3000/getDetailBook/" + this.$route.params.bookId
      );
      this.book = result.data;
      this.rating = this.book.average_rating;
      // console.log(this.$route.params.bookId)
    },
    openNewTab(book) {
      window.open("http://localhost:3000/" + book.book_path);
    },
    async checkBookAboutCustomer() {
      try {
        const result = await axios.get(
          `http://localhost:3000/isOwnerBook/${this.$route.params.bookId}/${this.$store.state.user.customer_id}`
        );
        if (result.data != "") {
          if (result.data.bought.data[0]) {
            this.isOwner = true;
          }
          if (result.data.favorite.data[0]) {
            this.isFavorite = true;
          }
          if (result.data.interest.data[0]) {
            this.isInterest = true;
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
    async getComment() {
      try {
        const result = await axios.get(
          `http://localhost:3000/getComments/${this.$route.params.bookId}`
        );
        this.allComment = result.data;
        if (this.$store.state.user != null) {
          this.isComment = !!this.allComment.find((comment) => {
            return comment.customer_id == this.$store.state.user.customer_id;
          });
        }
        console.log(this.isComment);
      } catch (err) {
        console.log(err);
      }
    },
    async saveComment() {
      try {
        const result = await axios.post(
          `http://localhost:3000/comments/${this.$route.params.bookId}/${this.$store.state.user.customer_id}`,
          {
            comment: this.commentCustomer,
            rate: this.ratingCustomer,
          }
        );
        console.log(result.data);
        this.allComment.push({
          comment: this.commentCustomer,
          comment_date: new Date(),
          customer_id: this.$store.state.user.customer_id,
          image_path: this.$store.state.user.image_path,
          rate: this.ratingCustomer,
          username: this.$store.state.user.username,
        });
        this.isComment = true;
        this.isShow = false;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteComment(index) {
      try {
        const result = await axios.delete(
          `http://localhost:3000/deleteComment/${this.$route.params.bookId}/${this.$store.state.user.customer_id}`
        );
        console.log(result.data);
        this.allComment.splice(index, 1);
        this.isComment = false;
      } catch (err) {
        console.log(err);
      }
    },
    editbook() {
      this.$router.push("/editbook/" + this.$route.params.bookId);
    },
    async deletebook() {
      try {
        const result = await axios.put(
          `http://localhost:3000/deleteBook/${this.book.ebook_id}/${this.$store.state.user.admin_id}`
        );
        console.log(result.data);
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    async editComment(comment) {
      try {
        const result = await axios.put(
          `http://localhost:3000/editComments/${this.$route.params.bookId}/${this.$store.state.user.customer_id}`,
          {
            comment: this.commentEditCustomer,
            rate: this.ratingEditCustomer,
          }
        );
        comment.comment = this.commentEditCustomer;
        comment.rate = this.ratingEditCustomer;
        this.isShowedit = false;
        console.log(result.data);
      } catch (err) {
        console.log(err);
      }
    },
    editCommentBtn(comment) {
      this.isShowedit = true;
      this.ratingEditCustomer = comment.rate;
      this.commentEditCustomer = comment.comment;
    },
  },
};
</script>
<style scoped></style>
