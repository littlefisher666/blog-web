import request from '@/utils/request';

export async function fetchCurrentAuthor(): Promise<any> {
  return request('/blog/api/v1/author/default');
}
