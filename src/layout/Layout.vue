<template>
  <Transition name="infoModal">
    <Modal v-if="infoModalState" />
  </Transition>
  <Header />
  <router-view :key="$route.fullPath"></router-view>
  <Footer />
</template>
<script setup>
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import Modal from '@/components/contact/Modal.vue';
import { useModalStore } from '@/store/modal';

const modalStore = useModalStore();
const { infoModalState } = storeToRefs(modalStore);

//모달창 on/off
watch(infoModalState, (newInfoModalState) => {
  const body = document.querySelector('body');
  if (newInfoModalState) body.style.overflow = 'hidden';
  else body.style.overflow = 'auto';
});
</script>

<style lang="scss">
//transition
.infoModal-enter-from,
.infoModal-leave-to {
  opacity: 0;
}
.infoModal-enter-active,
.infoModal-leave-active {
  transition: all 0.25s ease-in-out;
}
.infoModal-enter-to,
.infoModal-leave-from {
  opacity: 1;
}
@media (max-width: 1024px) {
  #modal {
    height: 100%;
    .modal_box {
      width: 80%;
      padding: 30px;
      font-size: 12px;
    }
  }
}
</style>
