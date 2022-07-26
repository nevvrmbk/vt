<template>
  <BodyItem></BodyItem>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BodyItem from "@/components/BodyItem.vue";

@Options({
  components: {
    BodyItem,
  },
})
export default class HomeView extends Vue {}
</script>
