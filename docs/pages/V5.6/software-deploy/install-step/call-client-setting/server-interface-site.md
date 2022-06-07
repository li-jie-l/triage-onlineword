---
lang: zh-CN
---

[[TOC]]

## 4.2.1 网站搭建

`添加网站 webapi-callclient`并填写网站信息；

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/站点搭建-叫号客户端webapi.png" alt="">
 <span>图4-2-1</span>
</div>

①在`网站`处，鼠标右键>添加网站，此时会出现弹框让填写网站相关信息；<br/>
②填写网站名称`webapi-callclient`；<br/>
③选择项目路径`D:\V5.6发布包\4、叫号客户端\服务端\Winning.Triage.DocInterfaceApi`；<br/>
④选择本机IP，并设置端口`10003`；<br/>
⑤点击<button>确定</button>完成添加网站；

::: warning 注意
④中端口不能和其他端口重复
:::

## 4.2.2 基本配置

选择`应用程序池`，选中`②webapi-callclient`，进入基本设置界面，选择`.NET FRAMEWORK 4.0`版本。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/站点搭建-叫号客户端webapi-基本设置.png" alt="">
 <span>图4-2-2</span>
</div>

①应用程序池；<br/>
②`webapi-callclient`应用程序；<br/>
③`.NET Framework`版本，我们需要选择`.NET FRAMEWORK 4.0`；<br/>
④点击<button>确定</button>完成配置；

## 4.2.3 高级设置

在应用程序池`①webapi-callclient`，选择`②高级设置`。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/站点搭建-叫号客户端webapi-高级设置.png" alt="">
 <span>图4-2-3</span>
</div>

配置`启用32位应用程序`值为`True`

## 4.2.4 配置数据库

打开`D:\V5.6发布包\4、叫号客户端\服务端\Winning.Triage.DocInterfaceApi\Xml\DatabaseSetting.exe`文件，`KEY值`输入`WNFZ`,并选择现场`WINFZK`库。先<button>测试</button>，再点击<button>确定</button>。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/数据库配置-WNFZ.png" alt="">
 <span>图4-2-4</span>
</div>

①`KEY值`必须配置为`WNFZ`；<br/>
②点击<button>确定</button>后，<button>关闭</button>窗体。再重新打开窗体，选中`WNFZ`，确认配置是否成功；

## 4.2.5 搭建成功

浏览网页`http://172.17.17.54:10003`，如下则为搭建成功：

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/站点搭建-叫号客户端webapi-浏览.png" alt="">
 <span>图4-2-5</span>
</div>



