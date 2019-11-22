import request from '@/utils/request';

export async function queryPostList(
  authorId: number,
  tagId: number,
  pageNum: number,
  size: number,
): Promise<any> {
  const url =
    tagId === undefined
      ? `/blog/api/v1/post/author/${authorId}`
      : `/blog/api/v1/post/author/${authorId}/tag/${tagId}`;
  return request(url, {
    params: {
      pageNum,
      size,
    },
    method: 'get',
  });
}

export async function queryPostDetail(postId: number): Promise<any> {
  return request(`/blog/api/v1/post/${postId}/content`);
}

export async function read(postId: number): Promise<any> {
  return request(`/blog/api/v1/post/${postId}/read`, {
    method: 'post',
  });
}
