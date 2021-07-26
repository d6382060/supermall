import { request } from './request';
export function getCategory () {
  return request({
    url: '/Category'
  })
}
export function getSubcategory (maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}
// 右侧下方三个分类数据
export function getSubCategoryDetail (miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  }).catch(err => err)
}