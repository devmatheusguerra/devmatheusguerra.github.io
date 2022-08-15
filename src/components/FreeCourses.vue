<template>
  <div class="courses-section">
    <h2 v-if="this.lang == 'pt'">Estudos</h2>
    <h2 v-else>Studies</h2>
    <div class="certificates">
      <AluraCertificate
        class="certificate"
        v-for="certificate in certificates"
        :front="certificate.front"
        :back="certificate.back"
        :url="certificate.url"
        v-bind:key="certificate.url"
      ></AluraCertificate>
    </div>
  </div>
</template>

<script>
import AluraCertificate from "./AluraCertificate.vue";

export default {
  name: "FreeCourses",
  components: { AluraCertificate },
  props: ["lang"],
  data() {
    return {
      certificates: [
        {
          url: "https://cursos.alura.com.br/certificate/bedb881b-ed67-4a3c-956a-b2e6881817e7",
          front: require("@/assets/alura/1-front.png"),
          back: require("@/assets/alura/1-back.png"),
        },
        {
          url: "https://cursos.alura.com.br/certificate/9475e0bd-9b47-4af8-8f38-8bd17434ca8c",
          front: require("@/assets/alura/2-front.png"),
          back: require("@/assets/alura/2-back.png"),
        },
        {
          url: "https://cursos.alura.com.br/certificate/03dcbd6c-5364-438f-bd79-7c3cb5a7149b",
          front: require("@/assets/alura/3-front.png"),
          back: require("@/assets/alura/3-back.png"),
        },
        {
          url: "https://cursos.alura.com.br/certificate/2c286252-3579-4d60-bf8f-a4d0b5e079a9",
          front: require("@/assets/alura/4-front.png"),
          back: require("@/assets/alura/4-back.png"),
        },
        {
          url: "https://cursos.alura.com.br/certificate/52352492-5b87-44d5-a615-ed368a838761",
          front: require("@/assets/alura/5-front.png"),
          back: require("@/assets/alura/5-back.png"),
        },
        {
          url: "https://cursos.alura.com.br/certificate/a6b30e74-2f7e-4380-8fbe-fe96002e6966",
          front: require("@/assets/alura/6-front.png"),
          back: require("@/assets/alura/6-back.png"),
        },

        {
          url: "https://cursos.alura.com.br/certificate/41d7da0f-a980-44a8-a0dd-aa47ddd4f5da",
          front: require("@/assets/alura/7-front.png"),
          back: require("@/assets/alura/7-back.png"),
        },

        {
          url: "https://cursos.alura.com.br/certificate/727a1eee-df51-4612-b3b9-817a2ca6d5b0",
          front: require("@/assets/alura/8-front.png"),
          back: require("@/assets/alura/8-back.png"),
        },

        {
          url: "https://cursos.alura.com.br/certificate/b6b60866-9144-4d50-960c-c9e3e053e128",
          front: require("@/assets/alura/9-front.png"),
          back: require("@/assets/alura/9-back.png"),
        },

        {
          url: "https://cursos.alura.com.br/certificate/afe0eac6-cbda-4ae6-b68f-2c4b8c8e062d",
          front: require("@/assets/alura/10-front.png"),
          back: require("@/assets/alura/10-back.png"),
        },

        {
          url: "https://cursos.alura.com.br/certificate/44e47af9-5cc6-4383-99a0-733826a7f294",
          front: require("@/assets/alura/11-front.png"),
          back: require("@/assets/alura/11-back.png"),
        },
        {
          url: "https://cursos.alura.com.br/certificate/2b9d5152-17d3-48a6-8178-afa0e438cebd",
          front: require("@/assets/alura/12-front.png"),
          back: require("@/assets/alura/12-back.png"),
        },
        {
          url: "https://cursos.alura.com.br/certificate/c6f5cca2-6b93-4c0d-9d40-057937d99d1c",
          front: require("@/assets/alura/13-front.png"),
          back: require("@/assets/alura/13-back.png"),
        },
        {
          url: "https://cursos.alura.com.br/certificate/d88f0b15-559f-415c-bb6c-5851b61905fd",
          front: require("@/assets/alura/14-front.png"),
          back: require("@/assets/alura/14-back.png"),
        },
        {
          url: "https://cursos.alura.com.br/certificate/1c0195d4-9edf-4df9-820c-1276eadae9e9",
          front: require("@/assets/alura/15-front.png"),
          back: require("@/assets/alura/15-back.png"),
        },
        {
          url: "https://cursos.alura.com.br/certificate/3881e3a1-a091-4ef1-8233-4245ad7d01d4",
          front: require("@/assets/alura/16-front.png"),
          back: require("@/assets/alura/16-back.png"),
        },
        {
          url: "https://cursos.alura.com.br/certificate/c630ce28-ebe9-47c2-90ed-3bdc9fa81256",
          front: require("@/assets/alura/17-front.png"),
          back: require("@/assets/alura/17-back.png"),
        },
        {
          url: "https://cursos.alura.com.br/certificate/4bf00e8c-e24c-4fb0-8bdd-7905f91609f6",
          front: require("@/assets/alura/18-front.png"),
          back: require("@/assets/alura/18-back.png"),
        },
        {
          url: "https://cursos.alura.com.br/certificate/c5d87f76-51d8-465b-8ef6-114c75c56bbf",
          front: require("@/assets/alura/19-front.png"),
          back: require("@/assets/alura/19-back.png"),
        },
        {
          url: "https://cursos.alura.com.br/certificate/cda0e407-e260-4a97-b20e-b10e2dfeea46",
          front: require("@/assets/alura/20-front.png"),
          back: require("@/assets/alura/20-back.png"),
        },
        {
          url: "https://cursos.alura.com.br/certificate/18546f21-c4a8-4f10-ad47-303f3b9f5305",
          front: require("@/assets/alura/21-front.png"),
          back: require("@/assets/alura/21-back.png"),
        },
        {
          url: "https://cursos.alura.com.br/certificate/e648dbb4-d33f-4028-9eac-8fcd768d7cab",
          front: require("@/assets/alura/22-front.png"),
          back: require("@/assets/alura/22-back.png"),
        },
        {
          url: "https://cursos.alura.com.br/certificate/e6852765-1339-4d16-ac5e-720a61f3c95d",
          front: require("@/assets/alura/23-front.png"),
          back: require("@/assets/alura/23-back.png"),
        },
        {
          url: "https://cursos.alura.com.br/certificate/e0be7c6b-6428-4f7e-8a07-bf40144b76da",
          front: require("@/assets/alura/24-front.png"),
          back: require("@/assets/alura/24-back.png"),
        },
      ],
    };
  },
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

.certificates {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
  flex-wrap: wrap;
  flex-flow: wrap;
}

.certificate {
  margin: 300px 10px;
  margin-top: 0;
}
</style>
