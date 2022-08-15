<template>
  <div class="card">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img :src="this.front" alt="Certificado" />
        </div>
        <div class="flip-card-back">
          <img :src="this.back" alt="Certificado" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AluraCertificate",
  components: {},
  props: ["front", "back", "url"],
  mounted() {
    this.$el.addEventListener("mouseenter", () => {
      this.$el.querySelector(".flip-card-inner").classList.add("flipped");
    });

     this.$el.addEventListener("mouseout", () => {
        setTimeout(() => {
            this.$el.querySelector(".flip-card-inner").classList.remove("flipped");
        }, 3000);
      
    });

    this.$el.addEventListener("click", () => {
        window.open(this.url, "_blank");
        });
  },
};
</script>

<style scoped>
.card {
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  font-family: "Quicksand";
}
.flip-card {
  background-color: transparent;
  width: 400px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
  cursor: pointer;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}

img {
  width: 100%;
}


</style>
