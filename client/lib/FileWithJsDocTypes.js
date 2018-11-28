/**
 * @typedef {Object<string,any>} ResultDTO
 * @property {string} ResultDTO.name
 * 
 */
export default class JsDocIssues {
  /** 
   * @returns {ResultDTO}
   */
  issue() {
    return {
      name: 'Test'
    }
  }
}