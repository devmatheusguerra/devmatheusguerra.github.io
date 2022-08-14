<template>
  <div class="topo">
    <nav>
      <a href="#" v-if="this.lang == 'pt'">
        <i class="bx bx-briefcase"></i>
        Experiências
      </a>

      <a href="#" v-else>
        <i class="bx bx-briefcase"></i>
        Experiences
      </a>

      <a href="#" v-if="this.lang == 'pt'">
        <i class="bx bx-code"></i>
        Habilidades
      </a>

      <a href="#" v-else>
        <i class="bx bx-code"></i>
        Skills
      </a>

      <a href="#" v-if="this.lang == 'pt'">
        <i class="bx bx-message-detail"></i>
        Contatos
      </a>

      <a href="#" v-else>
        <i class="bx bx-message-detail"></i>
        Contacts
      </a>
    </nav>

    <img src="@/assets/logo.png" alt="Logo de Matheus Guerra" id="logo" />

    <div class="social-links">
      <a href="https://medium.com/@devmatheusguerra" target="__socialmedia__" class="social-icon"><i class="social bx bxl-medium"></i></a>
      <a href="https://github.com/devmatheusguerra/" target="__socialmedia__" class="social-icon"><i class="social bx bxl-github"></i></a>
      <a href="https://www.linkedin.com/in/matheus-magalhães-991b0b124/" target="__socialmedia__" class="social-icon"><i class="social bx bxl-linkedin"></i></a>
      <a href="https://www.instagram.com/dev.matheusguerra/" target="__socialmedia__" class="social-icon"><i class="social bx bxl-instagram"></i></a>
      <a href="https://www.tiktok.com/@dev.matheusguerra" target="__socialmedia__" class="social-icon"><i class="social bx bxl-tiktok"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNavbar",
  components: {},
  props: ["lang"],
};
</script>

<style scoped>
.topo {
  width: calc(100% - 30px);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 40%;
}

nav > a {
  position: relative;
  color: #000;
  text-decoration: none;
  font-size: 1rem;
  font-family: "Quicksand";
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .3s ease-in-out;
}

nav > a:hover{
  transform: scale(1.05);
}

nav > a::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left:35px;
  display: block;
  width: 0;
  height: 2px;
  border-radius: 10px;
  background-color: #000;
  transition: all .3s ease-in-out;
}

nav > a:hover::after {
  width: calc(100% - 40px);
}

nav > a > i {
    margin-right: 8px;
}

img#logo {
  width: 100px;
}

.social-links {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 40%;
}

.social-links > a
{
  overflow: visible;
  position: relative;
}

.social-links i {
  padding: 0 10px;
}

.social-icon{
    color: #000;
    text-decoration: none;
    font-size: 1rem;
}

</style>
