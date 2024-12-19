<template>
  <div>
    <section class="bg-c1 pt-96 pb-64 px-32 sm:px-64 kick:px-128 flex flex-col">
      <div class="flex justify-between items-stretch">
        <div>
          <h1
            class="text-[13dvw] leading-[calc(13dvw*1.2)] kick:text-big font-merriweather kick:leading-[123.6px]"
          >
            Bem-vindo à <br class="hidden md:block" />Su<span
              class="bg-black text-white"
              >a Biblioteca</span
            ><br class="hidden md:block" />
            Digital Perfeita!
          </h1>
          <p class="max-w-[546px] font-['Roboto'] text-c7 mt-32 text-body">
            Explore uma coleção infinita de eBooks de todos os gêneros — para
            você se inspirar, aprender e se entreter, tudo com apenas alguns
            cliques.
          </p>
        </div>
        <div class="relative w-[160px] h-[368px] hidden bigkick:block">
          <div
            class="bg-c10 w-32 -top-[12px] -right-[12px] h-32 absolute"
          ></div>
          <img src="/images/pc01.jpeg" alt="" class="w-[160px] absolute" />
          <img
            src="/images/pc02.jpeg"
            alt=""
            class="w-[160px] absolute top-[64px] right-[64px]"
          />
          <img
            src="/images/hp03.jpeg"
            alt=""
            class="w-[160px] absolute top-[128px] right-[128px]"
          />
          <div
            class="bg-c10 w-32 top-[348px] right-[268px] h-32 absolute"
          ></div>
        </div>
      </div>
      <div class="flex mt-64 items-center justify-between">
        <ButtonEmphasis textButton="VER TODOS OS EBOOKS" />
        <hr class="hidden lg:block w-full border border-c7 mx-96" />
        <p
          class="font-merriweather text-mbody hidden lg:block text-c5 whitespace-nowrap text-right"
        >
          A maior biblioteca de ebooks! cerca de 1000 ebooks
        </p>
      </div>
    </section>
    <section class="px-128 mt-96">
      <div>
        <h4 class="font-['Roboto'] text-buttontext font-semibold">
          Living Room
        </h4>
      </div>
      <div></div>
    </section>
  </div>
</template>
<script>
import api from "../api/index.js";
export default {
  async setup() {
    const products = await api.products.GetAll();
    console.log(products);
  },
};
</script>
