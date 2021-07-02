<template>
  <global-component></global-component>
  <local-component :title="title" @addclick="count += $event">
    <!-- Slot test -->
    <template v-slot:header>
      slot header
    </template>
    <template v-slot:content>
      slot content
    </template>
    
  </local-component>
  <p>Count: {{count}} </p>
</template>


<script>
import LocalComponent from "./components/LocalComponent.vue";

export default {
  data() {
    return{
    title: 'Component title',
    count: 0
    }
  },
  computed:{
    computedTitle(){
      return "Teste " + this.title;
    }
  },
  methods: {},
  components: { LocalComponent },
//hooks de inicialização
  beforeCreate(){
    console.log('beforeCreate', this.title, this.computedTitle);
  },

  created(){
    console.log('created', this.title, this.computedTitle);
  },
//hooks de montagem(Inserção no DOM)
beforeMount(){
  console.log("beforeMount");
},
mounted(){
  console.log('mounted');
},
//hooks de atualização
beforeUpdate(){
  console.log('beforeUpdate');
},
updated(){
  console.log('updated');
},
//hooks de destruição
beforeUnmount(){
  console.log('beforeUnmount');
},
unmounted(){
  console.log('unmounted');
},

};
</script>

<style>
#app
     {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
