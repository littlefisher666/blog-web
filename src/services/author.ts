import request from '@/utils/request';

export async function fetchCurrentAuthor(): Promise<any> {
  return request('/api/v1/author/1');
}
