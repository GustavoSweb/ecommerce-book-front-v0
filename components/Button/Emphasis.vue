<template>
  <button
    class="bg-black whitespace-nowrap text-white font-['Roboto'] text-buttontext font-bold py-[10px] px-[20px]"
  >
    {{ textButton }}
  </button>
</template>
<script>
export default {
  props: ["textButton"],
};
</script>
