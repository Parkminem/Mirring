<template>
  <div id="modal" style="display: block">
    <div class="fade" @click="modalStore.infoModalClose"></div>
    <div class="modal_box">
      <img
        class="close"
        src="@/assets/images/contact/close_gray.png"
        title="close"
        alt="close"
        @click="modalStore.infoModalClose"
      />
      <p class="title">{{ t('privacy.title') }}</p>
      <div class="area">
        <p>
          <span>{{ t('privacy.desc01') }}</span
          >(<span>{{ t('privacy.desc02') }}</span
          >)<span>{{ t('privacy.desc03') }}</span
          >, <span>{{ t('privacy.desc04') }}</span
          >.
        </p>
        <p><br /></p>
        <p>
          <span>{{ t('privacy.je') }}</span
          >1<span>{{ t('privacy.sub01Title') }}</span>
        </p>
        <p><br /></p>
        <p>
          1. <span>{{ t('privacy.sub01-1-1') }}</span
          >, <span>{{ t('privacy.sub01-1-2') }}</span
          >, <span>{{ t('privacy.sub01-1-3') }}</span
          >, <span>{{ t('privacy.sub01-1-4') }}</span
          >, <span>{{ t('privacy.sub01-1-5') }}</span
          >, <span>{{ t('privacy.sub01-1-6') }}</span
          >(<span>{{ t('privacy.sub01-1-7') }}</span
          >)<span>{{ t('privacy.sub01-1-8') }}</span
          >.<br />2. <span>{{ t('privacy.sub01-2-1') }}</span
          >, <span>{{ t('privacy.sub01-2-2') }}</span
          >.<br />3. <span>{{ t('privacy.sub01-3-1') }}</span
          >, <span>{{ t('privacy.sub01-3-2') }}</span
          >.<br />4. <span>{{ t('privacy.sub01-4-1') }}</span
          >. <span>{{ t('privacy.sub01-4-2') }}</span
          >(http://ideaconcert.com)<span>{{ t('privacy.sub01-4-3') }}</span
          >.<br />5. <span>{{ t('privacy.sub01-5-1') }}</span
          >, <span>{{ t('privacy.sub01-5-2') }}</span
          >, <span>{{ t('privacy.sub01-5-3') }}</span
          >(http://ideaconcert.com), <span>{{ t('privacy.sub01-5-4') }}</span> 30<span>{{
            t('privacy.sub01-5-5')
          }}</span
          >. <span>{{ t('privacy.sub01-5-6') }}</span
          >, <span>{{ t('privacy.sub01-5-7') }}</span> 2<span>{{ t('privacy.sub01-5-8') }} </span>(<span>{{
            t('privacy.sub01-5-9')
          }}</span
          >.)<span>{{ t('privacy.sub01-5-10') }}</span> 1<span>{{ t('privacy.sub01-5-11') }}</span
          >.
        </p>
        <p><br /></p>
        <p><br /></p>
        <p>
          <span>{{ t('privacy.je') }}</span
          >2<span>{{ t('privacy.sub02Title1') }}</span
          >/<span>{{ t('privacy.sub02Title2') }}</span>
        </p>
        <p>
          1. <span>{{ t('privacy.sub02-1-1') }}</span
          >, <span>{{ t('privacy.sub02-1-2') }}</span
          >, <span>{{ t('privacy.sub02-1-3') }}</span
          >.<br />2. <span>{{ t('privacy.sub02-2-1') }}</span
          >, <span>{{ t('privacy.sub02-2-2') }}</span
          >, <span>{{ t('privacy.sub02-2-3') }}</span
          >, <span>{{ t('privacy.sub02-2-4') }}</span
          >(<span>{{ t('privacy.sub02-2-5') }}</span
          >)•<span>{{ t('privacy.sub02-2-6') }}</span
          >(<span>{{ t('privacy.sub02-2-7') }}</span
          >), <span>{{ t('privacy.sub02-2-8') }}</span
          >. <span>{{ t('privacy.sub02-2-9') }}</span
          >, <span>{{ t('privacy.sub02-2-10') }}</span
          >.<br />3. <span>{{ t('privacy.sub02-3-1') }}</span
          >(<span>{{ t('privacy.sub02-3-2') }}</span
          >)<span>{{ t('privacy.sub02-3-3') }}</span
          >, <span>{{ t('privacy.sub02-3-4') }}</span
          >, <span>{{ t('privacy.sub02-3-5') }}</span
          >(<span>{{ t('privacy.sub02-3-6') }}</span
          >)<span>{{ t('privacy.sub02-3-7') }}</span
          >.<br />4. <span>{{ t('privacy.sub02-4-1') }}</span
          >.<br /><span>{{ t('privacy.ga') }}</span
          >. <span>{{ t('privacy.sub02-4-2') }}</span
          ><br /><span>{{ t('privacy.na') }}</span
          >. <span>{{ t('privacy.sub02-4-3') }}</span
          ><br /><span>{{ t('privacy.da') }}</span
          >.
          <span>{{ t('privacy.sub02-4-4') }}</span>
        </p>
        <p>
          [<span>{{ t('privacy.sub02-4-5') }}</span
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
                  <span>{{ t('privacy.sub02-4-5-head01') }}</span>
                </p>
              </td>
              <td width="477" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.sub02-4-5-head02') }}</span>
                </p>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="102" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.sub02-4-5-body01') }}</span>
                </p>
              </td>
              <td width="477" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.sub02-4-5-body01-01') }}</span
                  >, <span>{{ t('privacy.sub02-4-5-body01-02') }}</span
                  >, <span>{{ t('privacy.sub02-4-5-body01-03') }}</span
                  >/<span>{{ t('privacy.sub02-4-5-body01-04') }}</span
                  >, <span>{{ t('privacy.sub02-4-5-body01-05') }}</span
                  >, E-mail<span>{{ t('privacy.sub02-4-5-body01-06') }}</span>
                </p>
              </td>
            </tr>
            <tr>
              <td width="102" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.sub02-4-5-body02') }}</span>
                </p>
              </td>
              <td width="477" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.sub02-4-5-body02-01') }}</span
                  >/<span>{{ t('privacy.sub02-4-5-body02-02') }}</span
                  >, <span>{{ t('privacy.sub02-4-5-body02-03') }}</span
                  >, <span>{{ t('privacy.sub02-4-5-body02-04') }}</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p><br /></p>
        <p><br /></p>
        <p>
          <span>{{ t('privacy.je') }}</span
          >3<span>{{ t('privacy.sub03Title') }}</span>
        </p>
        <p>
          <span>{{ t('privacy.sub03-1-1') }}</span
          >.<br /><span>{{ t('privacy.ga') }}</span
          >. <span>{{ t('privacy.sub03-1-2') }}</span
          >/<span>{{ t('privacy.sub03-1-3') }}</span>
        </p>
        <p><br /></p>
        <p><br /></p>
        <p>
          <span>{{ t('privacy.je') }}</span
          >4<span>{{ t('privacy.sub04Title') }}</span>
        </p>
        <p>
          1.
          <span>{{ t('privacy.sub04-1-1') }}</span
          >.<br /><span>{{ t('privacy.ga') }}</span
          >. <span>{{ t('privacy.sub04-1-2') }}</span
          >(<span>{{ t('privacy.sub04-1-3') }}</span> ~ <span>{{ t('privacy.sub04-1-4') }}</span
          >)<br /><span>{{ t('privacy.na') }}</span
          >. <span>{{ t('privacy.sub04-1-5') }}</span
          >, <span>{{ t('privacy.sub04-1-6') }}</span> 6<span>{{ t('privacy.sub04-1-7') }}</span
          ><br /><span>{{ t('privacy.da') }}</span
          >. <span>{{ t('privacy.sub04-1-8') }}</span
          >/<span>{{ t('privacy.sub04-1-9') }}</span
          >/<span>{{ t('privacy.sub04-1-10') }}</span
          >(<span>{{ t('privacy.sub04-1-11') }}</span
          >, <span>{{ t('privacy.sub04-1-12') }}</span
          >)<br />2. <span>{{ t('privacy.sub04-2-1') }}</span
          >, <span>{{ t('privacy.sub04-2-2') }}</span
          >, <span>{{ t('privacy.sub04-2-3') }}</span
          >, <span>{{ t('privacy.sub04-2-4') }}</span
          >, <span>{{ t('privacy.sub04-2-5') }}</span
          >, <span>{{ t('privacy.sub04-2-6') }}</span
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
                <p>
                  <span>{{ t('privacy.sub04-2-head01') }}</span>
                </p>
              </td>
              <td width="2711" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.sub04-2-head02') }}</span>
                </p>
              </td>
              <td width="840" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.sub04-2-head03') }}</span>
                </p>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="2" width="785" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.sub04-2-body01-01') }}</span>
                </p>
              </td>
              <td width="2711" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.sub04-2-body01-02') }}</span>
                </p>
              </td>
              <td width="840" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  10<span>{{ t('privacy.sub04-2-body01-03') }}</span>
                </p>
              </td>
            </tr>
            <tr>
              <td width="2711" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.sub04-2-body01-04') }}</span>
                </p>
              </td>
              <td width="840" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  5<span>{{ t('privacy.sub04-2-body01-03') }}</span>
                </p>
              </td>
            </tr>
            <tr>
              <td width="785" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.sub04-2-body02-01') }}</span>
                </p>
              </td>
              <td width="2711" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.sub04-2-body02-02') }}</span
                  >, <span>{{ t('privacy.sub04-2-body02-03') }}</span
                  >, <span>{{ t('privacy.sub04-2-body02-04') }}</span
                  >, <span>{{ t('privacy.sub04-2-body02-05') }}</span
                  >,
                  <span>{{ t('privacy.sub04-2-body02-06') }}</span>
                </p>
              </td>
              <td width="840" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  5<span>{{ t('privacy.sub04-2-body02-07') }}</span>
                </p>
              </td>
            </tr>
            <tr>
              <td rowspan="2" width="785" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.sub04-2-body03-01') }}</span>
                </p>
              </td>
              <td width="2711" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.sub04-2-body03-02') }}</span
                  >, <span>{{ t('privacy.sub04-2-body03-03') }}</span
                  >, <span>{{ t('privacy.sub04-2-body03-04') }}</span
                  >, <span>{{ t('privacy.sub04-2-body03-05') }}</span
                  >, <span>{{ t('privacy.sub04-2-body03-06') }}</span
                  >, <span>{{ t('privacy.sub04-2-body03-07') }}</span
                  >,
                  <span>{{ t('privacy.sub04-2-body03-08') }}</span>
                </p>
              </td>
              <td width="840" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  12<span>{{ t('privacy.sub04-2-body03-09') }}</span
                  ><br /><span>{{ t('privacy.sub04-2-body03-10') }}</span
                  >, <span>{{ t('privacy.sub04-2-body03-11') }}</span
                  >/<span>{{ t('privacy.sub04-2-body03-12') }}</span> : 6<span>{{
                    t('privacy.sub04-2-body03-13')
                  }}</span>
                </p>
              </td>
            </tr>
            <tr>
              <td width="2711" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.sub04-2-body03-14') }}</span
                  >,
                  <span>{{ t('privacy.sub04-2-body03-15') }}</span>
                </p>
              </td>
              <td width="840" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  3<span>{{ t('privacy.sub04-2-body03-16') }}</span>
                </p>
              </td>
            </tr>
            <tr>
              <td rowspan="4" width="785" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.sub04-2-body04-01') }}</span>
                </p>
              </td>
              <td width="2711" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.sub04-2-body04-02') }}</span>
                </p>
              </td>
              <td width="840" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  5<span>{{ t('privacy.sub04-2-body04-03') }}</span>
                </p>
              </td>
            </tr>
            <tr>
              <td width="2711" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.sub04-2-body04-04') }}</span>
                </p>
              </td>
              <td width="840" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  5<span>{{ t('privacy.sub04-2-body04-05') }}</span>
                </p>
              </td>
            </tr>
            <tr>
              <td width="2711" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.sub04-2-body04-06') }}</span>
                </p>
              </td>
              <td width="840" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  3<span>{{ t('privacy.sub04-2-body04-07') }}</span>
                </p>
              </td>
            </tr>
            <tr>
              <td width="2711" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.sub04-2-body04-08') }}</span
                  >/<span>{{ t('privacy.sub04-2-body04-09') }}</span>
                </p>
              </td>
              <td width="840" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  6<span>{{ t('privacy.sub04-2-body04-10') }}</span>
                </p>
              </td>
            </tr>
            <tr>
              <td width="785" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.sub04-2-body05-01') }}</span>
                </p>
              </td>
              <td width="2711" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>신{{ t('privacy.sub04-2-body05-02') }}</span
                  >/<span>{{ t('privacy.sub04-2-body05-03') }}</span>
                </p>
              </td>
              <td width="840" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  3<span>{{ t('privacy.sub04-2-body05-04') }}</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p><br /></p>
        <p><br /></p>
        <p>
          <span>{{ t('privacy.je') }}</span
          >5<span>{{ t('privacy.sub05Title') }}</span>
        </p>
        <p>
          <span>{{ t('privacy.sub05Desc01') }}</span
          >. <span>{{ t('privacy.sub05Desc02') }}</span
          >.<br />1. <span>{{ t('privacy.sub05-01') }}</span
          ><br /><span>{{ t('privacy.ga') }}</span
          >. <span>{{ t('privacy.sub05-01-01') }}</span> DB<span>{{ t('privacy.sub05-01-02') }}</span
          >(<span>{{ t('privacy.sub05-01-03') }}</span
          >) <span>{{ t('privacy.sub05-01-04') }}</span
          >(<span>{{ t('privacy.sub05-01-05') }}</span
          >)<span>{{ t('privacy.sub05-01-06') }}</span
          >.<br /><span>{{ t('privacy.na') }}</span
          >. <span>{{ t('privacy.sub05-01-07') }}</span> DB<span>{{ t('privacy.sub05-01-08') }}</span
          >.<br /><span>{{ t('privacy.da') }}</span
          >. <span>{{ t('privacy.sub05-01-09') }}</span
          >, <span>{{ t('privacy.sub05-01-10') }}</span
          >.<br />2. <span>{{ t('privacy.sub05-02') }}</span
          ><br /><span>{{ t('privacy.ga') }}</span
          >. <span>{{ t('privacy.sub05-02-01') }}</span
          >(<span>{{ t('privacy.sub05-02-02') }}</span
          >)<span>{{ t('privacy.sub05-02-03') }}</span> : <span>{{ t('privacy.sub05-02-04') }}</span
          ><br /><span>{{ t('privacy.na') }}</span
          >. DB <span>{{ t('privacy.sub05-02-05') }}</span> : <span>{{ t('privacy.sub05-02-06') }}</span>
        </p>
        <p><br /></p>
        <p><br /></p>
        <p>
          <span>{{ t('privacy.je') }}</span
          >6<span>{{ t('privacy.sub06Title') }}</span>
        </p>
        <p>
          <span>{{ t('privacy.sub06Desc01') }}</span
          >, <span>{{ t('privacy.sub06Desc02') }}</span
          >.<span>{{ t('privacy.sub06Desc03') }}</span
          >, <span>{{ t('privacy.sub06Desc04') }}</span
          >, <span>{{ t('privacy.je') }}</span
          >3<span>{{ t('privacy.sub06Desc05') }}</span
          >, <span>{{ t('privacy.sub06Desc06') }}</span
          >, <span>{{ t('privacy.sub06Desc07') }}</span
          >/<span>{{ t('privacy.sub06Desc08') }}</span
          >.
        </p>
        <p>
          <span>{{ t('privacy.sub06-01') }}</span>
        </p>
        <table width="595" cellpadding="5" cellspacing="0">
          <colgroup>
            <col width="111" />
            <col width="462" />
          </colgroup>
          <thead>
            <tr>
              <td width="111" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.sub06-01-head01') }}</span>
                </p>
              </td>
              <td width="462" style="border: 1px solid #808080; padding: 0.05in 0.1in">
                <p>
                  <span>{{ t('privacy.sub06-01-head02') }}</span>
                </p>
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
                  <span>{{ t('privacy.sub06-01-body01') }}</span
                  ><br /><span>{{ t('privacy.sub06-01-body02') }}</span
                  >, KREAM
                  <span>{{ t('privacy.sub06-01-body03') }}</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          ※ <span>{{ t('privacy.sub06-02') }}</span
          >.
        </p>
        <p><br /></p>
        <p><br /></p>
        <p>
          <span>{{ t('privacy.je') }}</span
          >7<span>{{ t('privacy.sub07Title') }}</span>
        </p>
        <p>
          <span>{{ t('privacy.sub07Desc01') }}</span>
          '<span>{{ t('privacy.sub07Desc02') }}</span
          >(Cookie)'<span>{{ t('privacy.sub07Desc03') }}</span
          >. <span>{{ t('privacy.sub07Desc04') }}</span
          >. <span>{{ t('privacy.sub07Desc05') }}</span
          >.<br />1. <span>{{ t('privacy.sub07-01') }}</span
          ><br /><span>{{ t('privacy.ga') }}</span
          >. <span>{{ t('privacy.sub07-01-01') }}</span> : <span>{{ t('privacy.sub07-01-02') }}</span
          >IP, <span>{{ t('privacy.sub07-01-03') }}</span
          >, <span>{{ t('privacy.sub07-01-04') }}</span
          ><br /><span>{{ t('privacy.na') }}</span
          >. <span>{{ t('privacy.sub07-01-05') }}</span
          ><br /><span>{{ t('privacy.sub07-01-06') }}</span
          ><br /><span>{{ t('privacy.sub07-01-07') }}</span
          >, <span>{{ t('privacy.sub07-01-08') }}</span
          >, <span>{{ t('privacy.sub07-01-09') }}</span
          >.<br />2. <span>{{ t('privacy.sub07-02') }}</span
          >. <span>{{ t('privacy.sub07-02-01') }}</span
          >.<br /><span>{{ t('privacy.ga') }}</span
          >. <span>{{ t('privacy.sub07-02-02') }}</span> [<span>{{ t('privacy.sub07-02-03') }}</span
          >]<span>{{ t('privacy.sub07-02-04') }} </span> [<span>{{ t('privacy.sub07-02-05') }}</span
          >]-&gt;[<span>{{ t('privacy.sub07-02-06') }}</span
          >]<span>{{ t('privacy.sub07-02-07') }}</span
          >.<br /><span>{{ t('privacy.na') }}</span
          >. <span>{{ t('privacy.sub07-02-08') }}</span
          >, <span>{{ t('privacy.sub07-02-09') }}</span
          >. <span>{{ t('privacy.sub07-02-10') }}</span
          >, <span>{{ t('privacy.sub07-02-11') }}</span
          >.
        </p>
        <p><br /></p>
        <p><br /></p>
        <p>
          <span>{{ t('privacy.je') }}</span
          >8<span>{{ t('privacy.sub08Title01') }}</span
          >, <span>{{ t('privacy.sub08Title02') }}</span>
        </p>
        <p>
          <span>{{ t('privacy.sub08Desc01') }}</span
          >, <span>{{ t('privacy.sub08Desc02') }}</span
          >, <span>{{ t('privacy.sub08Desc03') }}</span
          >.<br /><br />
        </p>
        <p>
          [<span>{{ t('privacy.sub08-01-01') }}</span
          >]<br />1. <span>{{ t('privacy.sub08-01-02') }}</span
          >, <span>{{ t('privacy.sub08-01-03') }}</span
          >.<br />2. <span>{{ t('privacy.sub08-01-04') }}</span
          >. <span>{{ t('privacy.sub08-01-05') }}</span
          >, <span>{{ t('privacy.sub08-01-06') }}</span
          >.<br />3. <span>{{ t('privacy.sub08-01-07') }}</span
          >, <span>{{ t('privacy.sub08-01-08') }}</span
          >, <span>{{ t('privacy.sub08-01-09') }}</span
          >, <span>{{ t('privacy.sub08-01-10') }}</span> 24<span>{{ t('privacy.sub08-01-11') }}</span
          >.<br /><br />[<span>{{ t('privacy.sub08-02-01') }}</span
          >]<br />1. <span>{{ t('privacy.sub08-02-02') }}</span
          >.<br />2. <span>{{ t('privacy.sub08-02-03') }}</span
          >, <span>{{ t('privacy.sub08-02-04') }}</span
          >. <span>{{ t('privacy.sub08-02-05') }}</span
          >.<br /><span>{{ t('privacy.ga') }}</span
          >. <span>{{ t('privacy.sub08-02-06') }}</span
          ><br /><span>{{ t('privacy.na') }}</span
          >. <span>{{ t('privacy.sub08-02-07') }}</span
          ><br /><span>{{ t('privacy.da') }}</span
          >. <span>{{ t('privacy.sub08-02-08') }}</span
          ><br />3. <span>{{ t('privacy.sub08-02-09') }}</span
          >(<span>{{ t('privacy.sub08-02-10') }}</span
          >)<span>{{ t('privacy.sub08-02-11') }}</span
          >, <span>{{ t('privacy.sub08-02-12') }}</span
          >.<br />4. <span>{{ t('privacy.sub08-02-13') }}</span
          >, <span>{{ t('privacy.sub08-02-14') }}</span
          >.<br />5. <span>{{ t('privacy.sub08-02-15') }}</span
          >.<br />6. <span>{{ t('privacy.sub08-02-16') }}</span
          >. <span>{{ t('privacy.sub08-02-17') }}</span> ID<span>{{ t('privacy.sub08-02-18') }}</span
          >.
        </p>
        <p><br /></p>
        <p><br /></p>
        <p>
          <span>{{ t('privacy.je') }}</span
          >9<span>{{ t('privacy.sub09Title') }}</span>
        </p>
        <p>
          <span>{{ t('privacy.sub09Desc01') }}</span
          >. <span>{{ t('privacy.sub09Desc02') }}</span
          >. <span>{{ t('privacy.sub09Desc03') }}</span
          >.<br /><br />1. <span>{{ t('privacy.sub09-01') }}</span
          ><br /><span>{{ t('privacy.ga') }}</span
          >. <span>{{ t('privacy.sub09-01-01') }}</span> : <span>{{ t('privacy.sub09-01-02') }}</span> /
          <span>{{ t('privacy.sub09-01-03') }}</span
          ><br /><span>{{ t('privacy.sub09-01-04') }}</span> : hojinjava@ideaconcert.com<br /><span>{{
            t('privacy.na')
          }}</span
          >. <span>{{ t('privacy.sub09-01-05') }}</span> : <span>{{ t('privacy.sub09-01-06') }}</span> /
          <span>{{ t('privacy.sub09-01-07') }}</span
          ><br /><span>{{ t('privacy.sub09-01-08') }}</span> : ajhoo1004@ideaconcert.com<br />2.
          <span>{{ t('privacy.sub09-02-01') }}</span
          ><br /><span>{{ t('privacy.ga') }}</span
          >. <span>{{ t('privacy.sub09-02-02') }}</span
          >/<span>{{ t('privacy.sub09-02-03') }}</span
          >/<span>{{ t('privacy.sub09-02-04') }}</span
          ><br /><span>{{ t('privacy.na') }}</span
          >. <span>{{ t('privacy.sub09-02-05') }}</span
          >, <span>{{ t('privacy.sub09-02-06') }}</span
          ><br /><span>{{ t('privacy.da') }}</span
          >. <span>{{ t('privacy.sub09-02-07') }}</span
          ><br /><span>{{ t('privacy.ra') }}</span
          >. <span>{{ t('privacy.sub09-02-08') }}</span
          ><br /><span>{{ t('privacy.ma') }}</span
          >. <span>{{ t('privacy.sub09-02-09') }}</span
          ><br /><span>{{ t('privacy.ba') }}</span
          >. <span>{{ t('privacy.sub09-02-10') }}</span
          ><br /><span>{{ t('privacy.sa') }}</span
          >.
          <span>{{ t('privacy.sub09-02-11') }}</span>
        </p>
        <p><br /></p>
        <p><br /></p>
        <p>
          <span>{{ t('privacy.je') }}</span
          >10<span>{{ t('privacy.sub10Title') }}</span>
        </p>
        <p>
          <span>{{ t('privacy.sub10Desc01') }}</span
          >. <span>{{ t('privacy.sub10Desc02') }}</span
          >.<br /><br />[<span>{{ t('privacy.sub10-01-01') }}</span
          >]<br /><span>{{ t('privacy.ga') }}</span
          >. <span>{{ t('privacy.sub10-01-02') }} </span> : <span>{{ t('privacy.sub10-01-03') }}</span
          ><br /><span>{{ t('privacy.na') }}</span
          >. <span>{{ t('privacy.sub10-01-04') }}</span> : <span>{{ t('privacy.sub10-01-05') }}</span
          ><br /><span>{{ t('privacy.da') }}</span
          >. <span>{{ t('privacy.sub10-01-06') }} </span> : info@idaeconcert.com
        </p>
        <p><br /></p>
        <p><br /></p>
        <p><br /></p>
        <p>
          <span>{{ t('privacy.je') }}</span
          >11<span>{{ t('privacy.sub11Title') }}</span>
        </p>
        <p>
          <span>{{ t('privacy.sub11Desc') }}</span
          >.<br />1. <span>{{ t('privacy.sub11-01-01') }}</span
          >(<span>{{ t('privacy.sub11-01-02') }}</span
          >)<br /><span>{{ t('privacy.ga') }}</span
          >. <span>{{ t('privacy.sub11-01-03') }} </span> : <span>{{ t('privacy.sub11-01-04') }}</span
          >, <span>{{ t('privacy.sub11-01-05') }}</span
          ><br /><span>{{ t('privacy.na') }}</span
          >. <span>{{ t('privacy.sub11-01-06') }}</span
          >/<span>{{ t('privacy.sub11-01-07') }} </span> : http://privacy.kisa.or.kr / (<span>{{
            t('privacy.sub11-01-08')
          }}</span
          >)118<br />2. <span>{{ t('privacy.sub11-02-01') }}</span
          ><br /><span>{{ t('privacy.ga') }}</span
          >. <span>{{ t('privacy.sub11-02-02') }} </span> : <span>{{ t('privacy.sub11-02-03') }}</span
          >,<span>{{ t('privacy.sub11-02-04') }}</span
          >(<span>{{ t('privacy.sub11-02-05') }}</span
          >)<br /><span>{{ t('privacy.na') }}</span
          >. <span>{{ t('privacy.sub11-02-06') }}</span
          >/<span>{{ t('privacy.sub11-02-07') }} </span> : www.kopico.go.kr/(<span>{{ t('privacy.sub11-01-08') }}</span
          >)1833-6972<br />3. <span>{{ t('privacy.sub11-03-01') }}</span> : www.spo.go.kr / (<span>{{
            t('privacy.sub11-01-08')
          }}</span
          >) 1301<br />4. <span>{{ t('privacy.sub11-03-03') }}</span> : cyberbureau.police.go.kr / (<span>{{
            t('privacy.sub11-01-08')
          }}</span
          >) 182
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useModalStore } from '@/store/modal';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const modalStore = useModalStore();
</script>
