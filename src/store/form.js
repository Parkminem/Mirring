import { defineStore } from 'pinia';
import formApi from './../api/form';
import router from '@/routes';

export const useFormStore = defineStore('form', {
  state: () => ({
    types: []
  }),
  actions: {
    async typeListAct(locale) {
      this.types = [];
      await formApi
        .getTypeList()
        .then((res) => {
          const data = res.data.data;
          switch (locale) {
            case 'kr':
              data.forEach((el) => {
                this.types.push({ type: el.question_type_pk, name: el.name_kr });
              });
              break;
            case 'en':
              data.forEach((el) => {
                this.types.push({ type: el.question_type_pk, name: el.name_us });
              });
              break;
            case 'pt':
              data.forEach((el) => {
                this.types.push({ type: el.question_type_pk, name: el.name_pt });
              });
              break;
            case 'id':
              data.forEach((el) => {
                this.types.push({ type: el.question_type_pk, name: el.name_id });
              });
          }
        })
        .catch((err) => {
          router.replace('/notfound');
        });
    }
  }
});

export const useMapStore = defineStore('map', {
  state: () => ({
    locations: null
  }),
  actions: {
    locationAct() {
      formApi
        .getLocation()
        .then((res) => {
          this.locations = res.data.data;
        })
        .catch((err) => router.replace('/notfound'));
    }
  }
});
