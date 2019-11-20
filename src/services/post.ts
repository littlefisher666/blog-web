import request from '@/utils/request';

export async function queryPostList(authorId: number, pageNum: number, size: number): Promise<any> {
  return request('/blog/api/v1/post', {
    params: {
      authorId,
      pageNum,
      size,
    },
    method: 'get',
  });
}

export async function queryPostDetail(postId: number): Promise<any> {
  return request(`/blog/api/v1/post/${postId}/content`);
}
