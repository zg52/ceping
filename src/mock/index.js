import Mock from 'mockjs'
 Mock.mock('https://bj.wdzxx.com/getList', {
  lists: {
      //  第一题
      ones: [
        {
          tit: "你的性格属于哪种类型？",
          oneXs: [
            {
              tit: "内向"
            },
            {
              tit: "外向"
            },
            {
              tit: "中性"
            }
          ]
        }
      ],
      //  第二题
      twos: [
        {
          tit: "毕业旅行，你希望的目的地人文环境？",
          twoXs: [
            {
              tit: "粗犷大气",
              des: "meiguo"
            },
            {
              tit: "自然优雅",
              des: "yingguo"
            },
            {
              tit: "科技新潮",
              des: "jianada"
            },
            {
              tit: "滨海风情",
              des: "aozhou"
            }
          ],
          // 国外标识
          guowaiMark: ""
        }
      ],
      //  第三题
      threes: [
        {
          tit: "班级组织毕业旅行，通常我最可能负责？",
          threeXs: [
            {
              tit: "策划旅游行程和景点，接洽旅行社或酒店"
            },
            {
              tit: "研究当地特色美食，订好每天吃什么"
            },
            {
              tit: "收集费用"
            }
          ]
        }
      ],

      //  第四题
      fours: [
        {
          tit: "你的兴趣爱好是什么？",
          fourXs: [
            {
              tit: "听歌唱歌"
            },
            {
              tit: "上网、打游戏"
            },
            {
              tit: "画画"
            },
            {
              tit: "看小说"
            },
            {
              tit: "运动"
            },
            {
              tit: "其他"
            }
          ]
        }
      ],
      //  第五题
      fives: [
        {
          tit: "在班级活动中你扮演的角色是？",
          fiveXs: [
            {
              tit: "决策者"
            },
            {
              tit: "策划者"
            },
            {
              tit: "多向沟通者"
            },
            {
              tit: "执行者"
            }
          ]
        }
      ],
      //  第六题
      sixs: [
        {
          tit: "在家休息，你会看哪部剧",
          sixXs: [
            {
              tit: "老友记"
            },
            {
              tit: "生活大爆炸"
            },
            {
              tit: "唐顿庄园  "
            },
            {
              tit: "绝命毒师"
            },
            {
              tit: "权力的游戏"
            }
          ]
        }
      ],
      //  第七题
      sevens: [
        {
          tit: "您在选择学校时所考虑的主要因素是什么",
          sevenXs: [
            {
              tit: "气候条件"
            },
            {
              tit: "较高的学术水平"
            },
            {
              tit: "风俗习惯"
            },
            {
              tit: "优越的基础教学设施"
            },
            {
              tit: "历史和文化"
            },
            {
              tit: "生活费用"
            },
            {
              tit: "其他"
            }
          ]
        }
      ],
      //  第八题
      eights: [
        {
          tit: "我小时候经常把家里闹钟拆开，想看个究竟",
          eightXs: [
            {
              tit: "是，还能原封不动装回去"
            },
            {
              tit: "是，然而复原之后总会剩下几个零件"
            },
            {
              tit: "否，没想过"
            }
          ]
        }
      ],
      //  第九题
      nines: [
        {
          tit: "玩狼人杀的时候我的通常状态是？",
          nineXs: [
            {
              tit: "处于主导地位的老司机，经常死于话多/太会玩"
            },
            {
              tit: "慢热型，发挥时好时坏，自己做坏人时会有点紧张"
            },
            {
              tit: "深藏功与名的幕后黑手，一脸单纯，却总能赢到最后"
            }
          ]
        }
      ],
      // 第十题

      tens: [
        {
          tit: "外出游玩，你会去哪？",
          tenXs: [
            {
              tit: "科技馆",
              zy: "理工类",
              zy1: "Science and Engineering",
              school: "清华大学",
              school0: "MIT", //美国-麻省理工
              school1: "Oxford", //英国-牛津
              school2: "UofT", //加拿大-多伦多
              school3: "USYD" //澳大利亚-悉尼
            },
            {
              tit: "游乐场",
              zy: "管理类",
              zy1: "Management",
              school: "交通大学",
              school0: "Harvard", //美国-哈弗
              school1: "Cambridge", //英国-剑桥
              school2: "uOttawa", //加拿大-渥太华
              school3: "USYD" //澳大利亚-悉尼
            },
            {
              tit: "电影院",
              zy: "艺术类",
              zy1: "Arts",
              school: "复旦大学",
              school0: "Berklee", //美国-伯克利音乐
              school1: "UAL", //英国-伦敦艺术
              school2: "UofT", //加拿大-多伦多
              school3: "UNSW" //澳大利亚-新南威尔士
            },
            {
              tit: "图书馆",
              zy: "文化类",
              zy1: "Culture",
              school: "北京大学",
              school0: "Yale", //美国-耶鲁
              school1: "Oxford", //英国-牛津
              school2: "UofT", //加拿大-多伦多
              school3: "UNSW" //澳大利亚-新南威尔士
            }
          ]
        }
      ]
  }
})
