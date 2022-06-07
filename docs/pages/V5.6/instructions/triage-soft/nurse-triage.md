---
lang: zh-CN
---

[[TOC]]
 
## 3.1 护士分诊台

护士分诊对应两种分诊模式，签到模式和非签到模式。<br/>
>签到模式：根据分诊规则设置，患者采用按照先到现就诊的模式进行就诊，或签到后仍按照ghhx的先后顺序进行就诊。<br/>
 非签到模式： 患者按照ghhx的先后顺序进行就诊。

### 3.1.1 签到模式

根据分诊规则设置，患者采用按照签到号序进行就诊，或签到后仍按照挂号号序的先后顺序进行就诊。<br/>
签到模式需要勾选“是否采用签到模式”复选框
<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/分诊排队模式.png" alt="">
 <span>图3-1-1-1</span>
</div>

签到模式下，患者列表展示为两列，一列为已签到列表，一列为未签到列表。患者挂号后进入未签到列表，需签到后，才会进入等候队列，等待医生叫号。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/护士分诊台-签到模式.png" alt="">
 <span>图3-1-1-2</span>
</div>

患者签到后，在等候中的排序与分诊规则设置中的“分诊排队模式”有关：<br/>
<font style="color:#ff3030;">案例一：</font>签到模式下，按照挂号号序，预约号始终优先现场号。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/分诊规则设置-按照挂号号序.png" alt="">
 <span>图3-1-1-3</span>
</div>

患者签到后，预约的患者按照他们的挂号号序排序，并且排在非预约患者的前面，非预约患者也按照挂号号序排序。如下图所示

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/签到模式-预约号优先现场号.png" alt="">
 <span>图3-1-1-4</span>
</div>

<font style="color:#ff3030;">案例二：</font>签到模式下，按照签到号序，预约不优先，非精准预约。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/分诊规则-非精准预约.png" alt="">
 <span>图3-1-1-5</span>
</div>

患者签到后，从1开始重新生成号序，并按照他们的签到顺序排序

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/签到模式-非精准预约.png" alt="">
 <span>图3-1-1-6</span>
</div>

<font style="color:#ff3030;">案例三：</font>签到模式下，按照签到号序，精准预约。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/分诊规则-精准预约.png" alt="">
 <span>图3-1-1-7</span>
</div>

HIS排班坐诊类型如下图所示

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/HIS排班坐诊类型-签到模式.png" alt="">
 <span>图3-1-1-8</span>
</div>

签到后，根据患者的挂号时间段和签到时间点综合判断，所处的his排班时间段。例如：当前时间段为14:00-15:00，现有患者a\b\c挂号时间段也是此时间段（14:00-15:00）的，那么签到后，重新生成的就是按照此时间段的号序前缀重新生成号序；上一个时间段（13:00-14:00）的迟到患者d在此时间段（14:00-15:00）内签到，也是按照这个时间段的前缀生成号序，且排在当前时间段正常签到的最后；排序为a、b、c、d

### 3.1.2 非签到模式 

患者挂号后，即进入等候中，按照挂号号序的顺序排序。如果设置了“预约号始终优先现场号”那么预约号排在现场号前面。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/非签到模式-预约优先.png" alt="">
 <span>图3-1-2-1</span>
</div>
<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/护士分诊台-非签到模式.png" alt="">
 <span>图3-1-2-2</span>
</div>

### 3.1.3 功能操作项 

1. 搜索框：可查询当天、三天内和一周内的数据，支持磁卡、保障卡、病历号、身份证、姓名、IC卡搜索
<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/护士分诊台-搜索框.png" alt="">
 <span>图3-1-3-1</span>
</div>

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/护士分诊台-搜索弹框.png" alt="">
 <span>图3-1-3-2</span>
</div>

2. 切换诊区：在右上角区域，可切换当前职工所对应的诊区

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/护士分诊台-切换诊区.png" alt="">
 <span>图3-1-3-3</span>
</div>

3. 队列搜索、筛选：输入科室代码、名称可搜索相应队列；也可根据午别进行搜索

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/护士分诊台-队列.png" alt="">
 <span>图3-1-3-4</span>
</div>

4. 专家队列停诊开诊：专家队列框的右上角有停诊开诊按钮，停诊后医生不可呼叫下一个患者。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/护士分诊台-停诊开诊.png" alt="">
 <span>图3-1-3-5</span>
</div>

5. 签到：签到模式下，未签到列表的患者可通过此功能签到，或刷卡签到。
6. 取消签到：常用于护士误操作后的场景，只要患者未就诊，处于等候或者诊室候诊状态下均可操作，回滚到未签到时的状态。
7. 指定医生：处于等候或者诊室候诊的未就诊患者，可通过此功能来选择同科室的其他医生进行就诊。
8. 优先：设置优先的患者，会置为其他非优先患者的前面。且优先的排序与优先类型的优先级别有关，级别越高，越优先，同一级别的优先患者，按照优先顺序排序。
9. 取消就诊：弃号
10. 呼叫：诊室候诊的患者才有此操作，护士用来呼叫提醒患者诊室候诊。
11. 手动分诊：非签到模式下，分诊方式为手动分诊时，护士通过此操作将候诊中患者手动置为诊室候诊。先分的先就诊。
12. 队列调整：可以将等候中的患者位置前移。
13. 自动分诊：分诊方式设置了自动分诊的话，医生叫号后，自动触发。
14. 召回：过号、检查中的患者可通过此操作重新进入到候诊中。有多种召回方式，方式不同插队位置也有所不同。
15. 广播：发布紧急通知。诊区屏会进行播报。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/护士分诊台-广播.png" alt="">
 <span>图3-1-3-5</span>
</div>

16. 设置：可设置队列刷新时间，打印是否进行设计等

## 3.2 患者列表

展示当前职工所管辖的所有诊区的患者，可根据时间（当天/三天内/一周内/不限日期）、午别等来查询患者信息。不限日期不支持模糊搜索且必须补全患者信息方可查询

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/患者列表.png" alt="">
 <span>图3-2-1</span>
</div>

功能说明：
1. 候诊详情：查看患者操作流水记录。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/患者列表-候诊详情.png" alt="">
 <span>图3-2-1</span>
</div>

## 3.3 医生科室队列及排班

展示普通科室和专家队列的排班情况。护士分诊台左侧的队列显示与否和此功能下的队列是否排班有关。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/医生科室队列及排班.png" alt="">
 <span>图3-3-1</span>
</div>

功能说明：
1. 新增：选择科室与日期，即可新增一条专家队列。坐诊日期以星期为单位，选中时有颜色，代表开诊，否则停诊。可以为医生选择坐诊诊间，点击
<img src="/image/5.6img/医生科室队列及排班-铅笔.png" alt="">即可操作，选择当前诊区的诊间或者是其他诊区的诊间。选定坐诊诊间后，医生使用叫号客户端出诊该科室时必须在该诊间坐诊，否则登录不成功。注意：同一医生同一科室不可重复添加队列。
2. 编辑：仅可编辑排班情况和坐诊诊间。
3. 删除：删除队列。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/医生科室队列及排班-新增.png" alt="">
 <span>图3-3-2</span>
</div>

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/医生科室队列及排班-选择诊间.png" alt="">
 <span>图3-3-3</span>
</div>

## 3.4 急诊分诊台

急诊分诊台护士是用于展示和管理急诊诊区患者的功能界面。护士可登录的诊区为在【诊区管理】"分诊业务归属"中设置急诊分诊的诊区。同护士分诊台一样，左侧用于展示急诊诊区队列，右侧用于展示患者信息。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/急诊分诊台.png" alt="">
 <span>图3-4-1</span>
</div>

功能说明：
1. 优先/设置级别：调整分诊中的急诊分级级别。候诊中患者是按照急诊分级来排序的。
2. 指定医生：为患者指定医生，候诊中患者的操作，指定医生的患者，只能由该医生接诊。
3. 手动分诊： 急诊诊区的【分诊规则设置】为手动分诊时，可通过手动分诊方式，为医生分配患者，先分诊的先就诊。
4. 结束就诊： 改变患者的就诊状态。
5. 召回：过号或检查患者通过此功能重新进入候诊队列。
