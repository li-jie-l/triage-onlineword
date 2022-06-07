---
lang: zh-CN
---

[[TOC]]

## 1.1 WINFZK库
### 1.1.1 创建

新建数据库`WINFZK`，排序规则选择`Chinese_PRC_BIN`。`若已搭建分诊5.6环境，此步骤可省略`

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/soft-deploy/install-step/数据库排序规则.png" alt="">
 <span>图1</span>
</div>

### 1.1.2 升级作业

若完整包中无`作业`文件夹，则已包含在`部署包.zip`中，无需单独执行作业脚本。<br>
用部署工具部署`护士分诊服务`完成后，再在`WINFZK`库下，执行`V5.6.2108\作业\V5.6门诊护士站-年表数据迁移.sql`。

## 1.2 THIS4库
### 2.1.1 升级脚本
用部署工具部署`护士分诊服务`完成后，在`THIS4`库下，执行`THIS4同步`文件夹下的脚本:
1. `usp_kqyy_triage_zzghtb.sql`为补传挂号数据脚本
2. `usp_triage_sync_jbconfig.sql、usp_triage_sync_ksmbk.sql、usp_triage_sync_ysksdy.sql、usp_triage_sync_zgbmk.sql`分别为分诊提供的同步his基础数据
医院信息、科室编码、医生科室对应以及职工编码库的脚本，防止在后续用其他HIS基础数据同步方式实施过程中卡壳的情况。
3. `V5.6门诊护士站-补传挂号数据.sql`补传数据作业
