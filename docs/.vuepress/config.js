module.exports = {
    title: '卫宁护士分诊台软件',
    description: 'Just playing around',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link',
            {rel: 'icon', href: '/favicon.ico'}
            //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
        ],
        /*
            no-cache
            在发布缓存副本之前，强制要求缓存把请求提交给原始服务器进行验证(协商缓存验证)。
            no-store
            缓存不应存储有关客户端请求或服务器响应的任何内容，即不使用任何缓存。
        */
        ['meta',
            {'http-equiv': 'Cache-Control', 'content': 'no-cache'},
        ],
        /*['meta',
            {'http-equiv': 'pragma', 'content': 'no-cache'},
        ],
        ['meta',
            {'http-equiv': 'expires', 'content': '0'},
        ],*/
    ],
    configureWebpack: (config, isServer) => {
        console.log(`config.js ---> configureWebpack() ${isServer}`);
        if (!isServer) {
            // 修改客户端的 webpack 配置
        }
    },
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    //下面涉及到的md文件和其他文件的路径下一步再详细解释
    themeConfig: {
        logo: '/image/logo.png',  //网页顶端导航栏左上角的图标

        //顶部导航栏
        nav: [
            //格式一：直接跳转，'/'为不添加路由，跳转至首页
            {text: '首页', link: '/'},
            //格式二：添加下拉菜单，link指向的文件路径

            {text: '软件部署', link: '/pages/V5.6/software-deploy/hardware-environment.md'},
            //点击标签会跳转至link的markdown文件生成的页面
            {
                text: '操作指南',  //默认显示
                ariaLabel: '操作指南',   //用于识别的label
                items: [
                    //点击标签会跳转至link的markdown文件生成的页面
                    {text: '操作指南', link: '/pages/V5.6/instructions/triage-soft/triage-soft.md'},
                    {text: '视频教程', link: '/pages/V5.6/video-course/course-1.md'},
                ]
            },
            {text: '常见问题', link: '/pages/V5.6/faq/triage-soft/triage-soft.md'},
        ],

        //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
        sidebar:
            {
                '/pages/V5.6/software-deploy/': [
                    {
                        title: '部署环境',   // 一级菜单名称
                        collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                        sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                        children: [
                            ['hardware-environment.md', '所需硬件环境'],  //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
                        ]
                    },
                    {
                        title: '部署程序',
                        collapsable: false,
                        sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                        children: [
                            ['deployment-file.md', '程序介绍']
                        ]
                    },
                    {
                        title: '安装步骤',
                        collapsable: false,
                        sidebarDepth: 2,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                        children: [
                            ['install-step/update-database.md', '1.数据库搭建/升级'],
                            ['install-step/install-setup.md', '2.部署工具安装'],
                            ['install-step/install-serverconfig.md', '3.部署护士分诊服务'],
                            ['install-step/his-synchro.md', '4.THIS数据同步到分诊'],
                            ['install-step/install-client.md', '5.护士分诊客户端安装'],
                            //['install-step/cis-config.md', '6.医生站配置'],
                            //['install-step/check-script.md', '7.校验脚本&清库脚本'],
                        ]
                    }
                ],
                '/pages/V5.6/instructions/': [
                    {
                        title: '分诊软件',   // 一级菜单名称
                        collapsable: true, // false为默认展开菜单, 默认值true是折叠,
                        sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                        children: [
                            ['triage-soft/triage-soft.md', '概述'],
                            ['triage-soft/basic-data-manage.md', '1.基础数据管理'],
                            ['triage-soft/triage-setting.md', '2.门急诊相关设置'],
                            ['triage-soft/nurse-triage.md', '3.门急诊分诊'],
                            ['triage-soft/operation-monitor.md', '4.运维与监控'],
                            ['triage-soft/function-menu.md', '5.门诊其他业务'],
                            ['triage-soft/system-help.md', '6.系统管理'],
                            ['example/triage-soft/triage-soft.md', '示例'],
                        ]
                    },
                    {
                        title: '分诊屏',   // 一级菜单名称
                        collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                        sidebarDepth: 0,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                        children: [
                            ['triage-screen/triage-screen.md', '概述'],
                            ['example/triage-screen/triage-screen.md', '示例']
                        ]
                    },
                    {
                        title: '签到机',   // 一级菜单名称
                        collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                        sidebarDepth: 0,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                        children: [
                            ['sign-machine/sign-machine.md', '概述'],
                            ['example/sign-machine/sign-machine.md', '示例']
                        ]
                    },
                    {
                        title: '叫号客户端',   // 一级菜单名称
                        collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                        sidebarDepth: 0,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                        children: [
                            ['call-client/call-client.md', '概述'],
                            ['example/call-client/call-client.md', '示例']
                        ]
                    }
                ],
                '/pages/V5.6/faq/': [
                    {
                        title: '大类',
                        collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                        sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                        children: [
                            ['software-deploy/software-deploy.md', '服务搭建'],
                            ['his-synchro/his-synchro.md', 'THIS前台数据同步'],
                            ['triage-soft/triage-soft.md', '分诊软件'],
                            ['triage-screen/triage-screen.md', '分诊屏'],
                            ['sign-machine/sign-machine.md', '签到机'],
                            ['call-client/call-client.md', '叫号客户端']
                        ]
                    }
                ],
            }
    },
    plugins: [
        ["vuepress-plugin-code-copy",
            {
                align: "top", //位置
                successText: "已复制", //复制成功提示
                staticIcon: true //图标静态显示
            }
        ],
        [
            // 图片缩放
            'vuepress-plugin-medium-zoom',
            {
                selector: '.theme-default-content img',
                delay: 1000,
                options: {
                    margin: 24,
                    background: '#f5f5f5',
                    scrollOffset: 0,
                },
            },
        ],
    ]
};
