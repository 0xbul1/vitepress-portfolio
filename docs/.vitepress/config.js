export default {
    title: '赵旋',
    description: '赵旋的简历 | xuan zhao',
    lang: 'zh-CN',

    head: [
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi' }],
    ],

    lastUpdated: true,
    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/0xbul1' }
        ],
        nav: [
            // NavbarItem
            // {
            //     text: '首页',
            //     link: '/',
            // },
            // {
            //     text: '规则',
            //     link: '/rule/',
            // },
            // {
            //     text: '例子',
            //     link: '/example/parallelcdn',
            // },
            // {
            //     text: '拓展',
            //     link: '/ext/engine',
            // },
            // {
            //     text: 'Q群',
            //     link: 'https://jq.qq.com/?_wv=1027&k=rAcnhzqK',
            // }
        ],
        sidebar: [
            {
                text: '项目',
                items: [
                    { text: '活力钱包', link: '/project/1' },
                    { text: '企业微信应用后台', link: '/project/2' },
                    { text: '慢牛助手/财富雷达', link: '/project/3' },
                    { text: '早报编辑器', link: '/project/4' }
                ]
            },
            {
                text: '其他',
                items: [
                    { text: '联系我', link: '/contact/' }
                ]
            }
        ]
    }
}