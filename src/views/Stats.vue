<template>
  <div class="overall-statistics">
    <div class="main">
      <OverallStatistics :book-info="books" />
    </div>
  </div>
</template>

<script>
import { bookData } from "@/data/books";
import OverallStatistics from "@/components/OverallStatistics.vue";

export default {
  name: "Stats",
  components: {
    OverallStatistics
  },
  data() {
    return {
      books: bookData
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/varibles.scss";
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
</style>
