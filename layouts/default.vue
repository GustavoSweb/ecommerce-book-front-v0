<template>
  <div>
    <header class="flex w-full items-center justify-between px-128 py-16">
      <NuxtLink to="/"><h4 class="text-bigbody">b00k.</h4></NuxtLink>
      <ul class="hidden md:flex font-['Roboto'] font-medium gap-32 text-normal">
        <li>Inicio</li>
        <li>Produtos</li>
        <li>Contato</li>
      </ul>
      <div class="flex gap-16">
        <img src="/icons/search.svg" alt="" />
        <img src="/icons/user-circle.svg" />
        <img src="/icons/shoppingbag.svg" alt="" />
      </div>
    </header>
    <slot></slot>
  </div>
</template>
