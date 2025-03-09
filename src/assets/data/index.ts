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
      '안녕하세요. 소프트웨어 엔지니어 김덕원입니다.\n\n소프트웨어의 높은 접근성이 많은 사람에게 직접 닿을 수 있다고 믿습니다.\n그 힘을 빌려, 사람들의 일상에 실질적인 개선을 가져올 제품을 만들기 위해 노력하고 있습니다.',
    contactMethods: [
      { text: 'public.chunsik@gmail.com', link: 'mailto:public.chunsik@gmail.com' },
      { text: 'GitHub', link: 'https://github.com/KimChunsick' },
      { text: 'Blog', link: 'https://kimchunsick.me/' }
    ]
  },
  workExperience: [
    {
      company: 'toss',
      date: '2022.08 ~ 현재 재직중',
      position: 'Frontend Developer',
      team: 'TUBA Service Team',
      description:
        '토스의 사용자 분석 플랫폼 TUBA의 기능 개선과 유지보수를 담당하며, 보다 직관적인 데이터 분석 환경을 구축하고 있습니다.',
      experiences: [
        {
          title: 'TUBA 개발 및 유지보수',
          date: '2022.08 ~',
          description: 'A/B 테스트와 사용자 분석 기능을 개선하여, 사용자 친화적인 데이터 분석 환경을 구현했습니다.',
          summary: ['트리거 기능 전환', '퍼널 분석 개선', '이벤트 에디터 개발']
        }
      ]
    },
    {
      company: 'HIGHERX',
      date: '2019.01 ~ 2022.07',
      position: 'Software Engineer',
      team: 'Platform DEV',
      description: '매장 업무관리 및 인력 배치 솔루션 개발에 참여했습니다.',
      experiences: [
        {
          title: '워키도키 앱 및 어드민 개발',
          date: '2019.01 ~ 2022.07',
          description: '웹 프론트엔드 기술 전환(Vue → React)과 어드민 페이지 개발을 주도했습니다.',
          summary: ['React 도입 및 SSR 적용', '어드민 기능 최적화', '데이터 관리 기능 구현']
        },
        {
          title: '브라우니 서비스 개발',
          date: '2019.01 ~ 2022.07',
          description: '브라우니 서비스의 결제, 메시지 등 핵심 기능을 안정적으로 개발하고 유지보수했습니다.',
          summary: ['결제 시스템 구축', '메시지 API 개발', '서비스 안정성 강화']
        },
        {
          title: 'AWS 인프라 구축 및 팀 관리',
          date: '2021.04 ~ 2022.07',
          description:
            'AWS 기반 인프라 환경 구축과 팀 내 개발 프로세스 관리를 통해 프로젝트 전반을 효과적으로 조율했습니다.',
          summary: ['CI/CD 파이프라인 구축', '무중단 배포 환경 구성', '개발 프로세스 표준화']
        }
      ]
    }
  ]
}

export default data
