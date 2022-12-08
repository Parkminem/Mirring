<template>
  <Transition name="infoModal">
    <Modal v-if="infoModalState" />
  </Transition>
  <Header />
  <router-view :key="route.fullPath"></router-view>
  <Footer />
</template>
<script setup>
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import Header from '../components/common/Header.vue';
import Footer from '../components/common/Footer.vue';

import Modal from '../components/contact/Modal.vue';
import { useModalStore } from '../store/modal';

const modalStore = useModalStore();
const { infoModalState } = storeToRefs(modalStore);
const route = useRoute();

//모달창 on/off
watch(infoModalState, (newInfoModalState) => {
  const body = document.querySelector('body');
  if (newInfoModalState) body.style.overflow = 'hidden';
  else body.style.overflow = 'auto';
});
</script>

<style>
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
</style>
