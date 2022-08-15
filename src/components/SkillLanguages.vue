<template>
    <h2 v-if="this.lang == 'pt'">Habilidades</h2>
    <h2 v-else>Skills</h2>
  <div class="section">
    <CoffeeChart class="cups" percent="100" color="#D25A36" :logo="require('@/assets/logos/html.svg')"/>
    <CoffeeChart class="cups" percent="90" color="#3361AA" :logo="require('@/assets/logos/css.svg')"/>
    <CoffeeChart class="cups" percent="75" color="#503C75" :logo="require('@/assets/logos/bootstrap.svg')"/>
    <CoffeeChart class="cups" percent="80" color="#5E8DEF" :logo="require('@/assets/logos/ionic.svg')"></CoffeeChart>
    <CoffeeChart class="cups" percent="90" color="#F3E050" :logo="require('@/assets/logos/js.svg')"></CoffeeChart>
    <CoffeeChart class="cups" percent="65" color="#56828D" :logo="require('@/assets/logos/electron.svg')"></CoffeeChart>
    <CoffeeChart class="cups" percent="70" color="#64B687" :logo="require('@/assets/logos/vue.svg')"></CoffeeChart>
    <CoffeeChart class="cups" percent="75" color="#86D4E3" :logo="require('@/assets/logos/go.svg')"></CoffeeChart>
    <CoffeeChart class="cups" percent="80" color="#787BAF" :logo="require('@/assets/logos/php.svg')"></CoffeeChart>
    <CoffeeChart class="cups" percent="80" color="#4977A9" :logo="require('@/assets/logos/python.svg')"></CoffeeChart>
    <CoffeeChart class="cups" percent="70" color="#D28E32" :logo="require('@/assets/logos/mysql.svg')"></CoffeeChart>
    <CoffeeChart class="cups" percent="40" color="#5DAFD5" :logo="require('@/assets/logos/docker.svg')"></CoffeeChart>
    <CoffeeChart class="cups" percent="65" color="#40668D" :logo="require('@/assets/logos/postgresql.svg')"></CoffeeChart>
    <CoffeeChart class="cups" percent="65" color="#DE5D43" :logo="require('@/assets/logos/swift.svg')"></CoffeeChart>
    <CoffeeChart class="cups" percent="85" color="#5FCC89" :logo="require('@/assets/logos/figma.svg')"></CoffeeChart>
  </div>
</template>

<script>
import CoffeeChart from './CoffeeChart.vue';
export default {
  name: "SkillLanguages",
  components: {
    CoffeeChart
  },
  props: ["lang"],
  data() {
    return {
    };
  },
  methods: {

  },
  mounted() {
    
  },
};
</script>

<style scoped>
    .section {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        font-family: "Quicksand";
    }

    .cups{
        margin: 0 10%;
    }

    h2{
        text-align: center;
        color: #9a9a9a;
        font-family: "Quicksand";
    }

</style>
