<template>
  <div id="modal" style="display: block">
    <div class="fade" @click="modalStore.infoModalClose"></div>
    <div class="modal_box">
      <img
        class="close"
        src="/assets/images/contact/close_gray.png"
        title="close"
        alt="close"
        @click="modalStore.infoModalClose"
      />
      <p class="title">{{ t('privacy.Title') }}</p>
      <div class="area">
        <p>
          <span>{{ t('privacy.Desc01') }}</span
          >(<span>{{ t('privacy.Desc02') }}</span
          >)<span>{{ t('privacy.Desc03') }}</span
          >, <span>{{ t('privacy.Desc04') }}</span
          >.
        </p>
        <p><br /></p>
        <p>
          <span>{{ t('privacy.je') }}</span
          >1<span>{{ t('privacy.Sub01Title') }}</span>
        </p>
        <p><br /></p>
        <p>
          1. <span>{{ t('privacy.Sub01-1-1') }}</span
          >, <span>{{ t('privacy.Sub01-1-2') }}</span
          >, <span>{{ t('privacy.Sub01-1-3') }}</span
          >, <span>{{ t('privacy.Sub01-1-4') }}</span
          >, <span>{{ t('privacy.Sub01-1-5') }}</span
          >, <span>{{ t('privacy.Sub01-1-6') }}</span
          >(<span>{{ t('privacy.Sub01-1-7') }}</span
          >)<span>{{ t('privacy.Sub01-1-8') }}</span
          >.<br />2. <span>{{ t('privacy.Sub01-2-1') }}</span
          >, <span>{{ t('privacy.Sub01-2-2') }}</span
          >.<br />3. <span>{{ t('privacy.Sub01-3-1') }}</span
          >, <span>{{ t('privacy.Sub01-3-2') }}</span
          >.<br />4. <span>{{ t('privacy.Sub01-4-1') }}</span
          >. <span>{{ t('privacy.Sub01-4-2') }}</span
          >(http://ideaconcert.com)<span>{{ t('privacy.Sub01-4-3') }}</span
          >.<br />5. <span>{{ t('privacy.Sub01-5-1') }}</span
          >, <span>{{ t('privacy.Sub01-5-2') }}</span
          >, <span>{{ t('privacy.Sub01-5-3') }}</span
          >(http://ideaconcert.com), <span>{{ t('privacy.Sub01-5-4') }}</span> 30<span>{{
            t('privacy.Sub01-5-5')
          }}</span
          >. <span>{{ t('privacy.Sub01-5-6') }}</span
          >, <span>{{ t('privacy.Sub01-5-7') }}</span> 2<span>{{ t('privacy.Sub01-5-8') }} </span>(<span>{{
            t('privacy.Sub01-5-9')
          }}</span
          >.)<span>{{ t('privacy.Sub01-5-10') }}</span> 1<span>{{ t('privacy.Sub01-5-11') }}</span
          >.
        </p>
        <p><br /></p>
        <p><br /></p>
        <p>
          <span>{{ t('privacy.je') }}</span
          >2<span>{{ t('privacy.Sub02Title1') }}</span
          >/<span>{{ t('privacy.Sub02Title2') }}</span>
        </p>
        <p>
          1. <span>{{ t('privacy.Sub02-1-1') }}</span
          >, <span>{{ t('privacy.Sub02-1-2') }}</span
          >, <span>{{ t('privacy.Sub02-1-3') }}</span
          >.<br />2. <span>{{ t('privacy.Sub02-2-1') }}</span
          >, <span>{{ t('privacy.Sub02-2-2') }}</span
          >, <span>{{ t('privacy.Sub02-2-3') }}</span
          >, <span>{{ t('privacy.Sub02-2-4') }}</span
          >(<span>{{ t('privacy.Sub02-2-5') }}</span
          >)•<span>{{ t('privacy.Sub02-2-6') }}</span
          >(<span>{{ t('privacy.Sub02-2-7') }}</span
          >), <span>{{ t('privacy.Sub02-2-8') }}</span
          >. <span>{{ t('privacy.Sub02-2-9') }}</span
          >, <span>{{ t('privacy.Sub02-2-10') }}</span
          >.<br />3. <span>{{ t('privacy.Sub02-3-1') }}</span
          >(<span>{{ t('privacy.Sub02-3-2') }}</span
          >)<span>{{ t('privacy.Sub02-3-3') }}</span
          >, <span>{{ t('privacy.Sub02-3-4') }}</span
          >, <span>{{ t('privacy.Sub02-3-5') }}</span
          >(<span>{{ t('privacy.Sub02-3-6') }}</span
          >)<span>{{ t('privacy.Sub02-3-7') }}</span
          >.<br />4. <span>{{ t('privacy.Sub02-4-1') }}</span
          >.<br /><span>{{ t('privacy.ga') }}</span
          >. <span>{{ t('privacy.Sub02-4-2') }}</span
          ><br /><span>{{ t('privacy.na') }}</span
          >. <span>{{ t('privacy.Sub02-4-3') }}</span
          ><br /><span>{{ t('privacy.da') }}</span
          >.
          <span>{{ t('privacy.Sub02-4-4') }}</span>
        </p>
        <p>
          [<span>{{ t('privacy.Sub02-4-5') }}</span
          >]
        </p>
        <table width="601" cellpadding="5" cellspacing="0">
          <colgroup>
            <col width="102" />
            <col width="477" />
          </colgroup>
          <thead>
            <tr>
              <td width="102" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.Sub02-4-5-head01') }}</span>
                </p>
              </td>
              <td width="477" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.Sub02-4-5-head02') }}</span>
                </p>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="102" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.Sub02-4-5-body01') }}</span>
                </p>
              </td>
              <td width="477" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.Sub02-4-5-body01-01') }}</span
                  >, <span>{{ t('privacy.Sub02-4-5-body01-02') }}</span
                  >, <span>{{ t('privacy.Sub02-4-5-body01-03') }}</span
                  >/<span>{{ t('privacy.Sub02-4-5-body01-04') }}</span
                  >, <span>{{ t('privacy.Sub02-4-5-body01-05') }}</span
                  >, E-mail<span>{{ t('privacy.Sub02-4-5-body01-06') }}</span>
                </p>
              </td>
            </tr>
            <tr>
              <td width="102" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.Sub02-4-5-body02') }}</span>
                </p>
              </td>
              <td width="477" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.Sub02-4-5-body02-01') }}</span
                  >/<span>{{ t('privacy.Sub02-4-5-body02-02') }}</span
                  >, <span>{{ t('privacy.Sub02-4-5-body02-03') }}</span
                  >, <span>{{ t('privacy.Sub02-4-5-body02-04') }}</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p><br /></p>
        <p><br /></p>
        <p>
          <span>{{ t('privacy.je') }}</span
          >3<span>{{ t('privacy.Sub03Title') }}</span>
        </p>
        <p>
          <span>{{ t('privacy.Sub03-1-1') }}</span
          >.<br /><span>{{ t('privacy.ga') }}</span
          >. <span>{{ t('privacy.Sub03-1-2') }}</span
          >/<span>{{ t('privacy.Sub03-1-3') }}</span>
        </p>
        <p><br /></p>
        <p><br /></p>
        <p>
          <span>{{ t('privacy.je') }}</span
          >4<span>{{ t('privacy.Sub04Title') }}</span>
        </p>
        <p>
          1.
          <span>{{ t('privacy.Sub04-1-1') }}</span
          >.<br /><span>{{ t('privacy.ga') }}</span
          >. <span>{{ t('privacy.Sub04-1-2') }}</span
          >(<span>{{ t('privacy.Sub04-1-3') }}</span> ~ <span>{{ t('privacy.Sub04-1-4') }}</span
          >)<br /><span>{{ t('privacy.na') }}</span
          >. <span>{{ t('privacy.Sub04-1-5') }}</span
          >, <span>{{ t('privacy.Sub04-1-6') }}</span> 6<span>{{ t('privacy.Sub04-1-7') }}</span
          ><br /><span>{{ t('privacy.da') }}</span
          >. <span>{{ t('privacy.Sub04-1-8') }}</span
          >/<span>{{ t('privacy.Sub04-1-9') }}</span
          >/<span>{{ t('privacy.Sub04-1-10') }}</span
          >(<span>{{ t('privacy.Sub04-1-11') }}</span
          >, <span>{{ t('privacy.Sub04-1-12') }}</span
          >)<br />2. <span>{{ t('privacy.Sub04-2-1') }}</span
          >, <span>{{ t('privacy.Sub04-2-2') }}</span
          >, <span>{{ t('privacy.Sub04-2-3') }}</span
          >, <span>{{ t('privacy.Sub04-2-4') }}</span
          >, <span>{{ t('privacy.Sub04-2-5') }}</span
          >, <span>{{ t('privacy.Sub04-2-6') }}</span
          >.
        </p>
        <table width="4369" cellpadding="5" cellspacing="0">
          <colgroup>
            <col width="785" />
            <col width="2711" />
            <col width="840" />
          </colgroup>
          <thead>
            <tr>
              <td width="785" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p><span>보존 근거</span></p>
              </td>
              <td width="2711" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p><span>보존 대상</span></p>
              </td>
              <td width="840" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p><span>보존 기간</span></p>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="2" width="785" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p><span>상법</span></p>
              </td>
              <td width="2711" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p><span>상업장부와 영업에 관한 중요서류에 포함된 개인정보</span></p>
              </td>
              <td width="840" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>10<span>년</span></p>
              </td>
            </tr>
            <tr>
              <td width="2711" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p><span>전표 또는 이와 유사한 서류에 포함된 개인정보</span></p>
              </td>
              <td width="840" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>5<span>년</span></p>
              </td>
            </tr>
            <tr>
              <td width="785" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p><span>국세기본법</span></p>
              </td>
              <td width="2711" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>성명</span>, <span>주민번호</span>, <span>전화번호</span>, <span>청구지 주소</span>,
                  <span>요금납부내역 등 거래에 관한 장부 및 증거서류</span>
                </p>
              </td>
              <td width="840" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>5<span>년</span></p>
              </td>
            </tr>
            <tr>
              <td rowspan="2" width="785" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p><span>통신비밀보호법</span></p>
              </td>
              <td width="2711" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>통신사실확인자료 제공에 필요한 성명</span>, <span>주민번호</span>,
                  <span>전화번호 및 가입자의 전기통신일시</span>, <span>전기통신개시ㆍ종료시간</span>,
                  <span>발ㆍ착신 통신번호 등 상대방의 가입자번호</span>, <span>사용도수</span>,
                  <span>발신기지국의 위치정보</span>
                </p>
              </td>
              <td width="840" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  12<span>개월</span><br /><span>단</span>, <span>시외</span>/<span>시내전화 역무와 관련된 자료 </span>:
                  6<span>개월</span>
                </p>
              </td>
            </tr>
            <tr>
              <td width="2711" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>컴퓨터통신 또는 인터넷의 로그기록자료</span>,
                  <span>정보통신기기의 위치를 확인할 수 있는 접속지의 추적자료</span>
                </p>
              </td>
              <td width="840" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>3<span>개월</span></p>
              </td>
            </tr>
            <tr>
              <td rowspan="4" width="785" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p><span>전자상거래 등에서의소비자보호에 관한 법률</span></p>
              </td>
              <td width="2711" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p><span>계약 또는 청약철회 등에 관한 기록</span></p>
              </td>
              <td width="840" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>5<span>년</span></p>
              </td>
            </tr>
            <tr>
              <td width="2711" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p><span>대금결제 및 재화 등의 공급에 관한 기록</span></p>
              </td>
              <td width="840" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>5<span>년</span></p>
              </td>
            </tr>
            <tr>
              <td width="2711" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p><span>소비자의 불만 또는 분쟁처리에 관한 기록</span></p>
              </td>
              <td width="840" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>3<span>년</span></p>
              </td>
            </tr>
            <tr>
              <td width="2711" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p><span>표시</span>/<span>광고에 관한 기록</span></p>
              </td>
              <td width="840" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>6<span>개월</span></p>
              </td>
            </tr>
            <tr>
              <td width="785" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p><span>신용정보의 이용 및 보호에 관한 법률</span></p>
              </td>
              <td width="2711" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p><span>신용정보의 수집</span>/<span>처리 및 이용 등에 관한 기록</span></p>
              </td>
              <td width="840" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>3<span>년</span></p>
              </td>
            </tr>
          </tbody>
        </table>
        <p><br /></p>
        <p><br /></p>
        <p><span>제</span>5<span>조 개인정보의 파기절차 및 방법</span></p>
        <p>
          <span>회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다</span>.
          <span>파기절차 및 방법은 다음과 같습니다</span>.<br />1. <span>파기절차</span><br /><span>가</span>.
          <span>고객님의 개인정보는 수집 및 이용목적이 달성된 후 별도의 </span>DB<span>로 옮겨져</span>(<span
            >종이의 경우 별도의 서류함</span
          >) <span>내부 방침 및 기타 관련 법령에 의한 정보보호 사유</span>(<span>보유 및 이용기간 참조</span>)<span
            >에 따라 일정 기간 저장된 후 파기됩니다</span
          >.<br /><span>나</span>. <span>별도 </span>DB<span
            >로 옮겨진 개인정보는 법률에 의한 경우와 재가입시 가입비 면제 대상여부를 확인하는 경우가 아니고서는 보유되는
            이외의 다른 목적으로 이용되지 않습니다</span
          >.<br /><span>다</span>. <span>앱을 삭제하더라도 개인정보가 아이디어 콘서트 회원정보에 저장되어 있으며</span>,
          <span>개인정보 삭제를 원하실 경우 회원 탈퇴를 별도로 요청해야 합니다</span>.<br />2. <span>파기방법</span
          ><br /><span>가</span>. <span>종이</span>(<span>서면</span>)<span>에 작성•출력된 개인정보 </span>:
          <span>분쇄하거나 소각 등의 방법으로 파기</span><br /><span>나</span>. DB
          <span>등 전자적 파일 형태로 저장된 개인정보 </span>: <span>재생할 수 없는 기술적 방법으로 삭제</span>
        </p>
        <p><br /></p>
        <p><br /></p>
        <p><span>제</span>6<span>조 개인정보 처리의 위탁</span></p>
        <p>
          <span
            >회사는 서비스 제공에 관한 계약을 이행하고 고객님의 편의 증진 등을 위하여 개인정보 처리업무를 외부
            전문업체에게 위탁하고 있으며</span
          >, <span>수탁자에 대해서는 “위</span>.<span>수탁계약서” 등을 통하여 관련 법규 및 지침의 준수</span>,
          <span>정보보호 및 비밀유지</span>, <span>제</span>3<span>자 제공 금지</span>, <span>사고 시 책임부담</span>,
          <span>위탁기간 종료 즉시 개인정보의 반납</span>/<span>파기 의무 등을 규정하여 관리하고 있습니다</span>.
        </p>
        <p><span>ㅇ 개인정보 처리업무 수탁자 및 위탁 업무 내용</span></p>
        <table width="595" cellpadding="5" cellspacing="0">
          <colgroup>
            <col width="111" />
            <col width="462" />
          </colgroup>
          <thead>
            <tr>
              <td width="111" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p><span>수탁사</span></p>
              </td>
              <td width="462" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p><span>위탁업무내용</span></p>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="111" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>-</p>
              </td>
              <td width="462" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>서비스 운영 및 고객상담업무 위탁운영</span><br /><span>시스템 구축 및 유지보수</span>, KREAM
                  <span>부가서비스 제공</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>※ <span>수탁사 리스트는 해당 서비스 변경 및 계약기간에 따라 변경될 수 있습니다</span>.</p>
        <p><br /></p>
        <p><br /></p>
        <p><span>제</span>7<span>조 개인정보 자동 수집장치의 설치 운영 및 그 거부에 관한 사항</span></p>
        <p>
          <span>회사는 홈페이지 운영에 있어 필요 시 고객님의 정보를 찾아내고 저장하는 </span
          >'<span>쿠키</span>(Cookie)'<span>를 운용합니다</span>.
          <span
            >쿠키는 회사의 웹사이트를 운영하는데 이용되는 서버가 고객님의 브라우저에 보내는 아주 작은 텍스트 파일로서
            고객님의 컴퓨터 하드디스크에 저장됩니다</span
          >.
          <span
            >고객님께서는 웹브라우저의 보안 정책을 통해 쿠키에 의한 정보수집의 허용 거부 여부를 결정하실 수
            있습니다</span
          >.<br />1. <span>쿠키에 의해 수집되는 정보 및 이용 목적</span><br /><span>가</span>. <span>수집 정보 </span>:
          <span>접속</span>IP, <span>접속로그</span>, <span>이용 컨텐츠 등 서비스 이용정보</span><br /><span>나</span>.
          <span>이용목적</span><br /><span>ㅇ 고객님의 관심분야에 따라 차별화된 정보를 제공</span><br /><span
            >ㅇ 회원과 비회원의 접속 빈도나 방문 시간</span
          >, <span>로그인 유무</span>,
          <span>서비스 이용 형태를 분석하여 개인 이력 정보를 제공하며 서비스 개편의 척도로 활용합니다</span>.<br />2.
          <span>고객님은 쿠키 설치에 대한 선택권을 가지고 있습니다</span>.
          <span>따라서 웹브라우저에서 옵션을 설정함으로써 쿠키에 의한 정보 수집 수준의 선택을 조정하실 수 있습니다</span
          >.<br /><span>가</span>. <span>웹브라우저의 </span>[<span>도구</span>]<span>메뉴 </span
          >[<span>인터넷옵션</span>]-&gt;[<span>개인정보</span>]<span
            >에서 쿠키에 의한 정보 수집 수준을 정할 수 있습니다</span
          >.<br /><span>나</span>. <span>위에 제시된 메뉴를 통해 쿠키가 저장될 때마다 확인을 하거나</span>,
          <span>아니면 모든 쿠키의 저장을 거부할 수도 있습니다</span>. <span>단</span>,
          <span>고객님께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다</span>.
        </p>
        <p><br /></p>
        <p><br /></p>
        <p><span>제</span>8<span>조 개인정보의 기술적</span>, <span>관리적 보호</span></p>
        <p>
          <span>회사는 고객님의 개인정보가 분실</span>, <span>유출</span>,
          <span
            >위조•변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적•관리적 대책을 마련하고
            있습니다</span
          >.<br /><br />
        </p>
        <p>
          [<span>기술적 보호대책</span>]<br />1. <span>고객님의 개인정보를 암호화하여 저장하며</span>,
          <span
            >정보통신망을 통해 고객님의 개인정보 및 인증정보를 송수신 하는 경우에는 안전한 보안서버 구축 등의 조치를
            통해 암호화 하여 보호하고 있습니다</span
          >.<br />2.
          <span>백신 소프트웨어를 이용하여 컴퓨터바이러스 등에 의한 피해를 방지하기 위한 조치를 취하고 있습니다</span>.
          <span
            >백신 소프트웨어는 주기적으로 업데이트되며 갑작스런 바이러스가 출현할 경우 백신이 나오는 즉시 이를
            도입</span
          >, <span>적용함으로써 개인정보가 침해되는 것을 방지하고 있습니다</span>.<br />3.
          <span>고객님의 개인정보에 대한 불법적인 접근을 차단하기 위해</span>,
          <span>외부로부터 접근이 통제된 구역에 시스템을 설치하고</span>,
          <span>침입을 차단하는 장치를 이용하고 있으며</span>, <span>아울러 침입탐지시스템을 설치하여 </span>24<span
            >시간 침입을 감시하고 있습니다</span
          >.<br /><br />[<span>관리적 보호대책</span>]<br />1.
          <span
            >회사는 고객님의 개인정보를 안전하게 처리하기 위한 내부관리계획을 마련하여 소속 직원이 이를 숙지하고
            준수하도록 하고 있습니다</span
          >.<br />2.
          <span>회사는 고객님의 개인정보를 처리할 수 있는 자를 최소한으로 제한하고 접근 권한을 관리하며</span>,
          <span
            >새로운 보안 기술 습득 및 개인정보보호 의무 등에 관해 정기적인 사내 교육과 외부 위탁교육을 통하여 법규 및
            정책을 준수할 수 있도록 하고 있습니다</span
          >. <span>고객님의 개인정보를 처리하는 자는 다음과 같습니다</span>.<br /><span>가</span>.
          <span>고객님을 직•간접적으로 상대하여 마케팅 업무를 수행하는 자</span><br /><span>나</span>.
          <span>개인정보보호책임자 및 개인정보보호담당자 등 개인정보 보호 및 개인정보보호 업무를 담당하는 자</span
          ><br /><span>다</span>. <span>기타 업무상 개인정보의 처리가 불가피한 자</span><br />3.
          <span>전 임직원이 정보보호서약서에 서명하게 함으로써 직원에 의한 정보</span>(<span>개인정보 포함</span>)<span
            >유출을 사전에 방지하고</span
          >,
          <span
            >수시로 개인정보보호 의무를 상기시키며 준수 여부를 감사하기 위한 내부 절차를 마련하여 시행하고
            있습니다</span
          >.<br />4. <span>개인정보 취급자의 업무 인수인계는 보안이 유지된 상태에서 철저하게 이루어지도록 하여</span>,
          <span>입사 및 퇴사 후 개인정보 침해사고에 대한 책임을 명확하게 규정하고 있습니다</span>.<br />5.
          <span>전산실 및 자료보관실 등을 통제구역으로 설정하여 출입을 통제합니다</span>.<br />6.
          <span
            >회사는 고객님 개인의 실수나 기본적인 인터넷의 위험성 때문에 일어나는 일들에 대해 책임을 지지 않습니다</span
          >. <span>고객님의 개인정보를 보호하기 위해서 자신의 </span>ID<span
            >와 비밀번호를 철저히 관리하고 책임을 져야 합니다</span
          >.
        </p>
        <p><br /></p>
        <p><br /></p>
        <p><span>제</span>9<span>조 개인정보 보호책임 부서 및 연락처</span></p>
        <p>
          <span
            >회사는 고객님의 개인정보를 보호하고 개인정보와 관련한 불만 및 문의사항을 처리하기 위하여 아래와 같이 관련
            부서를 지정하여 운영하고 있습니다</span
          >. <span>또한 고객님의 의견을 매우 소중하게 생각합니다</span>.
          <span
            >고객님께서 회사 서비스의 개인정보 관련 문의사항이 있을 경우 아래 개인정보 보호책임자 및 담당자에게
            문의하시면 신속하고 성실하게 답변을 드리겠습니다</span
          >.<br /><br />1. <span>개인정보 보호책임 부서 및 연락처</span><br /><span>가</span>.
          <span>아이디어 콘서트 개인정보보호책임자 </span>: <span>㈜아이디어 콘서트 연구개발팀 </span>/
          <span>이호진 팀장</span><br /><span>ㅇ 이메일 </span>: hojinjava@ideaconcert.com<br /><span>나</span>.
          <span>아이디어 콘서트 개인정보보호담당자 </span>: <span>㈜아이디어 콘서트 연구개발팀 </span>/
          <span>안정희</span><br /><span>ㅇ 이메일 </span>: ajhoo1004@ideaconcert.com<br />2.
          <span>개인정보 보호책임자 역할</span><br /><span>가</span>.
          <span>개인정보보호 관련 주요 지침</span>/<span>정책</span>/<span>제도 수립 시행</span><br /><span>나</span>.
          <span>개인정보 유출</span>, <span>오남용 방지를 위한 내부통제시스템 구축</span><br /><span>다</span>.
          <span>개인정보보호 분야 관리실태 감사 및 지도점검</span><br /><span>라</span>.
          <span>개인정보보호 교육 계획 수립 시행</span><br /><span>마</span>. <span>개인정보처리방침 수립 개정</span
          ><br /><span>바</span>. <span>개인정보 침해사고 예방 대응</span><br /><span>사</span>.
          <span>기타 기타정보보호를 위하여 필요한 업무</span>
        </p>
        <p><br /></p>
        <p><br /></p>
        <p><span>제</span>10<span>조 개인정보 열람청구</span></p>
        <p>
          <span>회사는 고객님의 개인정보 열람 청구를 위하여 아래와 같이 관련 부서를 지정하여 운영하고 있습니다</span>.
          <span
            >고객님께서 회사 서비스에 개인정보 열람을 청구하실 경우 아래 부서 담당자에게 문의하시면 신속하고 성실하게
            답변 드리겠습니다</span
          >.<br /><br />[<span>아이디어 콘서트 개인정보 열람청구 접수∙처리 부서</span>]<br /><span>가</span>.
          <span>부서명 </span>: <span>서비스 기획</span><br /><span>나</span>. <span>담당자 </span>: <span>박은별</span
          ><br /><span>다</span>. <span>연락처 </span>: info@idaeconcert.com
        </p>
        <p><br /></p>
        <p><br /></p>
        <p><br /></p>
        <p><span>제</span>11<span>조</span>. <span>권익침해 구제방법</span></p>
        <p>
          <span>기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다</span>.<br />1.
          <span>개인정보 침해신고센터</span>(<span>한국인터넷진흥원 운영</span>)<br /><span>가</span>.
          <span>소관업무 </span>: <span>개인정보 침해사실 신고</span>, <span>상담 신청</span><br /><span>나</span>.
          <span>홈페이지</span>/<span>전화 </span>: http://privacy.kisa.or.kr / (<span>국번없이</span>)118<br />2.
          <span>개인정보 분쟁조정위원회</span><br /><span>가</span>. <span>소관업무 </span>:
          <span>개인정보 분쟁조정신청</span>,<span>집단분쟁조정</span>(<span>민사적 해결</span>)<br /><span>나</span>.
          <span>홈페이지</span>/<span>전화 </span>: www.kopico.go.kr/(<span>국번없이</span>)1833-6972<br />3.
          <span>대검찰청 사이버수사과 </span>: www.spo.go.kr / (<span>국번없이</span>) 1301<br />4.
          <span>경찰청 사이버안전국 </span>: cyberbureau.police.go.kr / (<span>국번없이</span>) 182
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useModalStore } from '../../store/modal';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const modalStore = useModalStore();
</script>
