<template>
  <div class="flex flex-col items-center px-128">
    <div class="relative h-128 flex items-center justify-center">
      <!-- Contêiner do título -->
      <h1
        v-for="(title, index) in titles"
        :key="index"
        class="text-h3 font-merriweather font-bold absolute transition-all duration-500 mt-96 text-c10"
        :class="{
          'opacity-0 translate-y-4': page !== index,
          'opacity-100 translate-y-0': page === index,
        }"
      >
        {{ title }}
      </h1>
    </div>
    <div class="overflow-x-scroll lg:overflow-auto max-w-[100dvw]">
      <div class="flex gap-32 mt-64 pl-8 pb-16 md:p-0 min-w-[832px]">
        <div
          class="flex gap-16 transition-all duration-500 items-center font-['Roboto'] w-256 pb-16 border-b-2 border-[#62e2a9]"
          :class="{ '!border-c7': page == 0 }"
        >
          <div
            class="bg-c10 w-32 h-32 rounded-[50%] transition-all duration-500 flex justify-center font-semibold items-center text-16 text-white"
            :class="{ '!bg-[#62e2a9] ': page > 0 }"
          >
            <p>1</p>
          </div>
          <p
            :class="{ '!text-[#62e2a9] ': page > 0 }"
            class="text-c10 transition-all duration-500"
          >
            Carrinho de compras
          </p>
        </div>
        <div
          class="flex gap-16 items-center transition-all duration-500 text-c4 font-['Roboto'] w-256 pb-16 border-b-2 border-transparent"
          :class="{
            '!border-c7  text-c10': page == 1,
            '!border-[#62e2a9]  !text-[#62e2a9]': page > 1,
          }"
        >
          <div
            class="bg-c4 w-32 h-32 transition-all duration-500 text-white rounded-[50%] flex justify-center font-semibold items-center text-16"
            :class="{ '!bg-[#62e2a9] ': page > 1, '!bg-c10': page == 1 }"
          >
            <p>2</p>
          </div>
          <p>Checkout</p>
        </div>
        <div
          class="flex gap-16 items-center font-['Roboto'] w-256 pb-16 border-b-2 border-transparent"
          :class="{ '!border-c7': page == 2 }"
        >
          <div
            class="bg-c4 w-32 h-32 rounded-[50%] flex justify-center font-semibold items-center text-16 text-white"
            :class="{ '!bg-c10': page == 2 }"
          >
            <p>3</p>
          </div>
          <p class="text-c4" :class="{ '!text-c10': page == 2 }">
            Compra finalizada
          </p>
        </div>
      </div>
    </div>
    <div class="w-full flex items-start mt-64">
      <table class="w-full h-auto">
        <thead>
          <tr class="text-left">
            <th class="w-[60%]">Produto</th>
            <th>Preço</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <td>{{ product.title }}fasdfa</td>
            <td>{{ product.quantity }}asdfasdf</td>
            <td>{{ product.price }}sdfasdf</td>
          </tr>
          <tr>
            <td>fasdfa</td>
            <td>asdfasdf</td>
            <td>sdfasdf</td>
          </tr>
        </tbody>
      </table>
      <div class="max-w-[413px] w-full border-[2px] border-c6 p-32">
        <h1 class="text-buttontext font-['Roboto']">Detalhes carrinho</h1>
        <div
          class="border-[2px] border-c6 w-full px-16 py-8 mt-16 flex items-center"
        >
          <div
            @click="AlterCheckEmail"
            class="mr-8 w-5 p-[3px] flex items-center justify-center h-5 border border-gray-300 rounded-full"
          >
            <input
              type="radio"
              :class="{ 'bg-c7': emailChecked }"
              class="w-full h-full transition-all appearance-none rounded-full"
            />
          </div>
          <p>Envio por e-mail</p>
        </div>
        <div class="flex justify-between mt-16 font-['Roboto'] text-mbody">
          <p class="text-c7">Subtotal</p>
          <p class="font-medium">R$64</p>
        </div>
        <hr class="w-full border border-c3 mt-8" />

        <div
          class="flex text-buttontext font-medium justify-between mt-16 font-['Roboto']"
        >
          <p>Total</p>
          <p>R$64</p>
        </div>
        <button
          class="bg-c10 hover:bg-transparent border-transparent border hover:border-c7 box-content text-white hover:text-c10 transition-all active:scale-95 w-full py-[10px] font-['Roboto'] tracking-[0.1rem] mt-32 font-medium"
        >
          Meios de Pagamento
        </button>
      </div>
    </div>
    <button
      @click="
        () => {
          if (page < 2) {
            page++;
          }
        }
      "
    >
      Next
    </button>
  </div>
</template>
scr
<script lang="ts" setup>
var titles = ref(["Carrinho", "Checkout", "Finalizado!"]);
var page = ref(0);
var products = ref([]);
var emailChecked = ref(true);
function AlterCheckEmail() {
  emailChecked.value = !emailChecked.value;
}
</script>
