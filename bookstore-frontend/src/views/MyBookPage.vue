<template>
    <div>
        <h1>My book</h1>
        <div v-if="book != ''">
            <p>{{book.name}}</p>
            <p>{{book.author}}</p>
        </div>
        <v-btn @click="getBook()">Get Book</v-btn>
    </div>
</template>
<script>import axios from "axios"

export default {
    data: () => ({
        book: ''
    }),
    methods: {
        getBook(){
            axios.get("http://localhost:3000/getbook").then((res) => {
                this.book = res.data
            })
        }
    }
}
</script>
<style scoped>

</style>