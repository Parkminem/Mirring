<template>
  <Transition name="infoModal">
    <ModalContact v-if="infoModalState" />
  </Transition>
  <Header />

  <router-view :key="$route.fullPath"></router-view>
  <Footer v-if="locations" />
</template>
<script setup>
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import ModalContact from '@/components/contact/ModalContact.vue';
import { useModalStore } from '@/store/modal';
import { useMapStore } from '@/store/form';

const modalStore = useModalStore();
const mapStore = useMapStore();
const { locations } = storeToRefs(mapStore);
const { infoModalState } = storeToRefs(modalStore);

//위치 리스트 조회
mapStore.locationAct();

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
