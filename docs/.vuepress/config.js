module.exports = {
    title: 'MUN-DOC',
    description: '模拟联合国文档知识库',
    markdown: {
        lineNumbers: true, // 代码块显示行号
        plugins: {
            'markdown-it-footnote': {}
        }
    },
    themeConfig: {
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        nav:[
            { text: '如何速通常委', link: '/standing-committee/' }, // 内部链接 以docs为根目录
            { text: '全国模联会议信息共享平台', link: '/link/' }, // 外部链接
            // 下拉列表
            {
                text: 'MAUAC',
                items: [
                    {   text: 'MAUAC会议信息',
                        link: 'https://mun.mauac.com'
                    },
                    {
                        text: 'Routine常委工具',
                        link: 'https://routine.mauac.com'
                    },
                    {
                        text: 'Linkage联动软件',
                        link: 'https://linkage.mauac.com'
                    }
                ]
            }
        ],
        sidebar: 'auto'
    },
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/nprogress'
    ]
}