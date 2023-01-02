<template>
  <form id="questionFormId">
    <input type="hidden" name="_csrf" value="eb7fd389-cf0e-4adc-a145-c857175f449c" />
    <section class="section" data-name="contact_question">
      <p class="bg_text">Q&amp;A</p>
      <div class="container_1076">
        <p class="title" v-html="t('contact.qnaTitle')"></p>
        <p class="text" v-html="t('contact.qnaText')"></p>
        <a class="company_profile" href="https://makevu.me/d355cee78b" target="_blank"
          >{{ t('contact.qnaLink') }} &gt;</a
        >
        <div class="question_box">
          <div class="question_form">
            <label class="title">{{ t('contact.type') }} *</label>
            <div class="animation_question_select_box">
              <ul
                :class="[selectState ? ['animation_question_select', 'active'] : 'animation_question_select']"
                @click="openSelect"
                @mouseleave="closeSelect"
              >
                <li @click="resetType" class="placeholder" :class="{ active: placeholder }">
                  {{ t('contact.typePlaceHolder') }}
                </li>
                <li v-for="i in types" :key="i" @click="selectType(i.type)" :class="{ active: typeNo[i.type] }">
                  {{ i.name }}
                </li>
              </ul>
            </div>
          </div>
          <div class="question_form">
            <label class="title">{{ t('contact.name') }} *</label>
            <input
              id="name"
              name="name"
              class="question_input"
              type="text"
              :placeholder="t('contact.namePlaceHolder')"
              data-name="이름"
              v-model="name"
            />
          </div>
          <div class="question_form">
            <label class="title">{{ t('contact.company') }}</label>
            <input
              id="company"
              name="company"
              class="question_input"
              type="text"
              :placeholder="t('contact.companyPlaceHolder')"
              data-name="회사명"
              v-model="company"
            />
          </div>
          <div class="question_form">
            <label class="title">{{ t('contact.team') }}</label>
            <input
              id="department_position"
              name="department_position"
              class="question_input"
              type="text"
              :placeholder="t('contact.teamPlaceHolder')"
              data-name="부서/직급"
              v-model="team"
            />
          </div>
          <div class="question_form">
            <label class="title">{{ t('contact.tel') }} *</label>
            <input
              id="phone"
              name="phone"
              class="question_input"
              type="text"
              :placeholder="t('contact.telPlaceHolder')"
              data-name="연락처"
              v-model="tel"
              @keydown="testTel"
            />
          </div>
          <div class="question_form">
            <label class="title">{{ t('contact.mail') }} *</label>
            <input
              id="email"
              name="email"
              class="question_input"
              type="text"
              :placeholder="t('contact.mailPlaceHolder')"
              data-name="E-mail"
              v-model="email"
            />
          </div>
          <div class="question_form last">
            <label class="title">{{ t('contact.desc') }} *</label>
            <textarea
              id="content"
              name="content"
              class="question_textarea"
              :placeholder="t('contact.descPlaceHolder')"
              data-name="문의내용"
              v-model="desc"
            ></textarea>
          </div>
          <div class="question_check">
            <input type="checkbox" id="privacy_agree" data-name="개인정보처리방침" v-model="checkPrivacy" />
            <label class="label" for="privacy_agree"></label>
            <label class="text" for="privacy_agree">{{ t('contact.privacyCheck') }}</label>
            <b class="bold_text" @click="modalStore.infoModalOpen">{{ t('contact.privacyLink') }}</b>
          </div>
          <input type="button" class="btn btn_hover" :value="t('common.button.inquery')" @click="sendForm" />
        </div>
      </div>
    </section>
  </form>
</template>
<script setup>
import { ref } from 'vue';
import { useModalStore } from '../../store/modal';
import { useFormStore } from '../../store/form';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
const { t, locale } = useI18n();

const modalStore = useModalStore();
const formStore = useFormStore();
const { types } = storeToRefs(formStore);

const mailReg = new RegExp(
  "([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])"
);
const numReg = new RegExp(/[0-9]/g);
const chaReg = new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g);
const selectState = ref(false);
let type = ref('');
const name = ref('');
const company = ref('');
const team = ref('');
const tel = ref('');
const email = ref('');
const desc = ref('');
const checkPrivacy = ref();
const placeholder = ref(true);
let typeNo = ref({
  1: false,
  2: false,
  3: false,
  4: false,
  5: false
});

//데이터 전송
function sendForm() {
  if (type.value < 1) {
    alert(t('alert.type'));
    return false;
  }
  if (name.value.length < 1 || numReg.test(name.value) || chaReg.test(name.value)) {
    alert(t('alert.name'));
    name.value = '';
    return false;
  }
  if (tel.value == '' || !numReg.test(tel.value)) {
    alert(t('alert.tel'));
    tel.value = '';
    return false;
  }
  if (!mailReg.test(email.value)) {
    alert(t('alert.mail'));
    email.value = '';
    return false;
  }
  if (desc.value == '') {
    alert(t('alert.desc'));
    return false;
  }
  if (!checkPrivacy.value) {
    alert(t('alert.privacy'));
    return false;
  }
  tel.value = tel.value.replace(/[^0-9]/g, '');
  const formData = {
    type: type.value,
    name: name.value.replace(/ /gi, ''),
    company: company.value.replace(/ /gi, ''),
    team: team.value.replace(/ /gi, ''),
    tel: tel.value.replace(/ /gi, ''),
    email: email.value.replace(/ /gi, ''),
    desc: desc.value,
    checkPrivacy: checkPrivacy.value
  };

  //폼 데이터 전송 액션 사용해야함
}

//문의유형 리스트 받아오기
formStore.typeListAct(locale.value);

//문의유형 리스트 열고 닫는 함수
function openSelect() {
  if (selectState.value) {
    selectState.value = false;
  } else {
    selectState.value = true;
  }
}
function closeSelect() {
  selectState.value = false;
}

//문의유형 선택 함수
function selectType(No) {
  type.value = No;
  placeholder.value = false;
  for (let key in typeNo.value) {
    if (key == No) typeNo.value[key] = true;
    else typeNo.value[key] = false;
  }
}
function resetType() {
  type.value = 0;
  if (!placeholder.value) {
    placeholder.value = true;
    for (let key in typeNo.value) {
      typeNo.value[key] = false;
    }
  }
}
</script>
<style scoped lang="scss">
.section {
  width: 100%;
  padding: 100px 0 398px 0;
  background-color: #f9f9f9;
  position: relative;
  .bg_text {
    position: absolute;
    bottom: 0;
    left: 70px;
    font-family: 'GmarketSansBold';
    font-weight: bold;
    font-size: 16.5em;
    line-height: 1.15;
    color: #f1f1f1;
  }
  .container_1076 {
    position: relative;
    p {
      font-family: 'Noto Sans', sans-serif;
      &.title {
        font-weight: bold;
        font-size: 22px;
        line-height: 1.36;
        color: #292929;
        margin-bottom: 10px;
      }
      &.text {
        font-size: 16px;
        line-height: 1.75;
        color: #292929;
        margin-bottom: 53px;
      }
    }
    .company_profile {
      position: relative;
      display: inline-block;
      font-family: 'Noto Sans', sans-serif;
      font-weight: bold;
      font-size: 16px;
      &::after {
        content: '';
        height: 0.5px;
        background: black;
        display: block;
      }
    }
    .question_box {
      position: absolute;
      top: 0;
      right: 0;
      width: 662px;
      height: auto;
      padding: 32px 46px 35px 61px;
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
      background-color: #ffffff;
      box-sizing: border-box;
      .question_form {
        display: flex;
        padding: 6.2px 0;
        border-bottom: 1px solid #ccc;
        border-bottom: 1px dashed #ccc;
        .title {
          font-family: 'Noto Sans', sans-serif;
          font-weight: bold;
          font-size: 16px;
          color: #292929;
          line-height: 1.38;
          width: 91px;
          display: inline-flex;
          align-items: center;
          margin-bottom: 0;
          margin-right: 33px;
          flex-shrink: 0;
          padding-left: 15px;
        }
        .animation_question_select_box {
          width: 100%;
          height: 44px;
          .animation_question_select {
            position: relative;
            width: 100%;
            height: 44px;
            background-color: #f9f9f9;
            cursor: pointer;
            overflow: hidden;
            transition: all 0.5s ease;
            box-sizing: border-box;
            border: 1px solid transparent;
            &.active {
              padding-top: 44px;
              height: auto;
              border: solid 1px #4dacff;
              li {
                opacity: 1;
                height: auto;
                padding: 11px 15px;
                &.active {
                  background-color: #e8e8e8;
                }
              }
            }
            &::before {
              content: '';
              position: absolute;
              top: 15px;
              right: 19px;
              width: 18px;
              height: 15px;
              z-index: 101;
              background-image: url(/assets/images/contact/arrow_bottom.png);
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
            }
            .placeholder {
              position: absolute !important;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
            li {
              width: 100%;
              font-family: 'Noto Sans', sans-serif;
              font-size: 16px;
              color: #5a5a5a;
              opacity: 0;
              height: 0;
              transition: all 0.5s ease;
              box-sizing: border-box;
              padding: 0 15px;
              &.active {
                opacity: 1;
                height: auto;
                transition: background 0.5s ease;
                padding: 11px 15px;
                position: relative;
                z-index: 100;
              }
            }
          }
        }
        .question_input {
          font-family: 'Noto Sans', sans-serif;
          font-size: 16px !important;
          line-height: 1.44 !important;
          color: #5a5a5a;
          width: 100%;
          border: 0;
          padding: 11px 15px;
          background-color: #f9f9f9;
          &::placeholder {
            font-size: 16px;
            line-height: 1.44;
          }
        }
        .question_textarea {
          width: 100%;
          border: 0;
          padding: 18px 15px;
          font-size: 16px !important;
          line-height: 1.44 !important;
          color: #5a5a5a;
          background-color: #f9f9f9;
          min-height: 224px;
          box-sizing: border-box;
          resize: none;
        }
        &.last {
          border-bottom: 0;
          display: block;
          padding: 0;
          margin-bottom: 16px;
          .title {
            margin-top: 11px;
            margin-bottom: 17px;
          }
        }
      }
      .question_check {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 46px;
        input {
          display: none;
        }
        .text {
          font-family: 'Noto Sans', sans-serif;
          font-size: 12px;
          line-height: 1.92;
          color: #969696;
          margin-right: 11px;
          margin-bottom: 0;
        }
        .bold_text {
          font-family: 'Noto Sans', sans-serif;
          font-size: 12px;
          line-height: 1.92;
          color: #292929;
          text-decoration: underline;
          cursor: pointer;
          font-weight: 900;
        }
      }
      .btn {
        width: 100%;
        height: 46px;
        border-radius: 28px;
        border: solid 1px #ec6c00;
        background: transparent;
        color: #ec6c00;
        font-size: 16px !important;
        line-height: 1.38 !important;
        font-family: 'Noto Sans', sans-serif;
        font-weight: bold;
      }
    }
    .label {
      display: inline-block;
      width: 21px;
      height: 21px;
      margin-right: 7.3px;
      cursor: pointer;
      background-image: url(/assets/images/contact/check_off.png);
      background-repeat: no-repeat;
      background-size: 95%;
      background-position: center;
    }
    input[type='checkbox']:checked + .label {
      background-image: url(/assets/images/contact/check_on.png);
    }
  }
}
@media (max-width: 1024px) {
  .section {
    padding: 50px 0;
    .bg_text {
      display: none;
    }
    .container_1076 {
      text-align: center;
      p {
        text-align: center;
        &.title {
          font-size: 12px;
          margin-bottom: 10px;
        }
        &.text {
          font-size: 12px;
          margin-bottom: 10px;
        }
      }
      .company_profile {
        font-size: 12px;
      }
      .question_box {
        position: static;
        text-align: left;
        margin-top: 27px;
        width: 100%;
        padding: 15px 12px;
        .question_form {
          flex-wrap: wrap;
          padding: 10px 0;
          .title {
            width: 100%;
            margin: 0;
            padding: 0;
            padding-bottom: 9px;
            font-size: 12px;
            br {
              display: none;
            }
          }
          .animation_question_select_box .animation_question_select li {
            font-size: 12px;
          }
          .question_input {
            font-size: 12px !important;
            &::placeholder {
              font-size: 12px !important;
            }
          }
          .question_textarea {
            font-size: 12px !important;
          }
        }
        .question_check {
          margin-bottom: 30px;
        }
      }
      .label {
        width: 17px;
        height: 17px;
      }
    }
  }
}
</style>
