'use strict';
const chinese = {
  "skip": "跳转到正文",
  "home": "首页",
  "research": "研究",
  "publications": "论文",
  "background": "学术背景",
  "aboutTitle": "关于我",
  "emailLabel": "邮箱",
  "footer": "更新于 2026 年 11 月 20 日",
  "bio1": "很高兴认识你！我是阮渝航（Yuhang Ruan），就读于<a href=\"https://www.nju.edu.cn/en/\">南京大学</a>与<a href=\"https://www.helsinki.fi/en\">赫尔辛基大学</a>的大气科学本科双学位项目，目前是四年级学生，师从<a href=\"https://as.nju.edu.cn/c4/55/c11341a771157/page.htm\">傅豪老师</a>。",
  "bio2": "我希望用统一的理论视角理解不同的自然现象，目前主要研究地球物理与天体物理流体动力学（GAFD）。",
  "bio3": "我对不同天体上的流体运动都感兴趣。在地球上，我关注不同条件下的对流，以及大气和海洋中不同尺度流动之间的相互作用。在行星科学方面，我尤其关注木星的极涡与急流、气态巨行星的大尺度环流以及行星气候。我也对天体物理盘和恒星大气感兴趣，为此学习了磁流体动力学。这些现象背后的数学同样吸引我，我选修了多门数学课程，希望将这些方法用到今后的研究中。",
  "bio4": "我也开展流体实验和数值模拟，自 2025 年夏季起一直是南京大学<a href=\"http://njugfd.org/home-Eng.html\">学生地球物理流体动力学实验室</a>的成员。",
  "researchTitle": "研究",
  "researchField": "地球物理与天体物理流体动力学（GAFD）",
  "furtherInterests": "我也希望进一步探索磁流体与天体物理盘，并结合数值模拟和实验研究这些问题。",
  "projectsTitle": "研究经历",
  "vortexTitle": "木星极地涡旋的形成",
  "dateVortex": "2025 年 12 月至今",
  "supervisorFu": "导师：<a href=\"https://as.nju.edu.cn/c4/55/c11341a771157/page.htm\">傅豪</a>",
  "vortexText": "构建了极区 γ 平面浅水模型，在其中引入随涡度变化的准随机对流。通过涡旋追踪和 Biot–Savart 分析诊断整体漂移。模拟表明，更强的对流反馈促进了涡旋增长和涡度屏蔽的形成，邻近与远处的流动对漂移的贡献方向相反。",
  "convectionTitle": "复杂地形上的对流组织化",
  "dateConvection": "2025 年 10 月至今",
  "convectionText": "在大学生创新训练计划中研究地形阻挡和摩擦如何影响华南沿海的中尺度对流组织。以浅水模型原型为基础，设计包含湿对流参数化和地形效应的理想化试验。",
  "labTitle": "旋转流体实验",
  "dateLab": "2025 年 6 月至今",
  "labText": "在南京大学学生地球物理流体动力学实验室协助研制旋转水槽，开展泰勒柱、旋转沸腾流、β 效应和涡旋相互作用实验。",
  "monsoonTitle": "东亚夏季风预估中的内部变率",
  "dateMonsoon": "2025 年 6–8 月",
  "supervisorVeiga": "导师：Sandro M. Ferreira Veiga",
  "monsoonText": "在中芬科研训练项目中，通过经验正交函数分析北太平洋海表温度距平，识别太平洋年代际振荡（PDO）的位相，并比较 CMIP6 MIROC6 模拟中不同位相下的降水合成结果。三个排放情景下的降水预估存在差异，PDO 正负位相在中国东部造成的降水距平总体呈相反分布。",
  "talksTitle": "部分学术报告",
  "publicationsTitle": "论文",
  "preprintsTitle": "预印本",
  "paperStatus": "已投稿至《The Planetary Science Journal》。",
  "backgroundTitle": "学术背景",
  "educationTitle": "教育经历",
  "educationUniversity": "南京大学与赫尔辛基大学",
  "educationDate": "2023 年 9 月入学，预计 2027 年 7 月毕业",
  "educationDegree": "大气科学本科双学位项目",
  "gpa": "总 GPA：4.51/5.00",
  "skillsTitle": "技能",
  "computing": "编程与科学计算",
  "languages": "语言",
  "languagesList": "中文（普通话、粤语）、英语",
  "coursesTitle": "部分课程",
  "math": "数学与统计",
  "mathList": "数学分析、高等代数、抽象代数、李群与李代数、概率论与数理统计、常微分方程、偏微分方程估计、多复变与复几何初步",
  "physics": "物理与化学",
  "physicsList": "数学物理方法、流体力学、磁流体动力学、量子力学、普通化学",
  "atmosphere": "大气科学",
  "atmosphereList": "天气学原理、动力气象学、数值天气预报、雷达与卫星气象学、气候学基础、大气环流、气溶胶物理",
  "planetary": "地球与行星科学",
  "planetaryList": "地球系统科学导论、地表参数遥感、天文学入门、行星科学基础（旁听）",
  "scientific": "科学计算",
  "scientificList": "科学计算 I 和 II、数据结构与算法、大气科学机器学习导论、偏微分方程数值方法",
  "honorsTitle": "荣誉与奖励",
  "honor1": "第二届未来大气科学论坛优秀报告奖",
  "honor2": "2026 年中国行星科学大会优秀论文奖",
  "honor3": "2024 年美国大学生数学建模竞赛（MCM）Finalist",
  "honor4": "国家奖学金",
  "honor5": "人民奖学金一等奖",
  "honor6": "南京大学优秀学生",
  "serviceTitle": "校园与科普服务",
  "topic1": "对流与降水",
  "topic2": "波动、涡旋与环流",
  "topic3": "巨行星系统",
  "topic4": "气候变率",
  "topic5": "数值模拟",
  "service1Role": "学生代表",
  "service1Organization": "南京大学第二十八次学生代表大会",
  "service1Dates": "2024 年 10 月",
  "service2Role": "学业代表",
  "service2Organization": "南赫学院 2023 级",
  "service2Dates": "2024 年 9 月至今",
  "service3Role": "秘书长",
  "service3Organization": "南京大学苏州校区动漫社",
  "service3Dates": "2025 年 8 月至 2026 年 8 月",
  "service4Role": "干事",
  "service4Organization": "南京大学苏州校区天文爱好者协会",
  "service4Dates": "2024 年 8 月至 2026 年 8 月",
  "service5Role": "成员",
  "service5Organization": "南京大学苏州校区学生社团管理部门",
  "service5Dates": "2024 年 9 月至 2025 年 6 月",
  "service6Role": "科普志愿者",
  "service6Organization": "江苏省科技馆",
  "service6Dates": "2023 年 10 月至 2024 年 1 月"
};
const nodes = [...document.querySelectorAll('[data-i18n]')];
const english = new Map(nodes.map(node => [node, node.innerHTML]));
const toggle = document.getElementById('language-toggle');
const englishTitle = document.title;
let language = 'en';
function setLanguage(next) {
  language = next === 'zh' ? 'zh' : 'en';
  for (const node of nodes) node.innerHTML = language === 'zh' ? (chinese[node.dataset.i18n] ?? english.get(node)) : english.get(node);
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  const current = document.querySelector('nav [aria-current="page"]');
  document.title = language === 'zh' ? 'Yuhang Ruan | ' + current.textContent : englishTitle;
  toggle.querySelector('.lang-en').classList.toggle('selected', language === 'en');
  toggle.querySelector('.lang-zh').classList.toggle('selected', language === 'zh');
  toggle.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换为中文');
  document.getElementById('language-status').textContent = language === 'zh' ? '已切换为中文' : 'Language changed to English';
  try { localStorage.setItem('yuhang-language', language); } catch {}
}
toggle.addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
try { if (localStorage.getItem('yuhang-language') === 'zh') setLanguage('zh'); } catch {}
