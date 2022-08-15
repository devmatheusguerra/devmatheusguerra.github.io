<template>
  <div class="coffee">
    <div class="smoke"></div>
    <div class="cup">
      <div class="liquid">
        <span class="legend">
          <img class="logo" :src="this.logo" alt="JavaScript" />
          <br />
          {{ this.percentage.toFixed(1) }}%
        </span>
        <div class="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoffeeChart",
  components: {},
  props: ["percent", "logo", "color"],
  data() {
    return {
      percentage: 0,
      alreadyRun: false,
    };
  },
  methods: {
    incrementTimer() {
      this.percentage += 1;
      const percent = this.percent;

      const intervalo = setInterval(() => {
        if (this.percentage < percent) {
          this.percentage += 1;
        } else {
          clearInterval(intervalo);
        }
      }, (145 * 50) / percent);
    },

    wave(elem) {
      const liquid = elem.querySelector(".content");
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

    moveLiquid(percent = 0, elem) {
      const liquid = elem.querySelector(".content");
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
    if(this.color){
      this.$el.querySelector(".cup").style.border = "inset 10px " + this.color;
      this.$el.querySelector(".liquid").style.backgroundColor = this.color + "5F";
    }
    window.addEventListener("scroll", () => {
      if (this.isInViewport(this.$el) && !this.alreadyRun) {
        this.wave(this.$el);
        this.moveLiquid(this.percent, this.$el);
        this.incrementTimer();
        this.alreadyRun = true;
      }
    });
  },
};
</script>

<style scoped>
.coffee {
  min-width: 100px;
  width: 100px;
  aspect-ratio: 4/5;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.smoke {
  width: 100%;
  height: 100%;
  background-image: url(@/assets/smoke.gif);
  background-size: cover;
  background-repeat: no-repeat;
  top: 0;
  margin-bottom: 10px;
  filter: opacity(0.25);
}




.cup {
  position: relative;
  width: 75%;
  height: 60%;
  border: solid 10px #222;
  border-radius: 0px 0px 15% 15%;
}

.cup::after {
  content: "";
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: -55%;
  width: 28%;
  height: 60%;
  background-color: #000;
  border: inherit;
  border-radius: 0px 50px 50px 0px;
  background-color: transparent;
}

.liquid {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #b69175;
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
  font-family: "Quicksand";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 1);
  z-index: 99;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  width: 100%;
}

.logo {
  width: 50%;
  object-fit: contain;
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
