<template>
  <div class="h-[433px] w-[262px] font-['Roboto']">
    <div
      :style="{
        backgroundImage: `url('${urlBackground}')`,
      }"
      class="h-[349px] mb-16 w-full bg-center bg-contain bg-no-repeat bg-[#F3F5F7]"
    ></div>
    <div class="flex">
      <img src="/icons/star.svg" alt="" />
      <img src="/icons/star.svg" alt="" />
      <img src="/icons/star.svg" alt="" />
      <img src="/icons/star.svg" alt="" />
      <img src="/icons/star.svg" alt="" />
    </div>
    <h6 class="text-mbody font-semibold my-[6px]">{{ title }}</h6>
    <div class="flex gap-[12px]">
      <p class="font-semibold">R${{ price }}</p>
      <p class="text-c5 line-through">R${{ parseInt(price) + 50 }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["price", "urlBackground", "title"],
};
</script>
