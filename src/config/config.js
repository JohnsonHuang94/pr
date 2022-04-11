import avatar from '@/assets/avatar.png'
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
            link: 'https://teacher.ets100.com/',
            desc: `
                <p>1、/p>
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