<template>
  <div class="courses-section">
    <h2 v-if="this.lang == 'pt'">Estudos</h2>
    <h2 v-else>Studies</h2>
    <iframe src="https://cursos.alura.com.br/certificate/bedb881b-ed67-4a3c-956a-b2e6881817e7" frameborder="0" width="500" height="300"></iframe>
  </div>
</template>

<script>
export default {
  name: "FreeCourses",
  components: {},
  props: ["lang"],
};
</script>

<style scoped>
.courses-section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #9a9a9a;
  font-family: "Quicksand";
  margin-top: 80px;
}

</style>
