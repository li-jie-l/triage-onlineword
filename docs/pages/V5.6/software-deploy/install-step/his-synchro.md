---
lang: zh-CN
---

[[TOC]]

## 4.1 升级需求

HIS需要同步以下数据到分诊：<br>

<table>
    <tr>
        <td style="width:30vw;">1.基础数据</td>
        <td style="width:70vw;">医院信息<br/>职工信息<br/>科室信息<br/>医生科室对应</td>
    </tr>
    <tr>
        <td>2.业务数据</td>
        <td>科室排班信息<br/>坐诊类型<br/>挂号/退号数据</td>
    </tr>
</table>

同步业务数据之前，需升级HIS前台需求（[详细点击这里](/pages/V5.6/software-deploy/deployment-file.html#_2-部署文件下载)）。<br>
升级前请确认，<br/>
1. HIS前台版本大于`v2101`，HIS库查询参数`1882`是否存在，并且查询HIS库存储`usp_yy_businessproxy_b202fztb`是否存在。均存在则表示已包含待升级需求<br/>
```sql
select * from YY_CONFIG where id='1882'

sp_helptext 'usp_yy_businessproxy_b202fztb'
```

2. <font style="color:red">HIS前台版本小于`v2101`，请联系`HIS测试部`同事</font>，确认对应版本是否支持升级当前需求

## 4.2 同步基础数据

同步基础数据有三种方式，根据现场情况，选其一。

1. 通过HIS前台程序同步;
2. 通过MDM平台同步；
3. 通过分诊提供的存储同步；

his提供了MDM主数据实施文档，[点此处下载](/download/MDM主数据实施帮助文档.doc)。我们也收录了一些his同步遇到的问题，可以[点击查看解决方案](/pages/V5.6/faq/his-synchro/his-synchro.md)

### 4.2.1 通过HIS前台程序同步

#### 4.2.1.1 订阅方维护

1. 新增一条订阅方信息：<br>
进入his程序打开`系统配置>设置>订阅方维护`，新增订阅方信息，如图：

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/订阅方维护.png" alt="">
 <span>图4-2-1-1</span>
</div>

订阅方名称：`HSFZT`，接口地址：`http://ip:端口/api/Hisinterface/acceptNotice`。 
ip、端口是部署的[HIS同步服务地址](/pages/V5.6/software-deploy/install-step/install-serverconfig.html#配置信息)。<br/>
<font style="color:#ff3030">注意连接不要写错，其他项参考截图</font>

 
2. 点击<button>启用</button>，生效。

#### 4.2.1.2 模型启用

在`系统配置>设置>主数据模型权限配置`中启用模型，选择对应模型，点击<button>保存单行</button>。确保主数据表`YY_JBCONFIG
、YY_ZGBMK、YY_KSBMK、SF_YS_YSKSDY`都勾选上。
<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/数据同步-模型启用.png" alt="">
 <span>图4-2-1-2</span>
</div>

<font style='color:#FF3030'>注意：如果界面上没有`SF_YS_YSKSDY`，可手动添加：</font>
```sql
--表中tablename 为YY_JBCONFIG、YY_KSBMK 、YY_ZGBMK、SF_YS_YSKSDY 中invocarion 字段是否为1
select * from YY_MDMSET where tablename in ('YY_JBCONFIG','YY_KSBMK' ,'YY_ZGBMK','SF_YS_YSKSDY')
--如果没有SF_YS_YSKSDY表的数据，可直接新增一条
insert YY_MDMSET(mode,modename,dllname,procname,tablename,invocation)
select 'SF_YS_YSKSDY','医生科室对应','','','SF_YS_YSKSDY',1
```
#### 4.2.1.3 模型与表关联

在`系统配置>设置>消息种类与表对应`中，
1. 检查是否存在`YY_JBCONFIG、YY_ZGBMK、YY_KSBMK、SF_YS_YSKSDY`这四张表的消息种类；<br>
2. 如若不存在：点击<button>新增</button>，输入【消息种类名称】，回车选择【对应表名】，点击<button>保存</button>，并点击<button>启用</button>保障数据已生效。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/消息种类与表对应.png" alt="">
 <span>图4-2-1-3</span>
</div>

#### 4.2.1.5 消息订阅情况

在`系统配置>设置>消息订阅情况`,<br>

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/消息订阅情况.png" alt="">
 <span>图4-2-1-4</span>
</div>

1. `消息种类名称` 输入框分别搜索需要同步的消息：`医院信息、科室、职工、医生科室对应`，勾选在[4.2.1.1 订阅方维护](/pages/V5.6/software-deploy/install-step/his-synchro.html#_4-2-1-通过his前台程序同步)
中添加的订阅方；<br>
2. 点击<button>保存</button>。<br>

::: danger 注意
1.只有点击过<button>保存</button>之后，接口方式名称才会变成webapi；<br>
2.如果保存之后，还是webservice：请去掉勾选保存，再勾选上保存一次；一定要确保接口方式名称为webapi；
:::

#### 4.2.1.5 消息快速订阅

在`系统配置>设置>消息快速订阅`,<br>

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/消息快速订阅.png" alt="">
 <span>图4-2-1-5</span>
</div>

1. 查看`HSFZT`的，是否勾选。

#### 4.2.1.6 消息补生成

在`系统配置>设置>MDM消息补生成`中，双击选中需要同步的消息种类，可以选择单条信息，点击<button>同步单条</button>或<button>同步当前</button>，同步所有勾选的表数据。<br>

::: danger 注意
1.请先同步医院信息，再同步职工信息、科室信息，最后同步医生科室对应；<br>
2.建议先单条，看下是否可以同步成功；然后再批量同步；
:::

在分诊库中查询，看是否有数据同步。

```sql
--在分诊库中查询，看是否有数据同步
select * from YY_FZ_HOSJBCONFIG --
select * from YY_FZ_ZGBMK
select * from YY_FZ_KSBMK
select * from YY_FZ_YSKSDY
```

### 4.2.2 通过MDM平台同步

<font style="color:#ff3030">如果现场没有mdm平台系统，此同步方式不用考虑。</font><br/>
将分诊his同步服务接口（如：`http://ip:端口/api/Hisinterface/acceptNotice`）交给MDM管理人员，维护到MDM中，具体操作示例如下：

::: tip 注意
`http://ip:端口/api/Hisinterface/acceptNotice`中的ip、端口为分诊部署的[HIS同步服务](/pages/V5.6/software-deploy/install-step/install-serverconfig.html#配置信息)的ip、端口
:::

#### 4.2.2.1 MDM系统配置

1. `基础管理>医疗机构系统>上海市吴淞中心医院>分诊管理系统>通知服务URL`设置为`http://ip:端口/api/Hisinterface/acceptNotice` 

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/MDM-系统配置.png" alt="">
 <span>图4-2-2-1-1</span>
</div>

2. `基础管理>数据权限>系统授权>上海市吴淞中心医院` 下面的分诊管理系统，系统、授予需要同步的数据模型订阅权限

#### 4.2.2.2 MDM中的操作

MDM中新增/修改/发布对应的模型数据后，同步到分诊系统

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/MDM-同步.png" alt="">
 <span>图4-2-2-2</span>
</div>

### 4.2.3 通过分诊提供的存储同步

2022年3月30日后整理的发布包中有`THIS4同步`文件夹，可在THIS4库中执行以下脚本同步
```sql
exec usp_triage_sync_jbconfig --同步医院信息
exec usp_triage_sync_ksmbk --同步科室编码库
exec usp_triage_sync_zgbmk  --同步职工编码库
exec usp_triage_sync_ysksdy --同步医生科室对应
```

## 4.3 同步业务数据

我们也收录了一些his同步遇到的问题，可以[点击进行查看解决方案](/pages/V5.6/faq/his-synchro/his-synchro.md)

### 4.3.1 坐诊类型、排班信息同步

1. 挂菜单

在`门诊挂号>新版预约相关>分诊坐诊排班信息同步`挂菜单

>分诊坐诊排班信息同步：<br/>
    dll：yy_fzjk_zzpbtbjk.dll，<br/>
    引出函数：fjkfzzzpbtb<br/>

2. 打开界面，在`分诊台同步url`处输入地址：`http://ip:端口/api/Hisinterface/acceptNotice`，
ip、端口是部署的[HIS同步服务地址](/pages/V5.6/software-deploy/install-step/install-serverconfig.html#配置信息)(<font style="color:#ff3030">注意连接不要写错</font>)

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/同步数据-排班信息.png" alt="">
 <span>图4-2-1</span>
</div>

3. 在`坐诊类型同步`tab页，点击<button>同步坐诊类型</button>；
4. 在`排班信息同步`tab页，点击<button>同步排班信息</button>；

### 4.3.2 挂号/退号数据同步
1. 参数1882设置为分诊同步地址：`http://ip:端口/api/Hisinterface/acceptNotice`，
ip、端口是部署的[HIS同步服务地址](/pages/V5.6/software-deploy/install-step/install-serverconfig.html#配置信息)(<font style="color:#ff3030">注意连接不要写错</font>)

```sql
--设置后执行查看
select * from YY_CONFIG where id='1882'
```

2. `门诊挂号->日常工作->挂号登记`挂号后数据，会同步到分诊系统。

挂号后可在分诊库中查询，挂号数据否同步 jlzt: 0 正常 1 退号

```sql
-- 在分诊库中查询，看是挂号数据否同步 jlzt: 0 正常 1 退号
select * from YY_FZ_MZJHJLK
```

## 4.4 上线前同步数据脚本校验

 正式上线前请[前往此处](/pages/V5.6/software-deploy/install-step/check-script.html)此脚本来检验，所有基础和业务数据是否完成同步
 
