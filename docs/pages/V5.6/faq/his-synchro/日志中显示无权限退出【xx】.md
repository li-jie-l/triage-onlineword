---
lang: zh-CN
---

[[TOC]]

[←返回目录](/pages/V5.6/faq/his-synchro/his-synchro.md)

问题：日志中显示无权限退出【xx（表名）】<br/>
日志类似如下：
<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/his日志-无权限.png" alt="">
 <span>图1</span>
</div>

解决：
1. 查询表：select 1 from YY_MDMSET where tablename= "YY_JBCONFIG" and invocation= 1；
2. 如，表不存在tablename= "YY_JBCONFIG”的数据，则使用update.sql中添加模型数据；
3. 如，表存在tablename= "YY_JBCONFIG”的数据，但invocation=0，则在【主数据模型权限配置】中启用模型，参考4.3.3模型启用
