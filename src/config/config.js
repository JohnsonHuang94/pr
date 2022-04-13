import avatar from '@/assets/avatar.jpg'
export const pr = {
    name: '黄军生',
    avatar: avatar,
    posts: '前端开发工程师',
    skills: [
        {
            name: 'HTML',
            score: 88,
        },
        {
            name: 'CSS',
            score: 85
        },
        {
            name: 'JavaScript',
            score: 80,
        },
        {
            name: 'jQuery',
            score: 78,
        },
        {
            name: 'Vue',
            score: 75,
        },
        {
            name: 'SCSS',
            score: 75
        },
        {
            name: 'gulp',
            score: 60,
        },
        {
            name: 'Webpack',
            score: 60,
        },
        {
            name: 'TypeScript',
            score: 50
        }
    ],
    email: '593474789@qq.com',
    github: 'github.com/JohnsonHuang94',
    phone: '13610219462',
    edu: [
        {
            name: '广东工业大学',
            timeLine: [
                {
                    time: '2012年9月至2016年6月',
                    desc: '<p>本科生，电子科学与技术专业</p>'
                }
            ]
        }
    ],
    project: [
        {
            name: '区域教研数据平台',
            link: 'https://res.ets100.com/',
            desc: `
                <p>1、面向教研员的数字化决策和管理协同平台，对教研员所属地区的学生教学情况进行大数据统计，将学校、老师、班级、学生、学习情况等进行可视化数据展示，同时提供布置练习，检查练习情况等功能，让教研员高效获取教学信息，提高管理效率。</p>
                <p>2、前端采用vue2 + elementUI作为UI框架；利用vuex+localStorage实现部分数据本地化存储；基于axios进行二次封装http请求模块，实现请求拦截器对请求体进行统一处理，例如对部分数据进行加密等，实现响应拦截器对服务端响应进行统一错误处理等。</p>
            `,
        },
        {
            name: 'E听说教师端',
            link: 'https://teacher.ets100.com/h5/src/index.html',
            desc: `
                <p>1、教师端是提供给在校老师的教学管理工具，包含班级管理、学生管理、练习管理以及试题内容(学生练习评分)等核心功能，方便老师进行在线教学工作，提高工作效率。</p>
                <p>2、该项目使用vue2 + mintUI作为UI框架；使用gulp工具进行工程化打包，利用minify-css、uglify、rename、rev-collector等对静态文件进行压缩处理，文件名添加md5标记等；</p>
                <p>3、封装公共函数处理xml评分文件，与原文对比，生成多维度着色文本；</p>
            `
        },
        {
            name: '孩子学情小程序',
            link: '',
            desc: `
                <p>1、孩子学情是提供给家长的学情管理工具，包含绑定孩子，查看孩子练习情况，孩子多维度学习情况，E卡管理（购买，绑定）等功能，有效的帮助家长实时了解并监督学生的在校学习情况；</p>
                <p>2、对wx-charts.js进行二次开发，满足可视化图形开发需求</p>
                <p>3、封装utils基础函数库，实现一些常用的基础功能，例如手机号码验证，防抖、节流，随机字符串，日期格式化等</p>
            `
        }
    ],
    works: [
        {
            name: '科大讯飞股份有限公司',
            through: '2016年6月至今',
            desc: `
                <p>1、主要负责讯飞E听说产品线的前端开发工作；</p>
                <p>2、参与前端工程化建设，优化开发流程；</p>
                <p>3、参与项目评审，需求评估，提出合理的解决方案；</p>
                <p>4、负责前端项目上线：通过iBuild编写前端构建命令，配置代码静测，最终将代码上传到发布机，同步更新到线上服务器；</p>

            `
        }
    ]
}