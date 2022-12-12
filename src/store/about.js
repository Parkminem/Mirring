import { defineStore } from 'pinia';
import aboutApi from './../api/about';

export const useAboutStore = defineStore('about', {
  state: () => ({
    partners: []
  }),
  actions: {
    async partnerAct(locale) {
      this.partners = [];
      await aboutApi
        .getPartners()
        .then((res) => {
          const data = res.data.data;
          switch (locale) {
            case 'kr':
              data.forEach((el) => {
                this.partners.push({ name: el.name_kr, logo: el.logo_file_url });
              });
              break;
            case 'en':
              data.forEach((el) => {
                this.partners.push({ name: el.name_us, logo: el.logo_file_url });
              });
              break;
            case 'id':
              data.forEach((el) => {
                this.partners.push({ name: el.name_id, logo: el.logo_file_url });
              });
              break;
            case 'pt':
              data.forEach((el) => {
                this.partners.push({ name: el.name_pt, logo: el.logo_file_url });
              });
              break;
          }
        })
        .catch((err) => console.log(err));
    }
  }
});
