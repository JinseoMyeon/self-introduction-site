## self-introduction-site
> 한국디지털미디어고등학교 응용프로그래밍 화면구현 교과 프로젝트 수행평가

### 시작하기 앞서
* 본 페이지는 https://i.ssib.al/ 링크를 통해 사이트에 접속할 수 있게 하였습니다.
* 본 페이지의 소스코드를 확인하시려면 <a href="https://github.com/JinseoMyeon/self-introduction-site">이 페이지</a>에 방문하시고,
디자인 프로젝트를 확인하시려면 <a href="https://www.figma.com/file/YHFssxuNgNW92KvmMcXQ7t/portfolio?type=design&node-id=0%3A1&t=xY4Voksoiyq4MPy3-1">이 페이지</a>에 방문하시면 됩니다.
* 본 README.md 파일은 GitHub 레포지토리를 통해 확인하시면 읽기에 좀 더 수월합니다.

### Components
* 버튼의 경우 동일한 css 스타일을 적용받도록 한 후, 텍스트 길이에 맞춰 버튼의 사이즈를 유동적으로 조절되게 만들었습니다. 사이트 곳곳에 사용되고 있습니다.
* trivia.html의 SNS 계정을 소개하는 부분에서도 서비스의 로고, 이름에 상관 없이 동일한 스타일을 가진 버튼 컴포넌트를 제작하였습니다.
* index.html을 제외한 설명 부분에서는 'subtitle - thirdtitle(선택) - description'의 구조를 사용하여 사이트의 스타일은 일관되게 유지한 상태로 텍스트만 자유롭게 변경할 수 있도록 하여 개발의 편리성을 높였습니다.

### Index.html
* 사이트의 메인이 되는 페이지입니다.
* 우측 하단에 정렬한 후 일정 만큼 margin을 주어 제가 사용하는 로고를 추가해 디자인이 심심하지 않게 하였고, css animation을 통해 **6초 간격으로 위아래로 움직이도록 애니메이션**을 넣었습니다.
* 타이틀이 되는 'THIS IS JINSEOMYEON' **텍스트의 두번째 줄에 마우스를 올려두면** :before을 통해 텍스트 배경색이 채워지고, 텍스트 색상이 하얗게 변하는 모션을 넣었습니다.
* '평범하지만 이상한 {text}, 진서면입니다.'에서 {text} 부분에 일정 시간 간격으로 '개발자', '디자이너', '학생'이 표시되도록 하였습니다.
* 배경에 그라디언트(그라데이션)를 적용하여 배경이 심심하지 않도록 하였습니다.


### introduce.html / portfolio.html / trivia.html
* 각자 자기소개, 작업물, 기타 카테고리 페이지를 나타냅니다.
* 스크롤을 할 때 header 부분에 내용이 들어갈 경우 z-index 값을 통해 헤더 뒤쪽으로 본문 내용을 보내고, backdrop-filter를 통해 백그라운드 블러를 적용하였습니다.
* header의 각 카테고리에 마우스를 올려두면 transition을 통해 부드럽게 마우스를 올려둔 부분의 글자 굵기와 색상이 변하도록 하였습니다.
* 각 버튼 위에 마우스를 올려두면 :hover를 통해 색상이 살짝 어둡게 변하도록 하였습니다.
