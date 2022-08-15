<template>
  <div>
    <div class="contact-section" v-if="this.lang == 'pt'">
      <div class="feedback-message"></div>
      <div class="col form">
        <h2>Fale comigo</h2>
        <p>
          Você pode entrar em contato comigo através do formulário de contato.
        </p>
        <form>
          <div class="form-group">
            <label for="name">Nome</label>
            <input
              autocomplete="off"
              type="text"
              class="form-control"
              id="name"
              v-model="this.name"
              @focus="this.active(this, 'name')"
              @blur="this.deactive(this, 'name')"
            />
          </div>
          <div class="form-group">
            <label for="email">E-mail</label>
            <input
              autocomplete="off"
              type="email"
              class="form-control"
              id="email"
              v-model="this.email"
              @focus="this.active(this, 'email')"
              @blur="this.deactive(this, 'email')"
            />
          </div>
          <div class="form-group">
            <label for="message">Mensagem</label>
            <textarea
              autocomplete="off"
              class="form-control"
              id="message"
              rows="3"
              v-model="this.message"
              @focus="this.active(this, 'message')"
              @blur="this.deactive(this, 'message')"
            ></textarea>
          </div>
          <button
            @click="this.sendMessage()"
            type="button"
            class="btn btn-primary"
          >
            <i class="bx bx-mail-send"></i> Enviar
          </button>
        </form>
      </div>
      <div class="col">
        <img class="image" src="@/assets/contact-form.png" alt="" />
      </div>

      <div class="feedback-message">Mensagem enviada com sucesso!</div>
    </div>

    <div class="contact-section" v-else>
      <div class="feedback-message">Mensagem enviada com sucesso!</div>
      <div class="col form">
        <h2>Talk to me</h2>
        <p>You can contact me through the contact form.</p>
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <!-- Save the value from input below in data -->
            <input
              autocomplete="off"
              type="text"
              class="form-control"
              id="name"
              v-model="this.name"
              @focus="this.active(this, 'name')"
              @blur="this.deactive(this, 'name')"
            />
          </div>
          <div class="form-group">
            <label for="email">E-mail</label>
            <input
              autocomplete="off"
              type="email"
              class="form-control"
              id="email"
              v-model="this.email"
              @focus="this.active(this, 'email')"
              @blur="this.deactive(this, 'email')"
            />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              autocomplete="off"
              class="form-control"
              id="message"
              rows="3"
              v-model="this.message"
              @focus="this.active(this, 'message')"
              @blur="this.deactive(this, 'message')"
            ></textarea>
          </div>
          <button
            @click="this.sendMessage()"
            type="button"
            class="btn btn-primary"
          >
            <i class="bx bx-mail-send"></i> Send
          </button>
        </form>
      </div>
      <div class="col">
        <img class="image" src="@/assets/contact-form.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactSection",
  components: {},
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  props: ["lang"],
  methods: {
    showSuccessMessage(msg) {
      document.querySelector(".feedback-message").style.backgroundColor =
        "#c5ffbb";
      document.querySelector(".feedback-message").innerHTML = msg;
      document.querySelector(".feedback-message").style.top = "90px";
      setTimeout(() => {
        document.querySelector(".feedback-message").style.top = "-100%";
      }, 3000);
    },

    showErrorMessage(msg) {
      document.querySelector(".feedback-message").innerHTML = msg;
      document.querySelector(".feedback-message").style.backgroundColor =
        "#ffbbbb";
      document.querySelector(".feedback-message").style.top = "90px";
      setTimeout(() => {
        document.querySelector(".feedback-message").style.top = "-100%";
      }, 3000);
    },

    sendMessage: async function () {
      if (
        this.name == "" ||
        this.email == "" ||
        this.message == "" ||
        this.email.indexOf("@") == -1
      ) {
        this.showErrorMessage("Preencha todos os campos corretamente!");
        return;
      }

      const response = await fetch(
        "https://agencia4devs.com/devmatheusguerra.github.io/send-mail.php",
        {
          method: "POST",
          body: new URLSearchParams({
            name: this.name,
            email: this.email,
            message: this.message,
          }),
        }
      );
      const http_status = response.status;
      if (http_status == 200) {
        this.name = "";
        this.email = "";
        this.message = "";
        this.showSuccessMessage("Mensagem enviada com sucesso!");
        return;
      }

      if (http_status == 403) {
        const data = await response.json();
        let time = data.time;
        const time_diff = time;
        const minutes = 60 - Math.floor(time_diff / 60);
        const seconds = Math.floor(time_diff) % 60;
        const time_left = minutes + "m " + seconds + "s";
        this.showErrorMessage(
          "Para evitar spam, esta função está desabilitada por: <b>" +
            time_left +
            "</b>"
        );
        return;
      }

      this.showErrorMessage("Erro ao enviar mensagem!");
    },

    active(input, name) {
      input.$el
        .querySelector("#" + name)
        .parentElement.querySelector("label")
        .classList.add("active");
    },

    deactive(input, name) {
      if (input.$el.querySelector("#" + name).value.length == 0) {
        input.$el
          .querySelector("#" + name)
          .parentElement.querySelector("label")
          .classList.remove("active");
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
.contact-section {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: #9a9a9a;
  font-family: "Quicksand";
  z-index: 9;
}

.col {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
}

.form {
  text-align: justify;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 400px;
}

form {
  width: clamp(200px, 100%, 400px);
}

.form h2 {
  font-size: 3.4rem;
  font-weight: bold;
  font-family: "RaleWay";
  color: #9a9a9a;
  margin-bottom: 5px;
}

.form-group {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: auto;
  padding: 20px 0;
}

.form-group label {
  position: absolute;
  top: 33px;
  left: 10px;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
}

.form-group label.active {
  top: -10px;
  transform: scale(1.1);
}

.form-group input,
.form-group textarea {
  min-width: 200px;
  width: 100%;
  height: 26px;
  border: 2px solid #9a9a9a5f;
  border-radius: 10px;
  padding: 10px;
  transition: all 0.6s ease-in-out;
  text-indent: 10px;
}

.form-group textarea {
  height: 50px;
}

.btn {
  width: fit-content;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: #9a9a9abf;
  font-size: 1.2rem;
  font-family: "Quicksand";
  font-weight: 400;
  transition: all 0.6s ease-in-out;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.btn i {
  font-size: 1.2rem;
  margin-right: 10px;
}

.btn:hover {
  background-color: #9a9a9a;
  transform: translateX(-50%) scale(1.1);
}

.image {
  width: 100%;
  height: auto;
}

.feedback-message {
  position: fixed;
  z-index: 9999990;
  top: -100%; /* 80px -> Show */
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: #c5ffbb;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  font-size: 1.2rem;
  font-family: "Quicksand";
  font-weight: 400;
  transition: all 0.6s ease-in-out;
}
</style>
