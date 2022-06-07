---
lang: zh-CN
---

[[TOC]]

## 5.4.1 环境要求

1. Windows 7及以上系统；  
2. .NetFramework4.5及以上；

## 5.4.2 依赖项安装

### 5.4.2.1 语音包
将[卫宁门诊分诊软件V5.5.2009版本\完整包\6、语音包安装](/pages/V5.5.2009/software-deploy/deployment-file.html#_1-部署文件下载)下文件在window系统安装，
注意：`期间会多次安装`。<br/>
安装后在`开始>程序>jTTS 4.0.1 专业版>jTTS 演示程序`，输入`请张三前往第一诊室就诊`，点击左下角<button>▶</button>能听到声音即可。

### 5.4.2.2 其他依赖项
依次安装`卫宁门诊分诊软件V5.5.2009版本\完整包\3、web版分诊屏\客户端\windows\依赖环境`下的插件。
1. NET框架\NDP452-KB2901907-x86-x64-AllOS-ENU.exe；
2. Cef依赖环境\vc_redist.x86.exe；
3. 谷歌浏览器81.0.4044.92_chrome_installer_32.exe（或者自己下载谷歌浏览器）；

## 5.4.3 分诊屏配置
打开`D:\mzhsz\客户端\windows\分诊window大屏`文件夹（[5.1 分诊屏](/pages/V5.5.2009/software-deploy/install-step/triage-screen-setting/triage-screen.html#介绍)中拷贝过来的）。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/triage-screen-setting/client-window-site/client-window-directory.png" alt="">
 <span>图5-4-3-1</span>
</div>

①`qyhisscreen.exe`屏程序入口，可发送快捷方式到桌面。或在window下设置程序自启动；<br/>
②`qyhisscreen.exe.Config`屏程序配置文件，内容如下：<br/>

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <startup> 
        <supportedRuntime version="v4.0" sku=".NETFramework,Version=v4.5.2"/>
    </startup>
  <appSettings>	
	<!--0-常规模式；1-调试模式；-->
    <add key="SetDebug" value="1"/>
	<!--配置屏运行在0-拓展屏;1-主屏-->
	<add key="SetScreen" value="0"/>
	<!--配置虚拟屏地址-->
    <!--<add key="LocalIP" value="172.17.17.82"/>--> 
    <!--已废弃，不可删除-->
    <add key="hospitalcode" value="MTIzMjA1ODE0NjcxNDA3OTVH"/>
    <!--已废弃，不可删除-->
    <add key="hospitalname" value="XXXXXX医院"/>
    <!--已废弃，不可删除-->
    <add key="stylescreen" value="1"/>
	<!--页面站点-TriageScreen地址-->
    <add key="ServerPATH" value="http://192.168.26.61:10002"/>
  </appSettings>
</configuration>
```

配置好，打开`qyhisscreen.exe`出现`样式一`界面，说明配置成功：

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/triage-screen-setting/client-window-site/dp-style1.png" alt="">
 <span>图5-4-3-2</span>
</div>

点击卫宁logo可进入设置界面，查看相关配置：

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/triage-screen-setting/client-window-site/dp-setting.png" alt="">
 <span>图5-4-3-3</span>
</div>

:::danger 注意
大屏保证每天重启一次，可通过系统定时开关机实现
:::

## FAQ
