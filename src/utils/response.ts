import { BaseResponseDto } from '@/entity/response';
import { notification } from 'antd';

const getResponse = function getResponse<T>(response: BaseResponseDto<T>): T | {} {
  if (!response.success) {
    notification.error({
      message: '网络异常',
      description: response.errorMessage,
    });
    return {};
  }
  return response.data;
};

export default getResponse;
