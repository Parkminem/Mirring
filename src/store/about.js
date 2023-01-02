import { defineStore } from 'pinia';
import aboutApi from './../api/about';

export const useAboutStore = defineStore('about', {
  state: () => ({
    partners: [],
    newsList: null,
    detailNews: null,
    historys: null
  }),
  actions: {
    /**
     * 파트너사 액션(언어코드)
     * state : partners
     */
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
    },
    /**
     * 뉴스리스트 액션(언어코드, 페이지 번호)
     * state : newsList
     */
    async newsAct(locale, page) {
      await aboutApi
        .getNews(locale, page)
        .then((res) => {
          this.newsList = res.data.data;
        })
        .catch((err) => console.log(err));
    },
    /**
     * 디테일뉴스 액션(언어코드, 뉴스 고유 번호)
     * state : detailNews
     */
    async detailNewsAct(locale, num) {
      await aboutApi
        .getDetailNews(locale, num)
        .then((res) => {
          this.detailNews = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    /**
     * 연혁 액션(언어코드)
     */
    async historyAct(locale) {
      function reducer(objectArray, property) {
        return objectArray.reduce((acc, obj) => {
          let key = obj[property];
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(obj);
          return acc;
        }, {});
      }
      await aboutApi
        .getHistory(locale)
        .then((res) => {
          let result = reducer(res.data.data, 'year');
          for (let value of Object.values(result)) {
            value.sort((a, b) => {
              if (a.month > b.month) {
                return 1;
              }
              if (a.month < b.month) {
                return -1;
              }
            });
          }
          this.historys = result;
        })
        .catch((err) => console.log(err));
    }
  }
});
