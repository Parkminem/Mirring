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
                <li v-for="i in 5" :key="i" @click="selectType(i)" :class="{ active: typeNo[i] }">
                  {{ t(`contact.type0${i}`) }}
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
const { t } = useI18n();

const modalStore = useModalStore();
const formStore = useFormStore();

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
<style></style>
