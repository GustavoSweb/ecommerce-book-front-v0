<template>
  <div class="flex flex-col items-center">
    <h1>Carrinho</h1>
    <div class="flex gap-32">
      <div
        class="flex gap-16 items-center font-['Roboto'] w-256 pb-16 border-b-2 border-[#62e2a9]"
        :class="{ '!border-c7': page == 1 }"
      >
        <div
          class="bg-c10 w-32 h-32 rounded-[50%] flex justify-center font-semibold items-center text-16 text-white"
        >
          <p>1</p>
        </div>
        <p>Carrinho de compras</p>
      </div>
      <div
        class="flex gap-16 items-center font-['Roboto'] w-256 pb-16 border-b-2 border-transparent"
        :class="{ '!border-c7': page == 2, '!border-[#62e2a9]': page > 2 }"
      >
        <div
          class="bg-c10 w-32 h-32 rounded-[50%] flex justify-center font-semibold items-center text-16 text-white"
        >
          <p>2</p>
        </div>
        <p>Checkout</p>
      </div>
      <div
        class="flex gap-16 items-center font-['Roboto'] w-256 pb-16 border-b-2 border-transparent"
        :class="{ '!border-c7': page == 3 }"
      >
        <div
          class="bg-c10 w-32 h-32 rounded-[50%] flex justify-center font-semibold items-center text-16 text-white"
        >
          <p>3</p>
        </div>
        <p>Compra finalizada</p>
      </div>
    </div>
  </div>
</template>
scr
<script lang="ts" setup>
var page = ref(1);
</script>
