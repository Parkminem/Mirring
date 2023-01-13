<template>
  <footer id="footer">
    <div class="container_1076">
      <p class="company">{{ t('common.footer.company') }}</p>
      <p class="address">{{ t('common.footer.pangyo') }}</p>
      <p class="address">{{ t('common.footer.yangjea') }}</p>
      <p class="address">{{ t('common.footer.jeju') }}</p>
      <ul class="contact_info">
        <li class="tel"><b>Tel</b><span class="country_number">070-8825-5004</span></li>
        <li class="mail"><b>e-Mail</b><span>info@ideaconcert.com</span></li>
      </ul>
      <p class="copyright"><span onclick="location.href='/admin'"></span>{{ t('common.footer.copyright') }}</p>
      <div class="family_site">
        <div class="trick_box">
          <ul class="link_box">
            <li>
              <a href="https://www.youtube.com/channel/UChWHJjTGDc4314owWJ7KGCw" target="_blank">Youtube</a>
            </li>
          </ul>
          <div class="hover_box">
            <span>Family sites</span>
            <div class="arrow"></div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped lang="scss">
#footer {
  width: 100%;
  background-color: #292929;
  padding: 27px 0 37.5px 0;
  font-family: 'Noto Sans', sans-serif;
  color: #d2d2d2;
  .container_1076 {
    position: relative;
    p {
      font-size: 14px;
      line-height: 1.36;
      &.company {
        font-weight: bold;
        margin-bottom: 10px;
      }
      &.address {
        margin-bottom: 9.5px;
      }
    }
    .contact_info {
      display: flex;
      margin-bottom: 30px;
      li {
        &.tel {
          margin-right: 47px;
        }
        b {
          font-weight: bold;
          margin-right: 9px;
        }
      }
    }
    .family_site {
      position: absolute;
      top: 60px;
      right: 0;
      .trick_box {
        position: absolute;
        bottom: 0;
        right: 0;
        border: solid 2px #969696;
        width: 138px;
        cursor: pointer;
        &:hover {
          background-color: #fff;
          .link_box {
            height: 32px;
            li a {
              opacity: 1;
              color: #292929;
            }
          }
          .hover_box {
            span {
              color: #292929;
            }
            .arrow {
              transform: rotateZ(180deg);
              background-image: url('@/assets/images/common/arrow_up_black.png');
            }
          }
        }
        .link_box {
          height: 0;
          transition: height 0.25s ease;
          li a {
            display: flex;
            opacity: 0;
            align-items: center;
            padding: 0 10px;
            height: 32px;
            font-size: 14px;
          }
        }
        .hover_box {
          display: flex;
          align-items: center;
          width: 138px;
          height: 32px;
          padding: 0 10px;
          box-sizing: border-box;
          span {
            line-height: 1.36;
            margin-right: 24px;
            font-size: 14px;
          }
          .arrow {
            width: 9px;
            height: 7px;
            transition: transform 0.25s ease;
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            background-image: url('@/assets/images/common/arrow_up_gray.png');
          }
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  #footer {
    padding: 32px 0 30.5px 0;
    .container_1076 {
      text-align: center;
      p {
        font-size: 12px;
      }
      .contact_info {
        display: block;
        margin-bottom: 13.5px;
        .tel {
          margin-bottom: 13px;
        }
      }
      .family_site .trick_box {
        display: none;
      }
    }
  }
}
@media (max-width: 500px) {
  #footer .container_1076 {
    text-align: left;
  }
}
</style>
