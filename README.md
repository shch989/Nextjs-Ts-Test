# Nextjs 실습
## Nextjs 설치 방법(JS)
```
$ npx create-next-app@latest
```
## Nextjs 설치 방법(TS)
```
$ npx create-next-app@latest --typescript
```

## Nextjs 구조
### pages 
- 이 폴더 안에 페이지들을 생성
- index.tsx가 처음 "/"페이지로 됨
- _app.tsx는 공통되는 레이아웃을 작성. 모든 페이지에 공통으로 들어가는 걸 넣어주려면 여기에 넣어주면 됨
- 만약 about이라는 페이지를 만드려면 pages 폴도 안에 about.tsx를 생성하면 됨
### public
- 이미지 같은 정적 에셋들을 보관
### styles
- 스타일링을 처리해주는 폴더
- 모듈 css는 컴포넌트 종속적으로 스타일링하기 위한 것이며, 확장자 앞에 module을 붙여줘야 함
### next.config.js
- Nextjs는 웹팩을 기본 번들러로 사용
- 그래서 웹팩에 관한 설정들을 이 파일에서 해결