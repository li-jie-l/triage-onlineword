---
lang: zh-CN
---

[[TOC]]

## 1.概述

医生站叫号(客户端)，应用于诊室医生叫号，可独立运行亦可以集成与门诊医生站。<br/>
点击“下一个”进行医生站叫号，选择病人可进行结束就诊、错过就诊、取消就诊、转诊、置为检查中等操作。

## 2.登录
1.输入医生账号，根据医生科室对应，软件会根据当前用户账号筛选当前用户所能看诊的科室，<br/>
2.可登录多个科室，也可选择登录专家或普通进行登录，如登录普通，若存在当前医生登录科室的专家号，医生既可看普通号，又可看专家号；登录专家，则只能看登录科室的专家号。<br/>
3.登录专家时，如若发现错误，请检查当前医生登录科室的专家队列是否排班以及排班诊间是否与登录诊间相符合，可在 `分诊软件-门诊分诊-医生队列排班` 中查看。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/叫号客户端-登录.png" alt="">
 <span>图2-1</span>
</div>

## 3.功能菜单

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/叫号客户端-主页.png" alt="">
 <span>图3-1</span>
</div>

1.叫下一个：医生看诊完一个患者时，点击此按钮，叫号下一个患者进行就诊。<br/>
2.复呼：重复呼叫当前患者。<br/>
3.置为检查：患者看诊完，需要开设检查检验单的，将患者状态置为检查，根据分诊规则可重新召回到候诊队列。<br/>
4.错过就诊：患者没有及时来就诊，将患者错过就诊，根据分诊规则可重新召回到候诊队列。<br/>
5.刷新数据：刷新候诊队列。<br/>
6.接诊：接诊。<br/>
7.候诊队列：展示当前医生可看诊的所有候诊队列，专家队列标识了“专”图标。<br/>
8.暂停分诊：候诊队列的复选框未勾选时，当前队列暂停分诊。
9.设置：用来设置刷新时间以及是否交叉叫号。交叉叫号使用于医生登录多个队列，循环队列叫下一个。<br/>
10.精简模式：<br/>

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/叫号客户端-精简模式.png" alt="">
 <span>图3-2</span>
</div>
