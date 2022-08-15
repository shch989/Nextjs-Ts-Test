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

## Nextjs에서 데이터를 가져오는 방법
문법 | 설명
--|--  
getStaticProps | Static Generation으로 빌드할 때 데이터를 불러옴(미리 만들어줌)
getStaticPaths | Static Generation으로 데이터에 기반하여 pre-render시 특정한 동적 라우팅 구현
getServerSideProps | Server Side Rendering으로 요청이 있을 때 데이터를 불러옵니다.

## getStaticProps를 사용해야 할 때
- 페이지를 렌더링하는 데 필요한 데이터는 사용자의 요청보다 먼저 bulid 시간에 필요한 데이터를 가져올 때
- 데이터는 Headless CMS에서 데이터를 가져올 때
- 데이터를 공개적으로 캐시할 수 있을 때(사용자별 아님)
- 페이지는 미리 렌더링되어야 하고(SEO의 경우) 매우 빨라야할 때. (getStaticProps는 성능을 위해 CDN에서 캐시할 수 있는 HTML 및 JSON 파일을 생성합니다.)
## getServerSideProps 사용해야 할 때
- 요청할 때 데이터를 가져와야하는 페이지를 미리 렌더해야 할 때 사용합니다. 서버가 모든 요청에 대한 결과를 계산하고, 추가 구성없이 CDN에 의해 결과를 캐시할 수 없기 때문에 첫번째 바이트까지의 시간은 getStaticProps보다 느리다

# Nextjs 실습자료
#1 전체적인 구조 만들기 : https://drive.google.com/file/d/1kcvOfCLX3LSxZFti7-7D4HzfVgT7Z71F/view?usp=sharing
#2 Entity 생성하기 : https://drive.google.com/file/d/1RCb5xpnChBcJIFNbu2AElPIUWhGSbL1K/view?usp=sharing
#3 회원가입, 로그인 : https://drive.google.com/file/d/1t5pEzGrUTdI7QodlV_3IbnUOs8O2ShRo/view?usp=sharing
#4 커뮤니티 생성 : https://drive.google.com/file/d/1SzQZSrJI9SKltzW7cxJu_4PrBTfmaWvq/view?usp=sharing
#5 포스트 페이지 생성 : https://drive.google.com/file/d/1FIeGOxCzgFff8Cl8S0SArG4OqNEsy0fU/view?usp=sharing
#6 댓글과 투표 기능 구현 : https://drive.google.com/file/d/18LsKlDqNEjHNVRzqOUFq9wGs1rJS2Hcz/view?usp=sharing
#7 무한스크롤 및 유저 페이지 생성 : https://drive.google.com/file/d/1mjAHv6PtEKvBNfxkW2dWnHRFdsI6bkU3/view?usp=sharing
#8 애플리케이션 배포하기 : https://drive.google.com/file/d/1-ZxCXKXd9quQbwH1PRzMnkRwECm85Kvg/view?usp=sharing
부록) Nextjs and Typescript : https://drive.google.com/file/d/1uvbiIXHVC3QIYBD1XOFRdiHiDQL57-G8/view?usp=sharing

## 설치한 패키지
```
$ npm install gray-matter --save
```