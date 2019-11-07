export default {
  'GET /blog/api/v1/post?authorId=1&pageNum=0&size=5': {
    success: true,
    errorCode: null,
    errorMessage: null,
    data: {
      content: [
        {
          postId: 346,
          title: 'TCP-IP原理',
          previewContent:
            '\n\n# TCP/IP原理\n## TCP/IP概述\n`TCP/IP`起源于`1969`年美国国防部`（DOD：The United States Department Of Defense）`高级研究项目管理局`（APRA:AdvancedResearch Projects Agency）`对有关分组交换的广域网`（Packet-Switched wide-area network）`科研项目，因此起初的网络称为`ARPANET`。\n`1973`年`TCP`（传输控制协议）正式投入使用，`1981`年`IP`（网际协议）协议投入使用，`1983`年`TCP/IP`协议正式被集成到美国加州大学伯克利分校的`UNIX`版本中，该“网络版”操作系统适应了当时各大学、机关、企业旺盛的连网需求，因而随着该免费分发的操作系统的广泛使用，`TCP/IP`协议得到了流传。\n`TCP/IP`技术得到了众多厂商的支持，不久就有了很多分散的网络。所有这些单个的`TCP/IP`网络都互联起来称为`Internet`。基于`TCP/IP`协议的`Internet`已逐步发展成为当今世界上规模最大、拥有用户和资源最多的一个超大型计算机网络，`TCP/IP`协议也因此成为事实上的工业标准。`IP`网络正逐步成为当代乃至未来计算机网络的主流。\n![](http://image.littlefisher.site/2019-05-23-15585763971270.jpg)\n\n',
          authorId: 1,
          authorName: '靳雅楠',
          tagList: [
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
          readTimes: 16,
          likedTimes: 0,
          createTime: '2019-05-22T11:00:00',
        },
        {
          postId: 352,
          title: 'TCP三次握手与四次挥手',
          previewContent:
            '\n\n## TCP 的特性\n- `TCP`提供一种面向连接的、可靠的字节流服务\n- 在一个`TCP`连接中，仅有两方进行彼此通信。广播和多播不能用于`TCP`\n- `TCP`使用校验和，确认和重传机制来保证可靠传输\n- `TCP`给数据分节进行排序，并使用累积确认保证数据的顺序不变和非重复\n- `TCP`使用滑动窗口机制来实现流量控制，通过动态改变窗口的大小进行拥塞控制\n\n> 注意：`TCP`并不能保证数据一定会被对方接收到，因为这是不可能的。`TCP`能够做到的是，如果有可能，就把数据递送到接收方，否则就（通过放弃重传并且中断连接这一手段）通知用户。因此准确说`TCP`也不是`100%`可靠的协议，它所能提供的是数据的可靠递送或故障的可靠通知。\n\n',
          authorId: 1,
          authorName: '靳雅楠',
          tagList: [
            {
              name: '网络',
              code: 292,
            },
            {
              name: 'TCP',
              code: 293,
            },
          ],
          readTimes: 8,
          likedTimes: 0,
          createTime: '2019-05-22T11:00:00',
        },
        {
          postId: 356,
          title: 'HTTPS连接建立过程',
          previewContent:
            '\n\n![](http://image.littlefisher.site/2019-05-23-15586018409423.jpg)\n\n',
          authorId: 1,
          authorName: '靳雅楠',
          tagList: [
            {
              name: '网络',
              code: 292,
            },
            {
              name: 'https',
              code: 299,
            },
          ],
          readTimes: 6,
          likedTimes: 0,
          createTime: '2019-05-22T11:00:00',
        },
        {
          postId: 258,
          title: '拦截器模式-业务场景应用',
          previewContent:
            '\n\n## 类图\n![拦截器模式](http://image.littlefisher.site/2019-05-17-%E6%8B%A6%E6%88%AA%E5%99%A8%E6%A8%A1%E5%BC%8F.jpg)\n\n该类图比较简陋，具体的可以参考网上关于拦截过滤器的设计模式类图\n\n> PS：拦截过滤器模式好像并不是23种设计模式中的一种，而是后来扩展出来的\n\n',
          authorId: 1,
          authorName: '靳雅楠',
          tagList: [
            {
              name: '设计模式',
              code: 238,
            },
            {
              name: '拦截器模式',
              code: 239,
            },
          ],
          readTimes: 41,
          likedTimes: 0,
          createTime: '2019-05-16T11:00:00',
        },
        {
          postId: 297,
          title: 'SpringBoot Http2改造',
          previewContent:
            '\n\n## SpringBoot Http2改造\n\n### 前置说明\n该文档仅说明使用`jetty`作为`web`服务器的场景下如何配置\n具体`springboot`有官方的说明文档，链接如下\n[https://docs.spring.io/spring-boot/docs/2.0.0.RC2/reference/html/howto-embedded-web-servers.html#howto-configure-http2][1]\n\n> PS: 文档中有补充说明，基于`springboot`开启`http2`，强制要求必须配置`ssl`\n\n',
          authorId: 1,
          authorName: '靳雅楠',
          tagList: [
            {
              name: 'Spring',
              code: 256,
            },
            {
              name: 'SpringBoot',
              code: 263,
            },
            {
              name: 'Http2',
              code: 264,
            },
          ],
          readTimes: 16,
          likedTimes: 0,
          createTime: '2018-11-28T10:00:00',
        },
      ],
      pageable: {
        sort: {
          sorted: true,
          unsorted: false,
          empty: false,
        },
        pageSize: 5,
        pageNumber: 0,
        offset: 0,
        paged: true,
        unpaged: false,
      },
      totalElements: 130,
      last: false,
      totalPages: 26,
      first: true,
      sort: {
        sorted: true,
        unsorted: false,
        empty: false,
      },
      numberOfElements: 5,
      size: 5,
      number: 0,
      empty: false,
    },
  },
};
