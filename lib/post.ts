import fs from "fs"; // 파일을 찾아서 읽는 역활
import path from "path";
import matter from 'gray-matter'; // 마크다운 파일로 블로그를 만들경우 거의 필수로 사용되어지는 라이브러리

const postsDirectory = path.join(process.cwd(), 'posts'); 
console.log('process.cwd()', process.cwd()); // 이 프로젝트의 경로가 출력됨
console.log('postsDirectory', postsDirectory); // 이 프로젝트의 posts라는 이름의 폴더 경로가 출력됨

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  console.log('fileNames', fileNames); // posts에 있는 파일 이름 출력됨
  
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '') // replace를 사용하여 이름에 .md가 있을 경우 .md를 없애줌

    const fullPath = path.join(postsDirectory, fileName) // fileName이 있는 경로가 출력됨
    const fileContents = fs.readFileSync(fullPath, 'utf8') // utf8로 인코딩

    const matterResult = matter(fileContents) // gray-matter를 사용하여 변환

    return {
      id,
      ...(matterResult.data as { date: string; title: string })
    }
  })

  return allPostsData.sort((a, b) => { // 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}