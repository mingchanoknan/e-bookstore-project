<template>
    <div class="bar-container">
        <span @click="changeTypeSelect(1)" class="bar-item" :class="$store.state.select == 1 ? 'color-change' : ''">ยอดนิยม</span>
        <span @click="changeTypeSelect(2)" class="bar-item" :class="$store.state.select == 2 ? 'color-change' : ''">มาใหม่</span>
        <span @click="changeTypeSelect(3)" class="bar-item" :class="$store.state.select == 3 ? 'color-change' : ''">ทั้งหมด</span>
        <span @click="changeTypeSelect(4)" class="bar-item" :class="$store.state.select == 4 ? 'color-change' : ''">นิยาย</span>
        <span @click="changeTypeSelect(5)" class="bar-item" :class="$store.state.select == 5 ? 'color-change' : ''">การ์ตูน</span>
        <span @click="changeTypeSelect(6)" class="bar-item" :class="$store.state.select == 6 ? 'color-change' : ''">ท่องเที่ยว</span>
        <span @click="changeTypeSelect(7)" class="bar-item" :class="$store.state.select == 7 ? 'color-change' : ''">การศึกษา</span>
        <span @click="changeTypeSelect(8)" class="bar-item" :class="$store.state.select == 8 ? 'color-change' : ''">เทคโนโลยี</span>
        <span @click="changeTypeSelect(9)" class="bar-item" :class="$store.state.select == 9 ? 'color-change' : ''">หนังสือชุด</span>
    </div>
</template>
<script>
export default {
    name: "TypeBar",
    data: () => ({
        
    }),
    methods: {
        changeTypeSelect(value){
            this.$store.dispatch("changeTypeSelectAction", value)
        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
    .bar-container {
        display: flex;
        justify-content: flex-start;
        margin-top: 3em;
        margin-left: 1em;
        margin-right: 1em;
        border-bottom: #D8B6AD 5px solid;
        padding-left: 1em;
    }
    .bar-item {
        text-align: center;
        border-top-left-radius: 40%;
        border-top-right-radius: 40%;
        padding: 0.6em;
        width: 6em;
        cursor: pointer;
        font-family: 'Kanit', sans-serif;
    }
    .color-change {
        background-color: #D8B6AD;
    }
</style>