const userlayout = (() => {
  const showusers = (users) => {
    const wrap = document.getElementById("showpost");
    let text = ``;

    users.forEach(({ phone, website, email, name }) => {
      text += `<tr>
      <td>${name}</td>
      <td>${email}</td>
      <td ${phone.style.colo}>${phone}</td>
      <td>${website}</td>
</tr>`;
    });
    wrap.innerHTML = text;
  };
})();
// <!-- 사용자 정보를 10개 불러온다. -->
// <!-- table 태그를 사용한다. -->
// <!-- username이 "Kamren"인 사람의 전화번호만 글씨를 핫핑크로 바꾸고 italic으로 강조한다. -->
// <!-- 이메일, 휴대전화, 웹사이트 세 개의 정보를 출력한다. -->
// <!-- 버튼으로 껐다 킬 수 있게 한다. -->
