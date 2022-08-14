<template>
  <div class="languages-github">
    <div
      class="chart-language-github"
      height="400"
      v-if="this.series.length == 0"
    >
      <h1>teste</h1>
    </div>

    <apexchart
      class="chart-language-github"
      type="radialBar"
      height="400"
      :options="options"
      :series="series"
      v-else
    ></apexchart>

    <div class="chart-description">
        <h2>Meus Projetos</h2>
        <p>
            Neste segmento, são exibidas as métricas reais e em <span class="ps">tempo real<sup>*</sup></span> de uso de diferentes linguagens/tecnologias obtidas através do meu perfil no GitHub.
        </p>
        <p>
           Grande parte dos projetos computados foram desenvolvidos exclusivamente para aprendizado e apresentação de conhecimentos. Além desses possuo alguns outros projetos privados nos quais utilizei 
            <span class="tecnologias">PHP</span>, 
            <span class="tecnologias">Lumen</span>, 
            <span class="tecnologias">JavaScript</span>, 
            <span class="tecnologias">Electron</span>, 
            <span class="tecnologias">Cordova</span>, 
            <span class="tecnologias">Ionic</span>, 
            <span class="tecnologias">MySQL</span>.
        </p>
        <p class="obs">
            <span class="ps">*</span> Caso não seja possível acessar a API, não serão apresentados dados em tempo real. Serão obtidos dados de um backup anterior.
        </p>

    </div>

  </div>
</template>

<script>
import apexchart from "vue3-apexcharts";
import GITHUB_LANGS from "@/data/github";
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
      options: {
        chart: {
          height: 400,
          width: "100%",
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            startAngle: -180,
            endAngle: 45,
            hollow: {
              margin: 5,
              size: "20%",
              background: "transparent",
              image: undefined,
            },
            dataLabels: {

              name: {
                fontSize: "18px",
              },
              value: {
                fontSize: "14px",
              },
              total: {
                show: true,
                label: "Total",
                formatter: function () {
                  return 100 + "%";
                },
              },
            },
          },
        },
        labels: [],
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
    for (let lang in this.langs) {
      sum += this.langs[lang];
    }
    for (let lang in this.langs) {
      this.series.push(parseFloat(((this.langs[lang] / sum) * 100).toFixed(1)));
      this.options.labels.push(lang);
    }
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

.tecnologias
{
    font-weight: bold;
    text-decoration: underline;
}

.ps{
    font-weight: bolder;
}

.ps sup{
    font-size: 1.2rem;
}

.obs{
    font-size: 0.8rem;
}
</style>
