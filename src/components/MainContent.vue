<template>
  <main>
    <TopNavbar :lang="this.language"></TopNavbar>
    <TopBanner :lang="this.language"> </TopBanner>
    <GithubMetrics :lang="this.language"></GithubMetrics>
    <GithubLanguages :lang="this.language"></GithubLanguages>
    <CoffeeChart percent="50"></CoffeeChart>
  </main>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import TopBanner from "./TopBanner.vue";
import GithubMetrics from "./GithubMetrics.vue";
import GithubLanguages from "./GithubLanguages.vue";
import CoffeeChart from "./CoffeeChart.vue";
export default {
  name: "MainContent",
  components: { TopBanner, TopNavbar, GithubMetrics, GithubLanguages, CoffeeChart },
  data() {
    return {
      language: "",
    };
  },
  mounted() {
    if (typeof localStorage.getItem("language") == "undefined") {
      localStorage.setItem("language", "pt");
      this.language = "pt";
    } else {
      this.language = localStorage.getItem("language");
    }

    setInterval(() => {
      this.language = localStorage.getItem("language");
    }, 100);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  width: calc(100vw - 40px);
  height: 100vh;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>
