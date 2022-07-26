<script lang="ts">
import { Vue, Options } from "vue-class-component";
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

@Options({
  components: {
    HeaderComponent,
    FooterComponent,
  },
})
export default class App extends Vue {}
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <router-view></router-view>
  <FooterComponent></FooterComponent>
</template>
