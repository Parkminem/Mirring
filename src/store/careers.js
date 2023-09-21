import { defineStore } from 'pinia';
import careersApi from '@/api/careers';
import router from '@/routes';

export const useCareersStore = defineStore('careers', {
  state: () => ({
    careersList: null,
    careersDetail: null
  }),
  actions: {
    /**
     * 커리어 리스트 조회 액션
     */
    async careersListAct() {
      await careersApi
        .getCareers()
        .then((res) => {
          this.careersList = res.data.data;
        })
        .catch((err) => router.replace('/notfound'));
    },

    /**
     * 커리어 상세 조회 액션
     */
    async careersDetailAct(pk) {
      await careersApi
        .getCareersDetail(pk)
        .then((res) => {
          this.careersDetail = res.data.data;
        })
        .catch((err) => {
          router.replace('/notfound');
        });
    }
  }
});
