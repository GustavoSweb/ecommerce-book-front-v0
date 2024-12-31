<template>
  <section class="flex flex-col w-full px-128 pt-64 ">
      <div class=" items-start flex gap-128">
        <img
          :src="product.url_banner_product"
          alt=""
          class="w-full max-w-[350px]"
        />
  
      <div>
        <div class="flex gap-[4px]">
          <img src="/icons/star.svg" alt="" />
          <img src="/icons/star.svg" alt="" />
          <img src="/icons/star.svg" alt="" />
          <img src="/icons/star.svg" alt="" />
          <img src="/icons/star.svg" alt="" />
        </div>
        <h1
          class="mt-48 font-merriweather font-bold text-h3 max-w-[600px] leading-[68.4px]"
        >
          {{ product.title }}
        </h1>
        <p class="mt-32">{{ product.description }}</p>
        <div class="mt-16">
          <small class="line-through text-c4">R$300</small>
          <p class="text-[#10633E] text-bigbody font-medium font-['Roboto']">
            R$ {{ product.price }}
          </p>
        </div>
        <div class=" flex mt-32 gap-16">
          <div class=" p-16 bg-[#F5F5F5]"><img src="/icons/Email.svg" alt="" class="h-32 w-32"></div>
          <div class="py-16 px-32 bg-[#F5F5F5] text-body font-['Roboto'] flex items-center text-c5"><h6>Entrega instantânea </h6></div>
        </div>
        
      </div>
      </div>
      <div class="flex w-full gap-16 items-center mt-16">
        <hr class="w-full max-w-[462px] border border-c8">
        <div class="flex items-center gap-32">
          <ButtonEmphasis
            textButton="ADICIONAR"
            isIcon="true"
            
            isLowEmphasis="true"
            @click="addCart(product)"
          />
          <div>
            <p class="text-c5 font-['Roboto'] text-body"><span class="text-[#10633E]"><i class="fa-solid fa-plus fa-2xs mr-[4px]" ></i>200 pessoas compraram</span><br>nos últimos meses</p>
          </div>
        </div>
      </div>
  </section>
</template>
<script lang="ts" setup>
import api from "../../api/index.js";
interface Product {
  url_banner_product?: string;
  title?: string;
  description?: string;
  price?: number;
  stock?: number;
}

const product = ref<Product>({});
  onMounted(async () => {
    const route = useRoute();
  const id = route.params.id;
  if (!id) return navigateTo('/') 
  try {
    product.value = await api.products.GetOne(id);
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    navigateTo('/') 
  }
});
const addCart = (product: object): void => {
  if (import.meta.env.SSR === false) {
    let after_items = JSON.parse(localStorage.getItem("cart_products") + "");
    if (!after_items || typeof after_items != "object") after_items = [];
    after_items.push(product);
    localStorage.setItem("cart_products", JSON.stringify(after_items));
    navigateTo("/checkout");
  } else {
    return undefined;
  }
};
</script>
