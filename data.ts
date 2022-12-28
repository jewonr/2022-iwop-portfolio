export interface Content {
  title: string;
  desc: string;
  link: string;
  author: string;
  img: string;
}

export const contents: Content[] = [
  { 
    title: "SUNRINET", 
    desc: "선린에서의 생활을 집약적으로 담아낸 웹사이트", 
    link: "https://clipchamp.com/watch/MS3Pzj4Pm1w", 
    author: "박현성",
    img: '/images/thumbnail-1.png'
  },
  { 
    title: "MyMemo",
    desc: "온라인 메모장입니다. Node.js + Express 로 백엔드를 구현하였으며, MongoDB 를 사용했습니다. 프론트 페이지들은 EJS 로 만들었습니다.",
    link: "https://github.com/choi2j/mymemo",
    author: "최이준",
    img: '/images/thumbnail-2.png'
  },
  { 
    title: "선린인터넷고등학교 홈페이지 리메이크", 
    desc: "기존의 선린인터넷고등학교 학교 홈페이지를 다시 만들어보았습니다.", 
    link: "https://github.com/wugusaud77/sunrin-sen-hs-kr-unofficial", 
    author: "주현명",
    img: '/images/thumbnail-3.png'
  },
  { 
    title: "OnTheWay", 
    desc: "출퇴근 시간 지하철에서 보내는 시간을 알차게 사용할 수 있게 유용한 기능을 제공하는 웹입니다. React 를 사용하여 만든 모바일 웹입니다.", 
    link: "https://sen1014-my.sharepoint.com/:v:/g/personal/21sunrin097_sunrint_sen_hs_kr/EVefvGjFv1VCuwYfGqmRbHsBghjvwGqBL_jkwq0ULb72-w?e=Ob6Gf3", 
    author: "나제원",
    img: '/images/thumbnail-4.svg'
  },
  { 
    title: "plannunity", 
    desc: "여행 플랜을 만들고, 다른 사람과 공유해보세요. 다양한 여행 경험 속에서 나에게 맞는 플랜을 찾아보세요. 플래뮤니티로 당신의 여행을 시작해보세요.", 
    link: "https://plannunity.vercel.app/", 
    author: "나제원",
    img: '/images/thumbnail-5.svg'
  },
  { 
    title: "2022 SSF IWOP 프로젝트", 
    desc: "2022년 소프트웨어 나눔축제에서 진행했던 프로젝트입니다.", 
    link: "https://spiffy-profiterole-5da554.netlify.app/", 
    author: "나제원, 주현명",
    img: '/images/thumbnail-6.svg'
  },
  { 
    title: "TODO", 
    desc: "여름방학 프로젝트입니다. 오늘 하루의 다짐과 할 일을 작성하고 통계를 확인할 수 있습니다.", 
    link: "https://github.com/past2l/todo2022-frontend", 
    author: "윤도현",
    img: '/images/thumbnail-7.png'
  },
  { 
    title: "RE-HEART", 
    desc: "급할 때 찾기 힘든 자동제세동기의 위치를 지도 API 를 이용해 알려주는 웹사이트입니다.", 
    link: "https://sen1014-my.sharepoint.com/personal/21sunrin097_sunrint_sen_hs_kr/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F21sunrin097%5Fsunrint%5Fsen%5Fhs%5Fkr%2FDocuments%2FIWOP%20%EC%8B%9C%EC%97%B0%EC%98%81%EC%83%81%2FRE%5FHEART%20%E1%84%89%E1%85%B5%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC%2Emov&parent=%2Fpersonal%2F21sunrin097%5Fsunrint%5Fsen%5Fhs%5Fkr%2FDocuments%2FIWOP%20%EC%8B%9C%EC%97%B0%EC%98%81%EC%83%81", 
    author: "김송연",
    img: '/images/thumbnail-8.svg'
  },
  {
    title: "inCommu",
    desc: "실시간으로 온라인 유저들과 소통, 토의, 질문을 채팅 형식으로 할 수 있는 커뮤니티 서비스 입니다.",
    link: "https://drive.google.com/file/d/1MIyBnSdrrLc2qBwVuGREy4r_26AU8Dh3/view?usp=share_link",
    author: "김효헌, 이기훈",
    img: '/images/thumbnail-9.png'
  },
  {
    title: "Calculator.com",
    desc: "hover 애니메이션 효과가 들어간 웹 계산기입니다.",
    link: "https://drive.google.com/file/d/1YZfdTdzuWxnUnDnheDoVReA12LdSlAuR/view?usp=sharing",
    author: "이기훈",
    img: '/images/thumbnail-10.png'
  },
  {
    title: "MYDAILY",
    desc: "기록하고 싶은 날짜를 선택하여 누르면 캘린더에 일상을 기록할 수 있는 웹 사이트입니다.",
    link: "https://drive.google.com/file/d/1Ize1AyComEH4gn64lb3u6Ih-se7oXYBX/view?usp=share_link",
    author: "이혜린",
    img: '/images/thumbnail-11.png'
  },
  {
    title: "test",
    desc: "test",
    link: "",
    author: "test",
    img: 'https://cdn.pixabay.com/photo/2022/12/18/11/45/christmas-7663229_1280.jpg'
  }
]