<template>
  <div class="languages-github">
    <div
      class="chart-language-github"
      height="400"
      v-if="this.series.length == 0"
    ></div>

    <apexchart
      width="500px"
      type="pie"
      :options="chartOptions"
      :series="series"
      v-else
    ></apexchart>

    <div class="chart-description">
      <h2 v-if="this.lang == 'pt'">Meus Projetos</h2>
      <h2 v-else>My Projects</h2>
      <p v-if="this.lang == 'pt'">
        Neste segmento, são exibidas as métricas reais de uso de diferentes
        linguagens/tecnologias obtidas através do meu perfil no GitHub.
      </p>
      <p v-else>
        In this section, you can view measurements from different programming
        languages/technologies usage, which it had been got through my profile
        on GitHub.
      </p>
      <p v-if="this.lang == 'pt'">
        Grande parte dos projetos computados foram desenvolvidos exclusivamente
        para aprendizado e apresentação de conhecimentos. Além desses possuo
        alguns outros projetos privados nos quais utilizei
        <span class="tecnologias">PHP</span>,
        <span class="tecnologias">Lumen</span>,
        <span class="tecnologias">JavaScript</span>,
        <span class="tecnologias">Electron</span>,
        <span class="tecnologias">Cordova</span>,
        <span class="tecnologias">Ionic</span>,
        <span class="tecnologias">MySQL</span>.
      </p>

      <p v-else>
        Most of the projects developed exclusively for learning and knowledge
        presentation. Besides these, I made some other private projects, in
        which, I coded with
        <span class="tecnologias">PHP</span>,
        <span class="tecnologias">Lumen</span>,
        <span class="tecnologias">JavaScript</span>,
        <span class="tecnologias">Electron</span>,
        <span class="tecnologias">Cordova</span>,
        <span class="tecnologias">Ionic</span>,
        <span class="tecnologias">MySQL</span>.
      </p>

      <p v-if="this.lang == 'pt'">
        Para mais detalhes, acesse o meu
        <a
          class="link"
          href="https://www.github.com/devmatheusguerra"
          target="_blank"
        >
          <i class="bx bxl-github"></i> perfil do GitHub.
        </a>
      </p>
      <p v-else>
        To see more details, visit my
        <a
          class="link"
          href="https://www.github.com/devmatheusguerra"
          target="_blank"
        >
          <i class="bx bxl-github"></i> GitHub profile.
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import apexchart from "vue3-apexcharts";
import { getMetrics } from "@/functions/githubConsumer";
export default {
  name: "GithubLanguages",
  components: {
    apexchart,
  },
  props: ["lang"],
  data() {
    return {
      colors: [
        "#F2EABE",
        "#E9C7AB",
        "#E5B9AF",
        "#E5BACB",
        "#C6B0CD",
        "#A9AACD",
        "#9EA0CD",
        "#ACC6E1",
        "#B1D5DD",
        "#B1D4BF",
        "#D4E1BE"
      ],
      series: [],
      chartOptions: {
        chart: {
          width: "100%",
          type: "pie",
        },
        labels: [],
        theme: {
          mode: "light",
          palette: this.colors,
        },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -5,
            },
          },
        },
        title: {
          text: "Linguagens mais utilizadas em projetos",
          align: "center",
        },
        dataLabels: {

          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex];
            return [name, val.toFixed(1) + "%"];
          },
        },
        legend: {
          show: false,
        },
      },
    };
  },
  methods: {
    randomColor() {
      const R = (parseInt(Math.random() * 99999) % 150) + 1;
      const G = (parseInt(Math.random() * 99999) % 150) + 1;
      const B = (parseInt(Math.random() * 99999) % 150) + 1;

      let r = R.toString(16);
      let g = G.toString(16);
      let b = B.toString(16);

      if (r.length === 1) r = "0" + r;
      if (g.length === 1) g = "0" + g;
      if (b.length === 1) b = "0" + b;

      return "#" + r + g + b + "5F";
    },
  },
  mounted() {
    getMetrics().then((langs) => {
        Object.keys(langs).forEach((key) => {
          this.chartOptions.labels.push(key)
        });

        Object.values(langs).forEach((v) => {
          this.series.push(parseFloat(v.toFixed(1)));
        });
        
    });

  },
};
</script>

<style scoped>
.languages-github {
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: "Quicksand";
}

.chart-language-github {
  width: 50%;
  height: 500px;
}

.chart-description {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  text-align: justify;
  color: #9a9a9a;
}

.tecnologias {
  font-weight: bold;
  text-decoration: underline;
}

.link {
  color: #9a9a9a;
  text-decoration: none;
  font-weight: bold;
}
</style>
