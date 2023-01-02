<template>
  <section class="section" data-name="about_history">
    <div class="container_1358">
      <p class="title">{{ t('about.history') }}</p>
      <p class="text">{{ t('about.historyDesc') }}</p>
      <div class="history_area">
        <div class="content box_animation" v-for="(item, idx) in keyArr.length" :key="item[idx]">
          <div class="history_box" style="opacity: 1">
            <p class="year">{{ keyArr[idx] }}</p>
            <div class="info">
              <div class="month_box" v-for="(item2, idx2) in historys[keyArr[idx]]" :key="item2.month">
                <span
                  class="month"
                  v-if="
                    idx2 == 0 || item2.month !== historys[keyArr[idx]][idx2 === 0 ? idx2 : idx2 - 1].month
                      ? true
                      : false
                  "
                  >{{ item2.month }}
                </span>
                <p v-if="locale === 'kr'">{{ item2.content_kr }}</p>
                <p v-if="locale === 'en'">{{ item2.content_us }}</p>
                <p v-if="locale === 'id'">{{ item2.content_id }}</p>
                <p v-if="locale === 'pt'">{{ item2.content_pt }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useAboutStore } from '../../store/about';
const aboutStore = useAboutStore();
const { historys } = storeToRefs(aboutStore);
const { t, locale } = useI18n();

const keyArr = Object.keys(historys.value);
</script>
<style lang="scss" scoped>
.section {
  width: 100%;
  padding: 100px 0 185px 0;
  .container_1358 {
    > p {
      font-family: 'Noto Sans', sans-serif;
      color: #292929;
      text-align: center;
      &.title {
        font-weight: bold;
        font-size: 22px;
        line-height: 1.36;
      }
      &.text {
        font-size: 16px;
        line-height: 1.75;
        margin-top: 10px;
      }
    }
    .history_area {
      margin-top: 82px;
      display: flex;
      flex-wrap: wrap;
      .content {
        display: flex;
        flex-wrap: wrap;
        width: 35%;
        padding: 0 100px;
        margin-top: 150px;
        background-image: url(/assets/images/about/history_dot.png);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: top;
        &:first-child {
          margin-top: 150px;
        }
        .history_box {
          position: relative;
          width: 378px;
          &::before {
            content: '';
            position: absolute;
            top: -5px;
            left: 13px;
            width: 11px;
            height: 11px;
            background-color: #ec6c00;
            border-radius: 50%;
          }
          &.active::before {
            background-color: #d2d2d2;
          }
          &:last-child {
            // margin-left: auto;
          }
          &:nth-child(3n) {
            margin-right: 0;
          }
          .year {
            font-family: 'Noto Sans', sans-serif;
            font-weight: bold;
            font-size: 16px;
            line-height: 1.38;
            color: #292929;
            margin-top: 30px;
          }
          .info {
            margin-top: 16px;
            .month_box {
              position: relative;
              p {
                font-family: 'Noto Sans', sans-serif;
                font-size: 14px;
                line-height: 1.43;
                color: #5a5a5a;
                margin-bottom: 16px;
                margin-left: 27px;
              }
              .month {
                font-family: 'Noto Sans', sans-serif;
                font-weight: bold;
                font-size: 14px;
                position: absolute;
                top: 0;
                left: 0;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1400px) {
  .section .container_1358 .history_area .content {
    padding: 0 100px;
    width: 29%;
  }
}
@media (max-width: 1024px) {
  .section {
    padding: 50px 0;
    .container_1358 {
      > p {
        &.title {
          font-size: 12px;
          margin-bottom: 11px;
        }
        &.text {
          font-size: 12px;
          margin: 0;
        }
      }
      .history_area {
        margin: 0;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 40px;
          width: 1px;
          height: 100%;
          background-image: url(/assets/images/about/123_t.png);
          background-repeat: repeat;
          background-size: 120%;
          background-position: top;
          opacity: 0.4;
        }
        .content {
          padding: 0 40px;
          width: 100%;
          margin-top: 0;
          background-image: none;
          &:first-child {
            margin-top: 34.5px;
            .history_box:first-child {
              margin-top: 20.5px;
            }
          }
          .history_box {
            width: 100%;
            padding-left: 33.5px;
            margin-top: 50px;
            box-sizing: border-box;
            &::before {
              top: 4.5px;
              left: -5px;
            }
            .year {
              margin-top: 0;
              font-size: 12px;
            }
            .info {
              margin-top: 11px;
              .month_box {
                .month {
                  font-size: 12px;
                }
                p {
                  margin-bottom: 6px;
                  font-size: 12px;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 500px) {
  .section .container_1358 .history_area {
    &::before {
      left: 20px;
    }
    .content {
      padding: 0 20px;
    }
  }
}
</style>
