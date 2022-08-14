<template>
  <div class="metrics-github">
    <div class="indicator" v-if="this.lang == 'pt'">
      <b>{{ repositories }}</b>
      <span> Repositórios Públicos </span>
    </div>

    <div class="indicator" v-else>
      <b>{{ repositories }}</b>
      <span> Public Repositories </span>
    </div>

    <div class="indicator" v-if="this.lang == 'pt'">
      <b>{{ gists }}</b>
      <span> Gists Públicos </span>
    </div>

    <div class="indicator" v-else>
      <b>{{ gists }}</b>
      <span> Public Gists </span>
    </div>

    <div class="indicator" v-if="this.lang == 'pt'">
      <b>{{ followers }}</b>
      <span> Seguidores Github </span>
    </div>

    <div class="indicator" v-else>
      <b>{{ followers }}</b>
      <span> Github Followers </span>
    </div>

    <div class="indicator" v-if="this.lang == 'pt'">
      <b>{{ following }}</b>
      <span> Seguindo Github </span>
    </div>

    <div class="indicator" v-else>
      <b>{{ following }}</b>
      <span> Github Following </span>
    </div>
  </div>
</template>

<script>
import { getUser } from '@/functions/githubConsumer';
export default {
  name: "GithubMetrics",
  components: {},
  props: ["lang"],
  data() {
    return {
      gists: "-",
      followers: "-",
      following: "-",
      repositories: "-",
    };
  },
  mounted() {
    getUser().then((data) => {
      this.gists = data.public_gists;
      this.followers = data.followers;
      this.following = data.following;
      this.repositories = data.public_repos;
    });
    
  },
};
</script>

<style scoped>
.metrics-github {
  margin-top: 100px;
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "Quicksand";
}

.indicator {
  max-width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  text-align: center;
}

.indicator b {
  font-size: 1.5rem;
  font-weight: bold;
}

.indicator span {
  font-size: 0.9rem;
  font-weight: lighter;
}
</style>
