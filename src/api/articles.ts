import { request } from '@/utils/request'
import type { articleDate, KnowledgeType } from '@/types/consult'
export const getArticle = (
  type: KnowledgeType,
  current: number = 1,
  pageSize: number = 10
) => {
  return request<articleDate>('patient/home/knowledge', 'GET', {
    type,
    current,
    pageSize
  })
}
