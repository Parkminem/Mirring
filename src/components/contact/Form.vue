<template>
  <form id="questionFormId">
    <input type="hidden" name="_csrf" value="eb7fd389-cf0e-4adc-a145-c857175f449c" />
    <section class="section" data-name="contact_question">
      <p class="bg_text">Q&amp;A</p>
      <div class="container_1076">
        <p class="title">
          아이디어 콘서트에<br />
          궁금한 점이 있으신가요?
        </p>
        <p class="text">
          문의 글을 작성해주시면 작성한 메일 주소로<br />
          빠른 시일 내에 답변 드리겠습니다.
        </p>
        <a class="company_profile" href="https://makevu.me/d355cee78b" target="_blank">회사소개서 보기 &gt;</a>
        <div class="question_box">
          <div class="question_form">
            <label class="title">문의유형 *</label>
            <!-- <select id="select_question_type" name="question_type_pk" class="question_select" data-name="문의유형">
              <option value="0" selected="">문의유형을 선택하세요.</option>
              <option value="1">데이터 가공</option>
              <option value="2">사업 제휴 및 제안</option>
              <option value="3">웹툰, 콘텐츠 관련</option>
              <option value="4">채용관련</option>
              <option value="5">기타</option>
            </select> -->
            <div class="animation_question_select_box">
              <ul
                :class="[selectState ? ['animation_question_select', 'active'] : 'animation_question_select']"
                @click="openSelect"
              >
                <li data-value="0" @click="type = 0" class="placeholder active">문의유형을 선택하세요.</li>
                <li data-value="1" @click="type = 1">데이터 가공</li>
                <li data-value="2" @click="type = 2">사업 제휴 및 제안</li>
                <li data-value="3" @click="type = 3">웹툰, 콘텐츠 관련</li>
                <li data-value="4" @click="type = 4">채용관련</li>
                <li data-value="5" @click="type = 5">기타</li>
              </ul>
            </div>
          </div>
          <div class="question_form">
            <label class="title">이름 *</label>
            <input
              id="name"
              name="name"
              class="question_input"
              type="text"
              placeholder="담당자 성함을 입력하세요."
              data-name="이름"
              v-model="name"
            />
          </div>
          <div class="question_form">
            <label class="title">회사명</label>
            <input
              id="company"
              name="company"
              class="question_input"
              type="text"
              placeholder="회사명을 입력하세요."
              data-name="회사명"
              v-model="company"
            />
          </div>
          <div class="question_form">
            <label class="title">부서/직급</label>
            <input
              id="department_position"
              name="department_position"
              class="question_input"
              type="text"
              placeholder="부서/직급을 입력하세요."
              data-name="부서/직급"
              v-model="team"
            />
          </div>
          <div class="question_form">
            <label class="title">연락처 *</label>
            <input
              id="phone"
              name="phone"
              class="question_input"
              type="text"
              placeholder="연락처를 '-' 없이 입력하세요."
              data-name="연락처"
              v-model="tel"
              @keydown="testTel"
            />
          </div>
          <div class="question_form">
            <label class="title">E-mail *</label>
            <input
              id="email"
              name="email"
              class="question_input"
              type="text"
              placeholder="E-mail 을 입력하세요."
              data-name="E-mail"
              v-model="email"
            />
          </div>
          <div class="question_form last">
            <label class="title">문의내용 *</label>
            <textarea
              id="content"
              name="content"
              class="question_textarea"
              placeholder="문의하실 내용을 입력하세요."
              data-name="문의내용"
              v-model="desc"
            ></textarea>
          </div>
          <div class="question_check">
            <input type="checkbox" id="privacy_agree" data-name="개인정보처리방침" v-model="checkPrivacy" />
            <label class="label" for="privacy_agree"></label>
            <label class="text" for="privacy_agree">개인정보처리방침에 동의합니다.</label>
            <b class="bold_text" @click="modalStore.infoModalOpen">전문보기</b>
          </div>
          <input type="button" class="btn btn_hover" value="문의 신청하기" @click="sendForm" />
        </div>
      </div>
    </section>
  </form>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import clickEvent from '../../util/clickEvent';
import { useModalStore } from '../../store/modal';
import { useFormStore } from '../../store/form';

const modalStore = useModalStore();
const formStore = useFormStore();

const mailReg = new RegExp(
  "([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])"
);
const selectState = ref(false);
let type = ref('');
const name = ref('');
const company = ref('');
const team = ref('');
const tel = ref('');
const email = ref('');
const desc = ref('');
const checkPrivacy = ref();

onMounted(() => {
  clickEvent.settingQuestionSelectByClick();
});

//데이터 전송
function sendForm() {
  if (type.value < 1) {
    alert('문의유형을 입력해주세요.');
    return false;
  }
  if (name.value.length < 1) {
    alert('이름을 입력해주세요.');
    return false;
  }
  if (tel.value == '') {
    alert('연락처를 입력해주세요.');
    return false;
  }
  if (!mailReg.test(email.value)) {
    alert('이메일을 입력해주세요.');
    return false;
  }
  if (desc.value == '') {
    alert('문의내용을 입력해주세요.');
    return false;
  }
  if (!checkPrivacy.value) {
    alert('개인정보처리방침에 동의해주세요.');
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
  console.log(formData);

  //폼 데이터 전송 액션 사용해야함
}

function openSelect() {
  if (selectState.value) {
    selectState.value = false;
  } else {
    selectState.value = true;
  }
}
</script>
<style></style>
