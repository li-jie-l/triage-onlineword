---
lang: zh-CN
---

[[TOC]]


## 2.1 检查服务器IIS功能

1. 未添加IIS功能，[查看教程添加](/pages/V5.6/faq/software-deploy/1.IIS%E5%8A%9F%E8%83%BD%E6%B7%BB%E5%8A%A0%E6%88%96%E6%A3%80%E6%9F%A5.html#_1-1-%E6%B7%BB%E5%8A%A0iis)；
2. 已添加IIS功能，[查看教程检查所需功能是否勾选](/pages/V5.6/faq/software-deploy/1.IIS功能添加或检查.html#_1-2-检查iis开启的功能项)；

## 2.2 安装部署工具

::: tip 注意
1. 部署工具依赖.Net Framework 4.8，[可点击下载](/download/dotNetFramework/ndp48-x86-x64-allos-enu.rar)，下载其他版本请点击[这里](https://dotnet.microsoft.com/en-us/download/dotnet-framework/net48#)；<br/>
2. 部署工具较之前版本做了很大调整，2022年5月7日之前获取的发布包，部署工具安装说明可前往[这里](/pages/V5.6/faq/software-deploy/旧版部署工具.md)
:::


1. 将`护士分诊部署工具`文件夹拷贝到服务器上，如`D:\护士分诊部署工具`
<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/soft-deploy/install-step/护士分诊部署工具文件夹.png" alt="">
 <span>图2-2-1</span>
</div>

2. 打开`护士分诊部署工具`文件夹，

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/soft-deploy/install-step/护士部署工具文件夹详情.png" alt="">
 <span>图2-2-2</span>
</div>

双击`TriageDeploy.exe`即可进入[3.部署护士分诊服务](/pages/V5.6/software-deploy/install-step/install-serverconfig.html)
