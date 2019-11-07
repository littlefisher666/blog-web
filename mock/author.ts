export default {
  'GET /blog/api/v1/author/default': {
    success: true,
    errorCode: null,
    errorMessage: null,
    data: {
      authorId: 1,
      name: 'LittleFisher',
      avatar: 'http://image.littlefisher.site/avatar.jpg',
      email: 'jin68716503@163.com',
      signature: '让优秀成为一种习惯',
      job: 'Java开发工程师',
      group: '51信用卡-技术研发中心-风控技术部-风控产品技术组',
      tags: [
        {
          name: '网络',
          code: 292,
        },
        {
          name: 'TCP',
          code: 293,
        },
        {
          name: 'IP',
          code: 294,
        },
      ],
      city: {
        name: '杭州市',
        code: 3301,
        province: {
          name: '浙江省',
          code: 33,
        },
      },
      address: '西湖区紫霞街80号西溪谷国际商务中心G座14楼',
      phone: '15382348260',
    },
  },
};
