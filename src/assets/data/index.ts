/**
 * # SkillData
 * @description
 * Skills (사용가능 기술) 항목에 사용되는 데이터 인터페이스 입니다.
 */
interface SkillData {
  /**
   * # title
   * @remarks 기술의 이름
   * @example 'JavaScript'
   */
  title: string
  /**
   * # level
   * @remarks 기술의 수준
   * @example 'Major'
   */
  level: 'Major' | 'Minor'
  /**
   * # descriptions
   * @remarks 기술의 수준 설명들
   * @example ```ts
   * descriptions: [
   *   'ES6 문법을 활용해 웹 어플리케이션을 개발하는 데 익숙합니다.',
   *   'Vanilla JavaScript를 활용해 DOM 조작하는 데 익숙합니다.',
   *   'reduce, map, filter 등 다양한 고차함수를 적극적으로 활용합니다.'
   * ]
   * ```
   */
  descriptions: string[]
}

/**
 * # AwardAndProjectData
 * @description
 * Award and Project (수상 및 프로젝트 경험) 항목에 사용되는 데이터 인터페이스
 */
interface AwardAndProjectData {
  /**
   * # title
   * @remarks 수상 혹은 프로젝트 명
   * @example 'KB AppChallenge 대상'
   */
  title: string
  /**
   * # date
   * @remarks 수상일 혹은 프로젝트 진행 기간
   * @example '2018.11'
   */
  date: string
  /**
   * # descriptions
   * @remarks 해당 수상 혹은 프로젝트에 대한 설명들
   * @example ```ts
   * descriptions: [
   *   'KB 금융지주에서 SOPT 회원들을 대상으로 약 2주 동안 진행된 해커톤입니다.',
   *   'OpenCV와 Project Oxford를 활용하여 영수증 인식 기능을 구현을 담당했습니다.',
   *   '간단하게나마 앱 내에서 영상처리 기술을 시도해본 좋은 경험이었습니다.'
   * ]
   * ```
   */
  descriptions: string[]
}

/**
 * # HobbyData
 * @description
 * Hobby (취미) 항목에 사용되는 데이터 인터페이스
 */
interface HobbyData {
  /**
   * # title
   * @remarks 취미 이름
   * @example '낚시'
   */
  title: string
  /**
   * # descriptions
   * @remarks 취미에 대한 설명들 (어떻게 즐기는지 등)
   * @example ```ts
   * descriptions: [
   *   '여건상, 주로 실내 낚시 카페에 갑니다.',
   *   '생각을 정리하고 머리를 식힐겸 새벽 및 퇴근 후에도 자주 가고 있습니다.'
   * ]
   * ```
   */
  descriptions: string[]
}

/**
 * # WorkExperienceData
 * @description
 * Work Experience (경력) 항목에 사용되는 데이터 인터페이스
 */
interface WorkExperienceData {
  /**
   * # company
   * @remarks 회사명
   * @example 'HIGHERX'
   */
  company: string
  /**
   * # date
   * @remarks 재직 기간
   * @example '2019.01 ~ 현재 재직중'
   */
  date: string
  /**
   * # position
   * @remarks 직군
   * @example 'Software Engineer'
   */
  position: string
  /**
   * # team
   * @remarks 소속된 팀
   * @example 'Platform DEV'
   */
  team: string
  /**
   * # description
   * @remarks 회사에 대한 간단한 설명
   * @example '매장 업무관리 서비스 워키도키(전. 알바체크) 서비스 개발\n\n무인 매장에 필요한 시간에 필요한 인력을 배치하는 브라우니 서비스 개발'
   */
  description: string
  /**
   * # experiences
   * @remarks 경력 내용들
   * @example ```ts
   * [
   *   {
   *     title: '브라우니 결제 서버 개발 및 유지보수',
   *     date: '2021.05 ~',
   *     description: '브라우니 서비스에 사용되는 결제 서버 구현 및 유지보수를 담당하고 있습니다.\n기술 스택: koajs, TypeScript',
   *     summary: [
   *       'PG사 (KG 이니시스)를 통한 결제 구현',
   *       '카드 결제, 계좌이체, 무통장입금 구현',
   *       '환불 시스템 구현',
   *       '포인트, 쿠폰 시스템 구성'
   *     ]
   *   }
   * ]
   * ```
   */
  experiences: {
    /**
     * # title
     * @remarks 프로젝트 제목
     * @example '브라우니 결제 서버 개발 및 유지보수'
     */
    title: string
    /**
     * # date
     * @remarks 프로젝트 진행 기간
     * @example '2021.05 ~'
     */
    date: string
    /**
     * # description
     * @remarks 프로젝트 설명
     * @example '브라우니 서비스에 사용되는 결제 서버 구현 및 유지보수를 담당하고 있습니다.\n기술 스택: koajs, TypeScript'
     */
    description: string
    /**
     * # summary
     * @remarks 프로젝트 요약
     * @example ```ts
     * [
     *   'PG사 (KG 이니시스)를 통한 결제 구현',
     *   '카드 결제, 계좌이체, 무통장입금 구현',
     *   '환불 시스템 구현',
     *   '포인트, 쿠폰 시스템 구성'
     * ]
     * ```
     */
    summary: string[]
  }[]
}

/**
 * # Introduce
 * @description
 * Introduce (자기소개, 제일 상단 항목) 항목에 사용되는 데이터 인터페이스
 */
interface Introduce {
  /**
   * # name
   * @remarks 이름
   * @example '김덕원'
   */
  name: string
  /**
   * # position
   * @remarks 직군
   * @example 'Software Engineer'
   */
  position: string
  /**
   * # contactMethods
   * @remarks 연락 수단
   * @example ```ts
   * {
   *   text: 'GitHub',
   *   link: 'https://github.com/KimChunsick'
   * }
   * ```
   */
  contactMethods: { text: string; link: string }[]
  /**
   * # selfIntroduce
   * @remarks 자기소개 내용
   * @example '안녕하세요. 소프트웨어 엔지니어 김덕원입니다.'
   */
  selfIntroduce: string
}

/**
 * # ResumeData
 * @description
 * 이력서 데이터 인터페이스
 *
 * 다른 곳에서 사용할 수 있으니 originate하게 따로 사용하기 위해 optional 값 없이 선언
 */
interface ResumeData {
  introduce: Introduce
  skill: SkillData[]
  awardAndProject: AwardAndProjectData[]
  hobby: HobbyData[]
  workExperience: WorkExperienceData[]
}

/**
 * # NeedResumeData
 * @description
 * 실질적으로 이력서에 사용되는 타입
 *
 * 자유롭게 필수값, 선택사항 값 선택하여 만든 후 아래 data의 타입으로 지정하면 됨.
 */
type NeedResumeData = Pick<ResumeData, 'introduce'> &
  Partial<Pick<ResumeData, 'awardAndProject' | 'hobby' | 'skill' | 'workExperience'>>

// 이 객체에 이력서 데이터 추가하면 됨
const data: NeedResumeData = {
  introduce: {
    name: '김덕원',
    position: 'Software Engineer',
    selfIntroduce:
      '안녕하세요. 소프트웨어 엔지니어 김덕원입니다.\n소프트웨어를 개발하면서 다양한 문제를 마주하고 해결하는 것을 좋아합니다. 약 3년간 서비스를 운영/개발하면서, 점진적으로 발전하는 서비스를 보며 뿌듯함을 느꼈습니다.\nMKT Funnel 기반 리텐션 개선 프로젝트를 통해 사용자들의 D-1 ~ D-14 사이의 리텐션을 개선했습니다. 이 결과가 Pre A 투자 유치 IR에 소개되며 긍정적인 반응을 얻었을 때와 같이, 작성한 코드가 사용자에게 더 큰 가치를 창출할 때 가장 큰 만족감을 느낍니다.',
    contactMethods: [
      { text: 'public.chunsik@gmail.com', link: 'mailto:public.chunsik@gmail.com' },
      { text: 'GitHub', link: 'https://github.com/KimChunsick' },
      { text: 'Blog', link: 'https://kimchunsick.me/' }
    ]
  },
  skill: [
    {
      title: 'JavaScript',
      level: 'Major',
      descriptions: [
        'ES6 문법을 활용해 웹 어플리케이션을 개발하는 데 익숙합니다.',
        'Vanilla JavaScript를 활용해 DOM 조작하는 데 익숙합니다.',
        'reduce, map, filter 등 다양한 고차함수를 적극적으로 활용합니다.'
      ]
    },
    {
      title: 'TypeScript',
      level: 'Minor',
      descriptions: [
        'TypeScript를 활용해 웹 어플리케이션을 제작하는 데 익숙합니다.',
        '때에 따라 interface와 type을 적절히 나누어 사용 할 수 있습니다.',
        'Utility Type들을 활용해 약간 복잡한 Type들을 생성하여 개발할 수 있습니다.'
      ]
    },
    {
      title: 'HTML / CSS',
      level: 'Minor',
      descriptions: [
        '디자인을 보고 페이지의 구조를 결정할 수 있습니다.',
        'Sass(Scss) 등의 CSS Preprocessor를 사용할 수 있습니다.',
        'Chrome, Safari, Edge 등 다양한 브라우저를 지원해본 경험이 있습니다.',
        'Search Engine Optimization 적용 경험이 있습니다.',
        '웹 앱 기반 브라우저(Android Chrome, iOS Safari)에서 트러블 슈팅 경험이 있습니다.'
      ]
    },
    {
      title: 'Swift',
      level: 'Minor',
      descriptions: [
        'Swift 4, 5를 활용해 앱을 제작해본 경험이 있습니다.',
        'Delegate 패턴을 활용하여 코드를 짤 수 있습니다.',
        '코드만으로 복잡한 View를 표현할 수 있습니다.'
      ]
    },
    {
      title: 'Server',
      level: 'Minor',
      descriptions: [
        'koajs와 nestjs를 활용해 RESTful API를 작성할 수 있습니다.',
        'DB의 적절한 컬럼에 인덱싱을 적용할 수 있습니다.',
        '실행 계획으로 쿼리를 분석하고 커버링 인덱스 등의 기법을 적용해 쿼리 튜닝을 진행한 경험이 있습니다.',
        '서비스에서 한 도메인을 맡아 주도적으로 DB 및 API 설계를 경험해보았습니다.'
      ]
    },
    {
      title: 'DevOps',
      level: 'Minor',
      descriptions: [
        'AWS CodePipeline를 활용해 CI/CD를 구축할 수 있습니다.',
        'AWS EC2, RDS, S3, CloudFront, WAF 등 다양한 인프라 요소를 직접 구축 및 설정해본 경험이 있습니다.',
        'Nginx를 설정해본 경험이 있으며, 관련 로그를 통해 트러블슈팅을 진행하는 데 익숙합니다.',
        '팀의 생산성을 위해 Slack Bot 개발 및 서버와 연동한 경험이 있습니다.'
      ]
    }
  ],
  awardAndProject: [
    {
      title: '건축정보 모바일 서비스 콘텐츠 개발 공모전 최우수상',
      date: '2019.11 ~ 2020.02',
      descriptions: [
        '국토교통부와 한국감정원이 공동 개최한 공모전입니다.',
        'AR을 활영하여 주변 건물에서 교통약자를 위한 시설이 있는지 확인 할 수 있는 앱을 제작했습니다.',
        'UI 개발을 담당 했습니다.',
        '공모전을 진행하며 Barrier Free 제도에 대해 알게 되었고, AR을 시도하여 서비스를 제작했다는 것에 큰 의의를 두고 있습니다.'
      ]
    },
    {
      title: 'KB AppChallenge 대상',
      date: '2018.11',
      descriptions: [
        'KB 금융지주에서 SOPT 회원들을 대상으로 약 2주 동안 진행된 해커톤입니다.',
        'OpenCV와 Project Oxford를 활용하여 영수증 인식 기능을 구현을 담당했습니다.',
        '간단하게나마 앱 내에서 영상처리 기술을 시도해본 좋은 경험이었습니다.'
      ]
    },
    {
      title: 'Boost Course Ace 2nd - iOS 프로그래밍',
      date: '2018.03 ~ 2018.08',
      descriptions: [
        '네이버 Connect 재단에서, iOS 실무자들에게 코드 리뷰를 받으며 프로젝트를 진행하는 부스트코스의 베타테스터로 활동했습니다.',
        '별 탈 없이 코스를 완주 했으며, 코드 리뷰를 통해 코드의 구조 및 확장성에 대해서 고민을 하며 개발을 진행했습니다.'
      ]
    },
    {
      title: 'SOPT 22nd',
      date: '2018.03 ~ 2018.07',
      descriptions: ['대학생 연합 IT 벤처 창업 동아리입니다.', 'iOS 개발 파트원으로 참여하여 활동했습니다.']
    },
    {
      title: 'Software Maestro 8th 수료',
      date: '2018.11',
      descriptions: [
        '소프트웨어 마에스트로 8기를 수료 했습니다.',
        'DX9, DXUT를 활용해 컴포넌트 게임엔진을 제작했습니다.',
        '디자인 패턴과 코드로 작성한 것들이 어떻게 화면에 그려지는지에 대해 알 수 있는 뜻깊은 프로젝트였습니다.'
      ]
    },
    {
      title: '2984 Little Brother',
      date: '2017.11 ~ 2018.02',
      descriptions: [
        'GameJam: Art, Politics and Digital Games에서 수상한 작품입니다.',
        '주한 독일 문화원의 도움으로 독일 A-MAZE / International Playful Media Festival에 전시 하였습니다.',
        '"내가 만든 소프트웨어에 의미를 담음으로써 얼마나 큰 영향력을 줄 수 있을까?"를 생각할 수 있었던 좋은 기회였습니다.'
      ]
    },
    {
      title: '우리동네 냥아치',
      date: '2017.08 ~ 2017.12',
      descriptions: [
        '인디 게임 카페에서 팀을 모아 제작한 게임입니다.',
        '간단한 게임이었지만, 원격에서 작업하는 것과 모르는 사람들이 모여서 개발한다는 점에서 많은 어려움을 겪었습니다.',
        '팀장 및 클라이언트 프로그래머로 참여했습니다.',
        '현재는 플레이스토어 정책 위반으로 잠시 내려놓은 상태이며 약 1달 만에 구글 플레이스토어 5,000명 다운로드, 아케이드 게임 순위 TOP10에 진입했었습니다.',
        '프로젝트의 완료가 얼마나 힘든 것인지 몸소 깨닫게 해준 정말 감사한 프로젝트였습니다.'
      ]
    }
  ],
  hobby: [
    {
      title: '낚시',
      descriptions: [
        '여건상, 주로 실내 낚시 카페에 갑니다.',
        '생각을 정리하고 머리를 식힐겸 새벽 및 퇴근 후에도 자주 가고 있습니다.'
      ]
    },
    {
      title: '독서',
      descriptions: [
        '주로 자기개발 서적과 인문학 서적을 읽습니다.',
        '새로운 인사이트 혹은 자극을 주는 책 찾는 것을 좋아합니다.',
        '의도적으로 책을 읽기 위해 노력하고 있으며, 분기당 한권은 꼭 읽고 있습니다.',
        '블로그를 시작한 이후로, 읽은 책들에 대한 독후감을 올리고 있습니다.'
      ]
    },
    {
      title: '음악',
      descriptions: [
        '장르, 국가, 언어에 연연하지 않고 듣기 좋은 음악이라면 모두 듣습니다.',
        '힙합과 인디 음악을 제일 자주 듣습니다.',
        '가장 좋아하는 국내 가수는 팔로알토와 이바다 입니다.'
      ]
    }
  ],
  workExperience: [
    {
      company: 'HIGHERX',
      date: '2019.01 ~ 현재 재직중',
      position: 'Software Engineer',
      team: 'Platform DEV',
      description:
        '매장 업무관리 서비스 워키도키(전. 알바체크) 서비스 개발\n\n무인 매장에 필요한 시간에 필요한 인력을 배치하는 브라우니 서비스 개발',
      experiences: [
        {
          title: '워키도키 앱 프론트 - React',
          date: '2022.02 ~',
          description:
            '새롭게 구축하고 있는 워키도키 앱 프론트입니다.\n현재 워키도키의 프론트엔드 기술 스택은 Vue이나, 2년간 채용을 하며 React가 프론트엔드 시장 중심임을 깨달았습니다.\n따라서 인력을 React 개발자로 채용하면서 Vue에서 React로의 기술 스택 전환을 결정하게 되었습니다.\n\nNext js를 이용해 SSR을 지원하고 있습니다.\nSSR을 지원하게 된 계기는 앱을 유지보수함에 따라 점점 새로운 기능들이 추가되었고, 이에 따라 초기 로딩 속도 2초가 넘어가게 되었습니다.\n이 내용은 VOC에도 올라오게 되었고, SSR을 적용한 뒤 현재는 초기 로딩시 0.7초 아래로 완료되고있습니다.',
          summary: ['Vue -> React 점진적 적용 방안 구성', 'SSR 적용 및 무중단 배포 인프라 구성']
        },
        {
          title: '브라우니 어드민 (서버 및 프론트) 개발 및 유지보수',
          date: '2021.05 ~',
          description:
            '운영 파트 팀원들이 쉽게 사용할 수 있도록 제작된 브라우니 어드민 서비스입니다.\n\n기술 스택: React, koajs, TypeScript',
          summary: [
            'RBAC(Role-Based Access Control)로 어드민 유저 및 권한 기능을 구현하여 유저에 맞게 특정 뷰, 기능의 접근 권한 제어 가능',
            '커버링 인덱스 사용으로 많은 데이터 페이징 상황에서도 최대한 성능 하락이 눈에 띄지 않도록 구현'
          ]
        },
        {
          title: '브라우니 메세지 서버 개발 및 유지보수',
          date: '2021.05 ~',
          description:
            '브라우니 서비스에 사용되는 카카오 알림톡, Slack 메세지 전송 등을 다른 개발 팀원이 사용하기 쉽게 API 서버로 분리하였습니다.\n기술 스택: koajs, TypeScript',
          summary: [
            '서비스 전반적으로 사용되는 중복 코드의 최소화',
            '카카오톡 알림톡, Slack 메세지, 이메일, 문자 기능 등을 API로 제작하여 제공'
          ]
        },
        {
          title: '브라우니 결제 서버 개발 및 유지보수',
          date: '2021.05 ~',
          description:
            '브라우니 서비스에 사용되는 결제 서버 구현 및 유지보수를 담당하고 있습니다.\n기술 스택: koajs, TypeScript',
          summary: [
            'PG사 (KG 이니시스)를 통한 결제 구현',
            '카드 결제, 계좌이체, 무통장입금 구현',
            '환불 시스템 구현',
            '포인트, 쿠폰 시스템 구성'
          ]
        },
        {
          title: 'AWS 인프라 구성 및 유지보수',
          date: '2021.04 ~',
          description: '워키도키 및 브라우니 인프라 구성 및 유지보수를 담당하고 있습니다.',
          summary: [
            '사전에 구축한 git flow에 맞춰 develop, stage, production 환경을 구축하여 프로세스에 따라 사용 환경 분리',
            'CodePipeline를 활용해 CI/CD 프로세스 구성',
            'CloudFront를 활용해 정적 리소스 제공 및 CDN 구성',
            'S3에 static web page 및 일자별 로그 (ELB, Server log 등) 시스템 구성',
            'WAF 설정으로 제품별 보안정책 설정',
            '무중단 배포 (Blue&Green) 설정',
            '그 외 ElastiCache, RDS, EC2 등 모든 인프라 환경 구성'
          ]
        },
        {
          title: 'Platform DEV 파트장',
          date: '2021.04 ~',
          description:
            '이전 팀장님이 퇴사하시면서 파트장으로 승진하게 되었습니다. 부족한 점이 많지만 개선하기 위해 항상 노력중입니다.\n하이어엑스 개발 관련 모든 일정 관리, 개발 인원 배치, 관련 중요 커뮤니케이션 담당 등 팀 매니징 업무를 진행하고 있습니다.\n또한 팀 문화 및 업무 프로세스 구축, 개발 팀 표준 등을 구축 및 관리하고 있습니다.',
          summary: [
            '워키도키, 브라우니 개발 및 배포 일정 관리',
            '다른 파트 팀원과 (디자인, 캠페인 등) 커뮤니케이션 및 일정 구축',
            '외부 파트너사와 협업시 기술 관련 커뮤니케이션 및 일정 구축 대응 전담',
            '팀 문화 구축',
            '개발 프로세스 구축',
            '서비스 매뉴얼 구축',
            '비즈니스 상황, 팀원의 욕구, 서비스의 성격에 맞게 적합한 기술 선정 및 설계'
          ]
        },
        {
          title: '워키도키 어드민',
          date: '2019.04 ~ 2020.06',
          description:
            '데이터 확인 및 CS 관리 등을 위해 제작한 어드민 페이지입니다.\n현재는 새로운 어드민 페이지를 개발하게 되어, 이 프로젝트는 중단되었습니다.\n\n기술 스택: Vue, JavaScript',
          summary: [
            'Vuetify를 활용해 2주내에 빠르게 어드민 구축',
            '각종 서비스 내의 데이터 관리 기능 제작',
            'B2B 본사(HQ)용 간단한 데이터 접근, 수정 및 통계 기능 제작'
          ]
        },
        {
          title: '워키도키 앱 프론트 - Vue',
          date: '2019.01 ~',
          description:
            '현재 교체 작업 중인 워키도키 앱 프론트엔드입니다.\n대다수의 기능(약 95%)을 리드하며 작업했습니다.\n기술 스택: Vue, JavaScript',
          summary: [
            'JWT 인증 개발',
            '높은 수준의 컴포넌트 재사용성을 위해 Atomic Design 적용',
            '인앱 결제, PG사(페이플)을 통한 결제 구현 경험 존재',
            '다른 프론트엔드 개발자들이 사용하기 쉽도록 Native WebView와 통신하기 위한 JS Bridge 인터페이스 구조화 및 유지보수',
            '패키지 및 트리쉐이킹을 통한 번들 최적화로 초기 로딩속도 최적화',
            '사용자 행동 분석 도구 (Amplitude, Beausable) 및 GA 연동을 통한 데이터를 활용하여 개 선점 도출 후 디자이너, 그로스 마케터와 함께 작업하여 MKT Funnel 구축 및 초기 리텐션 증가 유도'
          ]
        },
        {
          title: '워키도키 iOS, Android Native Application 유지보수',
          date: '2019.01 ~',
          description:
            '워키도키는 웹뷰에서 프론트엔드를 보여주고, 웹상에서 하기 힘든 작업들을 JS Bridge로 연결 하여 사용자에게 제공하고 있습니다.\nJS Bridge 및 푸쉬 알림 등, 네이티브에서 활용되는 기능들을 Swift5, Kotlin을 활용하여 개발 및 유지보수를 진행하고 있습니다.\n\n기술 스택: Swift5, Kotlin, Xcode, Android Studio',
          summary: [
            '프론트엔드에서 쉽게 사용할 수 있도록 구조화된 JS Bridge 인터페이스 제공 및 유지보수',
            '카카오톡 및 문자 초대 기능 개발 (Kakao Link SDK를 JS Bridge 인터페이스로 래핑하여 제공)',
            'FCM을 활용하여 Push Notification 기능 제공 및 프론트엔드와 연결',
            '제품 유통기한 관리를 위한 Barcode Reader 기능 개발',
            '기타 iOS, Android Native Application의 모든 기능 개발'
          ]
        }
      ]
    }
  ]
}

export default data
