<template>
    <h1 class="title">Cálculo do IMC</h1>
    <h2 class="subtitle">Digite seu peso e altura para calcular o IMC</h2>

    <div class="div-imc">
      <span class="p-float-label">
        <InputText id="weight" type="text" v-model="weight" :disabled="imc" />
        <label for="weight">Peso</label>
      </span>
    </div>

    <div class="div-imc">
      <span class="p-float-label">
        <InputText id="height" type="text" v-model="height" :disabled="imc" />
        <label for="height">Altura</label>
      </span>
    </div>

    <div class="div-imc" v-if="!imc">
      <Button label="Calcular" @click="calculate" />
      <Button label="Limpar" @click="clear" class="button-clear" />
    </div>

    <div v-if="imc">
      <p class="result">Seu IMC é : {{ imc }}</p>
      <p class="classification">
        A classificação do seu IMC é : {{ classification }}
      </p>

      <div class="button-reset">
        <Button label="Calcular novamente" @click="clear" />
      </div>
    </div>

</template>

<script>
export default {
  data() {
    return {
      height: null,
      weight: null,
      imc: null,
      classification: '',
    };
  },
  methods: {
    calculate() {
      this.imc = (this.weight / (this.height * this.height)).toFixed(2);
      if (this.imc < 18.5) {
        this.classification = 'Magro';
      } else if (this.imc >= 18.5 && this.imc < 25) {
        this.classification = 'Normal';
      } else if (this.imc >= 25 && this.imc < 30) {
        this.classification = 'Sobrepeso';
      } else if (this.imc >= 30 && this.imc < 40) {
        this.classification = 'Obesidade';
      } else {
        this.classification = 'Obesidade grave';
      }
    },
    clear() {
      this.height = null;
      this.weight = null;
      this.imc = null;
      this.result = '';
      this.classification = '';
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 7rem;
}


.div-imc {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
.button-clear {
  margin-left: 0.8rem !important;
}
.title {
  font-size: 2rem;
  display: flex;
  justify-content: center;
}
.subtitle {
  font-size: 1rem;
  display: flex;
  justify-content: center;
}
.result {
  font-size: 2rem;
  display: flex;
  justify-content: center;
}
.classification {
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
}
.button-reset {
  display: flex;
  justify-content: center;
}
</style>
