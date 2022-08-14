<template>
  <div class="coffee">
    <div class="smoke"></div>
    <div class="cup">
      <div class="liquid">
        <span class="legend">{{ (percent / 20).toFixed(1) }}/5</span>
        <div class="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoffeeChart",
  components: {},
  props: ["percent"],
  data() {},
  methods: {
    wave() {
      const liquid = document.querySelector(".content");
      const time = 1500;

      liquid.style.borderRadius = "0% 0% 50% 0%";
      setTimeout(() => {
        liquid.style.borderRadius = "0% 0% 20% 20%";
      }, time);
      setTimeout(() => {
        liquid.style.borderRadius = "0% 0% 0% 50%";
      }, time * 2);
      setTimeout(() => {
        liquid.style.borderRadius = "0% 0% 20% 20%";
      }, time * 3);
      setTimeout(() => {
        liquid.style.borderRadius = "0% 0% 0% 0%";
      }, time * 4);
    },

    moveLiquid(percent = 0) {
      const liquid = document.querySelector(".content");
      const time = 1800;
      const step = parseInt(percent / 3);
      setTimeout(() => {
        liquid.style.bottom = `${step}%`;
      }, time);
      setTimeout(() => {
        liquid.style.bottom = `${step * 2}%`;
      }, time * 2);
      setTimeout(() => {
        liquid.style.bottom = `${step * 3}%`;
      }, time * 3);
      setTimeout(() => {
        liquid.style.bottom = `${percent}%`;
      }, time * 4);
    },

    isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (this.isInViewport(this.$el)) {
        this.wave();
        this.moveLiquid(this.percent);
      }
    });
  },
};
</script>

<style scoped>
.coffee {
  min-width: 200px;
  width: 220px;
  aspect-ratio: 4/5;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.smoke {
  width: 15%;
  height: 15%;
  background-color: #000;
  top: 0;
  margin-bottom: 10px;
}

.smoke::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background-color: inherit;
  filter: inherit;
  top: 0;
  margin-bottom: 10px;
  left: -253.8%;
  position: absolute;
  animation: inherit;
}

.smoke {
  position: relative;
  width: 5%;
  height: 15%;
  background-color: rgb(200, 200, 200);
  filter: blur(6px);
  top: 0;
  margin-bottom: 10px;
  overflow: visible;
  animation: smoke 3s ease-in-out infinite alternate;
}

.smoke::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background-color: inherit;
  filter: inherit;
  top: 0;
  margin-bottom: 10px;
  left: 253.8%;
  position: absolute;
  animation: inherit;
}

.cup {
  position: relative;
  width: 75%;
  height: 60%;
  border: solid 30px #000;
  border-radius: 0px 0px 50px 50px;
}

.cup::after {
  content: "";
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: -65%;
  width: 28%;
  height: 60%;
  background-color: #000;
  border: solid 27px #000;
  border-radius: 0px 50px 50px 0px;
  background-color: transparent;
}

.liquid {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #6a4f3a;
  overflow: hidden;
}

.content {
  background-color: #fff;
  width: 150%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: -25%;
  border-radius: 0 0 0% 0%;
  transition: bottom 1.8s linear, border-radius 1.5s ease-in-out;
}

.legend {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  width: 100%;
  text-shadow: 0 0 10px #fff;
}

@keyframes smoke {
  0% {
    transform: translateY(0), rotate(0deg), skewY(0deg), skewX(0deg),
      translateX(0);
    border-radius: 100% 0 100% 0;
  }
  50% {
    transform: translateY(10px), rotate(20deg), skewY(45deg), skewX(45deg),
      translateX(300%);
    border-radius: 0 100% 0 100%;
  }
  100% {
    transform: translateY(0), rotate(0deg), skewY(0deg), skewX(0deg),
      translateX(0);
    border-radius: 0% 0 0% 0;
  }
}
</style>
