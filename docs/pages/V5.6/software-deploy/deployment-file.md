---
lang: zh-CN
---

[[TOC]]

## 1.部署流程

<br/>

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/soft-deploy/deployment-file/部署流程.png" alt="">
 <span>图1</span>
</div>

## 2.部署文件下载

需要下载文件：

<table>
    <tr>
        <th style="width:15vw;"></th>
        <th style="width:20vw;">程序/功能</th>
        <th style="width:38vw;">ftp路径</th>
        <th style="width:27vw;">备注</th>
    </tr>
    <tr>
        <td rowspan="2">护士分诊</td>
        <td>卫宁护士分诊台软件V5.6.2108</td>
        <td></td>
        <td>2021年9月份发布</td>
    </tr>
    <tr style="font-size:16px;color: #FF3030;">
        <td>V5.6.2108--包含升级包完整版</td>
        <td></td>
        <td>包含自发布版本后的所有需求变更</td>
    </tr>
    <tr>
        <td rowspan="2">HIS前台</td>
        <td>挂号退号</td>
        <td>
        需求：539701<br/>
        需求：578805<br/>
        </td>
        <td>
        先升级539701，后升级578805；<br/>注意有重复升级内容
        </td>
    </tr>
    <tr>
        <td>排班信息</td>
        <td>
        需求：554417<br/>
        需求：572154<br/>
        </td>
        <td>
        先升级554417，后升级572154；<br/>注意有重复升级内容
        </td>
    </tr>
    <tr>
        <td>CIS前台</td>
        <td>诊间挂号</td>
        <td>
        需求：551119<br/>
        </td>
        <td>医院有此功能，则需升级</td>
    </tr>
</table>

::: danger 注意
1. 数据库支持SQL Server 2008 R2及以上版本；<br>
:::

::: tip 注意
1.`部署包.zip`：无需解压，使用部署工具部署时直接选择即可；<br/>
2.`Windows客户端`(window屏)：自带思必驰语音合成组件，如无法满足现场需求，使用捷通语音合成组件代替
:::
