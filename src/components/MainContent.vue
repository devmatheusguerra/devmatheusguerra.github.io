<template>
  <main>
    <TopNavbar :lang="this.language"></TopNavbar>
    <TopBanner :lang="this.language"> </TopBanner>
    <GithubMetrics :lang="this.language"></GithubMetrics>
    <DividerSection />
    <GithubLanguages :lang="this.language"></GithubLanguages>
    <DividerSection id="skills" />
    <SkillLanguages :lang="this.language"></SkillLanguages>
    <DividerSection id="experiences" />
    <EducationJobs :lang="this.language"></EducationJobs>
    <DividerSection id="studies" />
    <FreeCourses :lang="this.language"></FreeCourses>
    <DividerSection id="contact" />
    <ContactSecion :lang="this.language"></ContactSecion>
    <FooterSection></FooterSection>
  </main>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import TopBanner from "./TopBanner.vue";
import GithubMetrics from "./GithubMetrics.vue";
import GithubLanguages from "./GithubLanguages.vue";
import SkillLanguages from "./SkillLanguages.vue";
import EducationJobs from "./EducationJobs.vue";
import FreeCourses from "./FreeCourses.vue";
import DividerSection from "./DividerSection.vue";
import ContactSecion from "./ContactSecion.vue";
import FooterSection from "./FooterSection.vue";

export default {
  name: "MainContent",
  components: {
    TopBanner,
    TopNavbar,
    GithubMetrics,
    GithubLanguages,
    SkillLanguages,
    EducationJobs,
    FreeCourses,
    DividerSection,
    ContactSecion,
    FooterSection,
  },
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
<style>
document,
html,
body {
  scroll-behavior: smooth !important;
  user-select: none;
}
main {
  width: calc(100vw - 40px);
  height: 100vh;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

img {
  -webkit-user-drag: none;
  -moz-user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

}
</style>
