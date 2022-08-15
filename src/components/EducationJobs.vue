<template>
  <div class="xp-section">
    <h2 v-if="this.lang == 'pt'">Educação & Trabalhos</h2>
    <h2 v-else>Education & Jobs</h2>
    <div class="row">
      <div class="col">
        <h4 class="year">2013 - 2015</h4>
        <ul>
          <li>
            <h5 v-if="this.lang == 'pt'">Inglês - Intermediário</h5>
            <h5 v-else>English - Intermediate</h5>
            <span>Interway</span>
          </li>
          <li>
            <h5 v-if="this.lang == 'pt'">Estagiário - Programador</h5>
            <h5 v-else>Intern - Programmer</h5>
            <span>CREDE 7 (SEDUC-CE)</span>
          </li>
          <li>
            <h5 v-if="this.lang == 'pt'">Técnico em Informática</h5>
            <h5 v-else>Computer Technician</h5>
            <span>EEEP Capelão Frei Orlando</span>
          </li>
        </ul>
      </div>
      <div class="col">
        <h4 class="year">2016 - 2019</h4>
        <ul>
          <li>
            <h5 v-if="this.lang == 'pt'">Alemão - Básico</h5>
            <h5 v-else>German - Basic</h5>
            <span>Centro de Idiomas Estrangeiros</span>
          </li>
          <li>
            <h5 v-if="this.lang == 'pt'">
              Engenharia da Computação <b>(incompleto)</b>
            </h5>
            <h5 v-else>Computer Engineering <b>(incomplete)</b></h5>
            <span>Universidade Federal do Ceará - Sobral</span>
          </li>
          <li>
            <h5 v-if="this.lang == 'pt'">
              Professor - Cursos técnicos em Informática e Desenvolvimento de
              Sistemas
            </h5>
            <h5 v-else>
              Teacher - Technical Courses of Computing and System Development
            </h5>
            <span>EEEP Francisco Paiva Tavares</span>
          </li>
          <li>
            <h5 v-if="this.lang == 'pt'">Ciência de Dados</h5>
            <h5 v-else>Data Science</h5>
            <span>Universidade Maurício de Nassau</span>
          </li>
        </ul>
      </div>
      <div class="col">
        <h4 v-if="this.lang == 'pt'" class="year">2020 - Presente</h4>
        <h4 v-else class="year">2020 - Present</h4>
        <ul>
          <li>
            <h5 v-if="this.lang == 'pt'">
              Professor - Cursos técnicos em Informática e Desenvolvimento de
              Sistemas (2017 - atualmente)
            </h5>
            <h5 v-else>
              Teacher - Technical Courses of Computing and System Development
              (2017 - currently)
            </h5>
            <span>EEEP Francisco Paiva Tavares</span>
          </li>
          <li>
            <h5 v-if="this.lang == 'pt'">
              Ciência de Dados <b>(conclusão em 2022.2)</b>
            </h5>
            <h5 v-else>Science of Data <b>(conclusion in 2022.2)</b></h5>
            <span>Universidade Maurício de Nassau</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationJobs",
  components: {},
  props: ["lang"],
};
</script>

<style scoped>
.xp-section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #9a9a9a;
  font-family: "Quicksand";
  margin-top: 100px;
}

.year {
  font-size: 1rem;
  font-weight: 400;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
}

.col {
  position: relative;
  width: 33.33%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 300px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}
ul li {
  margin-bottom: 15px;
}
ul li h5 {
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
}

ul li span {
  font-size: 0.8rem;
  font-weight: 400;
}
</style>
