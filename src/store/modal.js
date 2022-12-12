import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
  state: () => ({
    infoModalState: false
  }),
  actions: {
    infoModalOpen() {
      this.infoModalState = true;
    },
    infoModalClose() {
      this.infoModalState = false;
    }
  }
});
