import appRequest from '../utils/request';

/**
 * 获取鱼种列表
 */
export const getFishList = () => {
  return appRequest.get('/fish/list');
};

/**
 * 获取鱼种详情
 * @param {string|number} id - 鱼种 ID
 */
export const getFishDetail = (id) => {
  return appRequest.get(`/fish/${id}`);
};

/**
 * 分页获取鱼种列表
 * @param {object} params - 查询参数
 * @param {number} params.current - 当前页码
 * @param {number} params.size - 每页条数
 * @param {string} params.keyword - 搜索关键词
 * @param {string} params.category - 分类
 */
export const getFishPage = (params) => {
  return appRequest.get('/fish/page', { params });
};
