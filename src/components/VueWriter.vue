<template>
  <div id="welcome-msg">
    <p id="welcome-p">
      <b id="bold-welcome"></b>
    </p>
  </div>
</template>

<script>
export default {
  name: "VueWriter",
  components: {},
  props: ["lang"],
  methods: {
    clearHTML(){
      document.querySelector("#welcome-p").innerHTML = "<b id='bold-welcome'></b>";
    },
    writePT(){
      setTimeout(() => {
          const msg = "Olá!";
          const bold = document.querySelector("#bold-welcome");
          let position = 0;
          const intervalo1 = setInterval(() => {
            bold.innerHTML += msg[position];
            position++;
            if (position === msg.length) {
              bold.style.display = "block";
              clearInterval(intervalo1);
            }
          }, 100);

          // Segunda frase
          setTimeout(() => {
            const msg2 = "Bem-vindo ao meu perfil.";
            const p = document.querySelector("#welcome-p");
            let position2 = 0;
            const intervalo2 = setInterval(() => {
              p.innerHTML += msg2[position2];
              position2++;
              if (position2 === msg2.length) {
                clearInterval(intervalo2);
              }
            }, 100);
          }, msg.length * 100);
        }, 1000);
    },

    writeEN(){
              setTimeout(() => {
          const msg = "Hey there!";
          const bold = document.querySelector("#bold-welcome");
          let position = 0;
          const intervalo1 = setInterval(() => {
            bold.innerHTML += msg[position];
            position++;
            if (position === msg.length) {
              bold.style.display = "block";
              clearInterval(intervalo1);
            }
          }, 100);

          // Segunda frase
          setTimeout(() => {
            const msg2 = "Welcome to my profile.";
            const p = document.querySelector("#welcome-p");
            let position2 = 0;
            const intervalo2 = setInterval(() => {
              p.innerHTML += msg2[position2];
              position2++;
              if (position2 === msg2.length) {
                clearInterval(intervalo2);
              }
            }, 100);
          }, msg.length * 100);
        }, 1000);
    }
  },
  mounted() {
    if (this.lang === "pt") {
      this.clearHTML();
      this.writePT();
    } else {
      this.clearHTML();
      this.writeEN();
    }

  },
};
</script>

<style scoped>
#welcome-msg {
  font-size: 4.3rem;
  width: 33%;
}

b {
  font-size: 4rem;
}
p::after {
  content: "|";
  animation: fade 0.8s ease-in-out infinite;
}

@keyframes fade {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
