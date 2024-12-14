export interface BlogAnalytics {
  /**
   * 블로그 분석 ID
   * @type {string}
   * @memberof BlogAnalytics
   */
  id: string;
  /**
   * 블로그 URL
   * @type {string}
   * @memberof BlogAnalytics
   */
  blogUrl: string;
  /**
   * 블로그 도메인
   * @type {string}
   * @memberof BlogAnalytics
   */
  blogDomain: string;
  /**
   * 블로그 이미지 URL
   * @type {string}
   * @memberof BlogAnalytics
   */
  blogImageUrl: string;
  /**
   * 블로그 제목
   * @type {string}
   * @memberof BlogAnalytics
   */
  blogTitle: string;
  /**
   * 블로그 분석 결과
   * @type {Result}
   * @memberof BlogAnalytics
   */
  result: Result;
}

/**
 *
 * @export
 * @interface Persona
 */
export interface Persona {
  /**
   * 페르소나 제목
   * @type {string}
   * @memberof Persona
   */
  title: string;
  /**
   * 페르소나 카테고리
   * @type {string}
   * @memberof Persona
   */
  category: string;
  /**
   * 페르소나 이미지 URL
   * @type {string}
   * @memberof Persona
   */
  imageUrl: string;
}
/**
 *
 * @export
 * @interface Quote
 */
export interface Quote {
  /**
   * 글 제목
   * @type {string}
   * @memberof Quote
   */
  postTitle: string;
  /**
   * 명언
   * @type {string}
   * @memberof Quote
   */
  quote: string;
}
/**
 *
 * @export
 * @interface Result
 */
export interface Result {
  /**
   * 총 글 수
   * @type {number}
   * @memberof Result
   */
  totalPostCount: number;
  /**
   * 총 글자 수
   * @type {number}
   * @memberof Result
   */
  totalWordCount: number;
  /**
   * 총 이미지 수
   * @type {number}
   * @memberof Result
   */
  totalImageCount: number;
  /**
   * 총 코드 블록 수
   * @type {number}
   * @memberof Result
   */
  totalCodeBlockCount: number;
  /**
   * 평균 단어 수
   * @type {number}
   * @memberof Result
   */
  averageWordCount: number;
  /**
   * 평균 이미지 수
   * @type {number}
   * @memberof Result
   */
  averageImageCount: number;
  /**
   * 평균 코드 블록 수
   * @type {number}
   * @memberof Result
   */
  averageCodeBlockCount: number;
  /**
   * 요일별 글 수
   * @type {{ [key: string]: number; }}
   * @memberof Result
   */
  weekdayDistribution: { [key: string]: number };
  /**
   * 월별 글 수
   * @type {{ [key: string]: number; }}
   * @memberof Result
   */
  monthlyDistribution: { [key: string]: number };
  /**
   *
   * @type {Array<Quote>}
   * @memberof Result
   */
  quotes: Array<Quote>;
  /**
   *
   * @type {Persona}
   * @memberof Result
   */
  persona: Persona;
}
