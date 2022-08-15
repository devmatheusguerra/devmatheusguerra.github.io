<template>
  <header>
    <VueWriter :lang="this.lang" v-if="this.lang == 'pt'"></VueWriter>
    <VueWriter :lang="this.lang" v-else></VueWriter>

    <div class="centered-banner">
      <div class="language" v-if="this.lang == 'pt'">
        <span class="selected" @click="changeLanguage('pt')">
          <img class="flag" src="@/assets/br.png" alt="" /> PT
        </span>
        |
        <span @click="changeLanguage('en')">
          <img class="flag" src="@/assets/us.png" alt="" />
          EN
        </span>
      </div>

      <div class="language" v-else>
        <span @click="changeLanguage('pt')">
          <img class="flag" src="@/assets/br.png" alt="" /> PT
        </span>
        |
        <span class="selected" @click="changeLanguage('en')">
          <img class="flag" src="@/assets/us.png" alt="" />
          EN
        </span>
      </div>
      <img src="@/assets/me.png" alt="" id="me" />
    </div>

    <div class="about">
      <div class="topic" v-if="this.lang == 'pt'">
        <h2>Sobre mim</h2>
        <p>
          Me chamo Matheus Magalhães Guerra Almeida, tenho 24 anos. Nasci em
          Fortaleza - CE, mas atualmente moro no interior do estado. Sou uma
          pessoa extrovertida e sociável. Adoro desafios e aprender coisas
          novas.
        </p>
      </div>

      <div class="topic" v-else>
        <h2>About me</h2>
        <p>
          I'm Matheus Magalhães Guerra Almeida, I'm 24 years old. I was born in
          Fortaleza - CE, but now I live in the interior of the state. I'm an
          extrovert and sociable person. I love challenges and learning new
          things.
        </p>
      </div>

      <div class="topic" v-if="this.lang == 'pt'">
        <h2>Áreas de atuação</h2>
        <ul>
          <li>Desenvolvimento com tecnologias front-end.</li>
          <li>Desenvolvimento com tecnologias back-end.</li>
          <li>Design de Aplicações web e móveis.</li>
          <li>Ensino de programação.</li>
        </ul>
      </div>

      <div class="topic" v-else>
        <h2>Expertise</h2>
        <ul>
          <li>Front-end development.</li>
          <li>Back-end development.</li>
          <li>Web and mobile application design.</li>
          <li>Programming education.</li>
        </ul>
      </div>

      <div class="topic" v-if="this.lang == 'pt'">
        <h2>Contatos</h2>
        <p>
          Para mais informações, entre em contato comigo pelo e-mail ou pelo
          telefone abaixo:
        </p>
        <span class="contact-links">
          <b>E-mail: </b>
          <a href="mailto:devmatheusguerra@gmail.com">
            devmatheusguerra@gmail.com
          </a>
        </span>
      </div>

      <div class="topic" v-else>
        <h2>Contacts</h2>
        <p>For more information, contact me by e-mail or phone below:</p>
        <span class="contact-links">
          <b>E-mail: </b>
          <a href="mailto:devmatheusguerra@gmail.com">
            devmatheusguerra@gmail.com
          </a>
        </span>
      </div>
    </div>
  </header>
</template>

<script>
import VueWriter from "./VueWriter.vue";
export default {
  name: "TopBanner",
  components: { VueWriter },
  props: ["lang"],
  methods: {
    changeLanguage(language) {
      // Clear all selected classes
      document.querySelectorAll(".language span").forEach((span) => {
        span.classList.remove("selected");
      });

      localStorage.setItem("language", language);
      if (language == "pt") {
        document
          .querySelectorAll(".language span")[0]
          .classList.add("selected");
      } else {
        document
          .querySelectorAll(".language span")[1]
          .classList.add("selected");
      }
    },
  },
};
</script>

<style scoped>
header {
  font-family: "Quicksand";
  width: calc(100% - 30px);
  height: 400px;
  padding: 0 15px;
  background-image: url(@/assets/banner.png);
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

#me {
  width: 300px;
}
.about {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 33%;
}

VueWriter {
  width: 33%;
}

.topic {
  color: #9a9a9a;
  width: 100%;
}

ul {
  list-style: square;
  padding: 0;
  margin: 0;
}

.topic a {
  color: #9a9a9a;
  text-decoration: dashed;
  cursor: pointer;
  font-weight: normal;
}

.topic h2 {
  font-size: 1.1rem;
}

.topic p,
.topic ul {
  font-size: 0.9rem;
  text-align: justify;
}

.language {
  width: 100%;
  text-align: center;
  padding: 10px 0;
  margin-top: 10px;
}

.language > span {
  cursor: pointer;
}
.language > span.selected {
  font-weight: bolder;
}

.contact-links {
  font-size: 0.8rem;
  font-weight: normal;
}

.contact-links b {
  font-weight: bolder;
}

.flag {
  width: 13px;
  height: 13px;
}
</style>
