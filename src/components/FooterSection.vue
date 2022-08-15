<template>
  <footer>
    <div class="col prop">Matheus Guerra | 2022</div>
    <div class="col logo">
        <img src="@/assets/logo-noname.png" alt="Logo">
    </div>
    <div class="col social-links">
      <a
        href="https://medium.com/@devmatheusguerra"
        target="__socialmedia__"
        class="social-icon"
        ><i class="social bx bxl-medium"></i
      ></a>
      <a
        href="https://github.com/devmatheusguerra/"
        target="__socialmedia__"
        class="social-icon"
        ><i class="social bx bxl-github"></i
      ></a>
      <a
        href="https://codepen.io/matheusmagalhaes/"
        target="__socialmedia__"
        class="social-icon"
        ><i class="social bx bxl-codepen"></i
      ></a>
      <a
        href="https://www.linkedin.com/in/matheus-magalhães-991b0b124/"
        target="__socialmedia__"
        class="social-icon"
        ><i class="social bx bxl-linkedin"></i
      ></a>
      <a
        href="https://www.instagram.com/dev.matheusguerra/"
        target="__socialmedia__"
        class="social-icon"
        ><i class="social bx bxl-instagram"></i
      ></a>
      <a
        href="https://www.tiktok.com/@dev.matheusguerra"
        target="__socialmedia__"
        class="social-icon"
        ><i class="social bx bxl-tiktok"></i
      ></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
  components: {},
  props: [],
};
</script>

<style scoped>
footer {
  width: 95%;
  height: auto;
  color: #9a9a9a;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  font-family: "Quicksand";
  margin-top: 100px;
  border-top: 2px solid #eee;
}

.col {
  width: calc(100% / 3);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 1rem;
  padding-top: 30px;
}

.prop {
  font-weight: 600;
}

.social-links {
  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: flex-end;
  width: 40%;
}

.social-links > a {
  overflow: visible;
  position: relative;
}

.social-links i {
  padding: 0 10px;
}

.social-icon {
  color: #000;
  text-decoration: none;
  font-size: 1rem;
}

.col.logo{
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
}

img{
    width: 20px;
}
</style>
