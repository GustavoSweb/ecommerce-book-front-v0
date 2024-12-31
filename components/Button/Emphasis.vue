<template>
  <button
    class="bg-black hover:bg-transparent border-transparent border hover:border-c7 hover:text-c10 transition-all  duration-500 whitespace-nowrap text-white font-['Roboto'] text-buttontext flex py-[10px] items-center gap-[20px] px-[20px]"
    :class="{ 'font-bold': !isLowEmphasis }"
    @mouseover="notMouse = false"
    @mouseleave="notMouse = true"
  >
<span class="icon-wrapper relative flex items-center justify-center w-16" v-if="isIcon">
    <transition name="fade">
      <div class="block absolute" v-if="isIcon && notMouse">
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.75 5L6.75 5.75C6.75 6.99264 7.75736 8 9 8C10.2426 8 11.25 6.99264 11.25 5.75V5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.7085 2.75H6.29127C4.82475 2.75 3.57318 3.81024 3.33209 5.2568L2.08209 12.7568C1.77732 14.5854 3.18745 16.25 5.04127 16.25H12.9585C14.8123 16.25 16.2225 14.5854 15.9177 12.7568L14.6677 5.2568C14.4266 3.81024 13.175 2.75 11.7085 2.75Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
  </svg>
      </div>

    </transition>
      <transition name="fade"><i class="fa-solid fa-arrow-up-right-from-square fa-xs absolute" v-if=" !notMouse"></i></transition>
</span>
    {{
      textButton
    }}
    
  </button>
</template>
<script>
export default {
  props: ["textButton", "isIcon", "isLowEmphasis"],
  data() {
    return {
      notMouse: true
    };
  }
};
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease; 
}
.fade-leave-active {
  transition: none;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}

</style>
