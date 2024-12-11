export type RootResponse = {
  message: string;
};

export interface BlogAnalyticsOut {
  /**
   * 블로그 분석 ID
   * @type {string}
   * @memberof BlogAnalyticsOut
   */
  id: string;
  /**
   * 블로그 URL
   * @type {string}
   * @memberof BlogAnalyticsOut
   */
  blog_url: string;
  /**
   * 블로그 도메인
   * @type {string}
   * @memberof BlogAnalyticsOut
   */
  blog_domain: string;
  /**
   * stat 분석 결과
   * @type {object}
   * @memberof BlogAnalyticsOut
   */
  stat_result: object;
  /**
   * llm 분석 결과
   * @type {object}
   * @memberof BlogAnalyticsOut
   */
  llm_result: object;
}
