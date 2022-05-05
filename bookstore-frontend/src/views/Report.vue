<template>
  <v-data-table
    :headers="headers"
    :items="report"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
import axios from "@/plugins/axios";
export default {
  name: "ReportPage",
  data: () => ({
    report: [],
    headers: [
      {
        text: "วันที่จัดการ",
        align: "start",
        sortable: false,
        value: "modify_date",
      },
      { text: "ชื่อหนังสือ", value: "title" },
      { text: "ประเภทที่จัดการ", value: "modify_type" },
      { text: "ชื่อของผู้จัดการ", value: "name" },
      { text: "ตำแหน่ง", value: "position" },
      { text: "สถานะ", value: "resigned.data" },
    ],
  }),
  created() {
    this.getReport();
  },
  methods: {
    async getReport() {
      try {
        const result = await axios.get("http://localhost:3000/report");
        this.report = result.data;
        console.log(this.report);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped>
</style>