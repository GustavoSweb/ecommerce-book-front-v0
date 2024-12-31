<template>
  <button
    class="whitespace-nowrap text-c5 font-['Roboto'] text-mbody font-semibold flex gap-8 items-center"
  >
    <i class="fa-solid fa-x"></i>{{ textButton }}
  </button>
</template>
<script>
export default {
  props: ["textButton"],
};
</script>
