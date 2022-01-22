# 웹 접근성을 고려한 Breadcrumbs 직접 만들어보기. - Breadcrumbs란?

웹페이지 컨텐츠 계층을 보여주는 컴포넌트.
상위 카테고리로 빠르게 이동할 수 있도록 도와준다.
![amazon breadcrumbs](https://images.velog.io/images/hyeoki/post/95dbfda7-1a51-4108-88ef-64e2c872079e/image.png)

# 웹 접근성이란

[링크](https://www.w3.org/WAI/fundamentals/accessibility-intro/ko)

> "웹의 힘은 보편성에 있습니다. 장애에 상관없이 모두가 접근할 수 있다는 것이 가장 중요한 부분입니다."
> 팀 버너스리, W3C 디렉터 및 Wrold Wide Web의 창시자

웹 접근성은 웹 사이트, 도구, 기술이 장애를 가진 사용자들이 사용할 수 있도록 설계 및 개발된 것을 말합니다.

# 웹 접근성 가이드라인

[컴포넌트 별 웹 접근성 알아보기](https://www.w3.org/TR/wai-aria-practices/)

# 웹 접근성을 고려한 Breadcrumb 만들기

[Breadcrumbs 디자인 패턴](https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html) 문서를 참조하여 컴포넌트를 만들어보자.

먼저 접근성 기능을 살펴보자

- 링크 집합은 ol(순서가 있는 집합)을 사용하여 구성됩니다.
- nav 엘리먼트에 Breadcrumb 라벨을 붙이면, 스크린 리더는 해당 엘리먼트를 "이동 경로(Breadcrumb trail)"로 식별한다.
- 링크 사이의 시각적 기호("/")를 스크린 리더가 읽는것을 방지하기 위해 css를 사용한다. - 각 요소는 시각적 표현일 뿐임
  - 각 경로는 이미 ol아래 li로 식별 가능하다

공식 예제는 아래와 같은 CSS(Border)를 사용한다.

```css
nav.breadcrumb li + li::before {
  display: inline-block;
  margin: 0 0.25em;
  transform: rotate(15deg);
  border-right: 0.1em solid currentColor;
  height: 0.8em;
  content: "";
}
```
