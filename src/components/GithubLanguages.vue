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
        Neste segmento, são exibidas as métricas reais e em
        <span class="ps">tempo real<sup>*</sup></span> de uso de diferentes
        linguagens/tecnologias obtidas através do meu perfil no GitHub.
      </p>
      <p v-else>
        In this section, you can watch reals and lives measurements of different
        programming languages/technologies usage through my profile on GitHub.
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
        presentation. Besides these I made some other private projects in which
        I coded
        <span class="tecnologias">PHP</span>,
        <span class="tecnologias">Lumen</span>,
        <span class="tecnologias">JavaScript</span>,
        <span class="tecnologias">Electron</span>,
        <span class="tecnologias">Cordova</span>,
        <span class="tecnologias">Ionic</span>,
        <span class="tecnologias">MySQL</span>.
      </p>

      <p class="obs" v-if="this.lang == 'pt'">
        <span class="ps">*</span> Caso não seja possível acessar a API do
        Github, não serão apresentados dados em tempo real. Serão obtidos dados
        de backup de aproximadamente 1h atrás.
      </p>

      <p class="obs" v-else>
        <span class="ps">*</span> If, for some reason, the Github API is not
        working properly, it'll be displayed data from 1 hour ago
      </p>
    </div>
  </div>
</template>

<script>
import apexchart from "vue3-apexcharts";
import GITHUB_LANGS from "@/data/github";
import { getMetrics } from "@/functions/githubConsumer";
export default {
  name: "GithubLanguages",
  components: {
    apexchart,
  },
  props: ["lang"],
  data() {
    return {
      langs: GITHUB_LANGS,
      username: "devmatheusguerra",
      series: [],
      chartOptions: {
        chart: {
          width: "100%",
          type: "pie",
        },
        labels: [],
        theme: {
          monochrome: {
            enabled: true,
            color: "#787878",
          },
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
    let sum = 0;
    getMetrics().then((langs) => {
      for (let lang in langs) {
        sum += this.langs[lang];
      }
      console.log(sum);
      for (let lang in this.langs) {
        this.series.push(
          parseFloat(((this.langs[lang] / sum) * 100).toFixed(1))
        );
        this.chartOptions.labels.push(lang);
      }
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

.ps {
  font-weight: bolder;
}

.ps sup {
  font-size: 1.2rem;
}

.obs {
  font-size: 0.8rem;
}
</style>
