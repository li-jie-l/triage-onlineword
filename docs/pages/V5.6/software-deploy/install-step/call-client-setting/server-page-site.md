---
lang: zh-CN
---

[[TOC]]

## 4.3.1 修改页面配置文件

[4.2服务端-接口站点](/pages/V5.6/software-deploy/install-step/call-client-setting/server-interface-site.html)
搭建的访问地址为:`http://172.17.17.54:10003`。<br/>
打开`D:\V5.6发布包\4、叫号客户端\服务端\triage\dist\js\app-config.js`文件，

```javascript
/**
 * 1.项目配置
 * @type {{localServe: string}}
 */

var PROJECT_CONFIG = {
  localServer: "http://192.168.26.61:10001", // 替换ip、端口
  webSocket: "ws://192.168.26.61:10086/call", //仅替换ip
  initWebSocket: "http://192.168.26.61:10001" //替换ip、端口
};
```

替换IP、端口时，注意配置正确。
:::tip 注意
如果是搭建`页面站点`后修改app-config.js，此时需要重启`页面站点`网站及程序池。
具体参考[4.2服务端-接口站点](/pages/V5.6/software-deploy/install-step/call-client-setting/server-interface-site.html)
:::

## 4.3.2 网站搭建

`添加网站 web-callclient`并填写网站信息；

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/triage-screen-setting/server-page-site/add-site.png" alt="">
 <span>图4-3-2</span>
</div>

①在`网站`处，鼠标右键>添加网站，此时会出现弹框让填写网站相关信息；<br/>
②填写网站名称`web-callclient`；<br/>
③选择项目路径`D:\V5.6发布包\4、叫号客户端\服务端\callClient`；<br/>
④选择本机IP，并设置端口`10004`；<br/>
⑤点击<button>确定</button>完成添加网站；

::: warning 注意
④中端口不能和其他端口重复
:::

## 4.3.3 基本设置置

选择`应用程序池`，在`②web-callclient`处双击，进入配置界面，选择`.NET FRAMEWORK 4.0`版本。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/triage-screen-setting/server-page-site/select-framework-version.png" alt="">
 <span>图4-3-3</span>
</div>

①应用程序池；<br/>
②`webapi-callclient`应用程序；<br/>
③`.NET Framework`版本，我们需要选择`.NET FRAMEWORK 4.0`；<br/>
④点击<button>确定</button>完成配置；

## 4.3.4 高级设置

在应用程序池`①webapi-callclient`，鼠标右键，选择`②高级设置`。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/triage-screen-setting/server-page-site/open-advanced-settings.png" alt="">
 <span>图4-3-4</span>
</div>

配置`启用32位应用程序`值为`True`

## 4.3.5 搭建成功

浏览网页`http://192.168.26.61:10004/`，显示如下则视为搭建成功：

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/triage-screen-setting/server-page-site/open-site-success.png" alt="">
 <span>图4-3-5</span>
</div>

:::danger 注意
搭建成功后，需要在`分诊软件>门诊相关设置>参数管理`中配置参数`1002`为`http://172.17.17.54:10004`，否则客户端无法加载页面。
:::
