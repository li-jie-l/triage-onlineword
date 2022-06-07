---
lang: zh-CN
---

[[TOC]]

## 5.5.1 环境要求

1. Android4.4及以上系统；  
2. 设备有时间记忆模块，不能每次开机时间恢复出厂时间；

## 5.5.2 常规安卓设备

### 5.5.2.1 语音库安装

1. 安装，打开`D:\mzhsz\客户端\Android`文件夹（[5.1 分诊屏](/pages/V5.5.2009/software-deploy/install-step/triage-screen-setting/triage-screen.html#介绍)中拷贝过来的）。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/triage-screen-setting/client-android-site/winning-speech-apk.png" alt="">
 <span>图5-5-2-1-1</span>
</div>

借助于U盘、鼠标，将`D:\mzhsz\客户端\Android\卫宁语音库.apk`安装到Android设备中。安装成功后在设备的`设置>语言和输入法>文字转语音(TTS)输出`系统TTS引擎切换为`WinningSpeech`。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/triage-screen-setting/client-android-site/select-winning-speech.png" alt="">
 <span>图5-5-2-1-2</span>
</div>

2. 语音库使用，在Android设备上打开`WinningSpeech`，首次使用需要<font style='color:#FF3030'>连接互联网，完成语音库授权</font>，之后使用无需连接。授权成功时，App启动会有授权提示信息，点击<button>播放</button>按钮，能够发声叫号。如下：

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/triage-screen-setting/client-android-site/auth-success.png" alt="">
 <span>图5-5-2-1-3</span>
</div>

:::danger 注意
1.连接外网授权时，部分厂商无线网络、有线网络不能同时启用，需要拔掉网线或设备设置中禁用以太网<br/>
2.以下厂商设备，无法设置系统TTS引擎：<br/>
海信电视、长虹电视、荣耀盒子、小米盒子等，针对此类设备，处理参照 [5.5.4 兼容电视、盒子类设备](/pages/V5.5.2009/software-deploy/install-step/triage-screen-setting/client-android-site.html#_5-5-4-兼容电视、盒子类设备)。
:::

### 5.5.2.2 分诊屏配置

安装`D:\mzhsz\客户端\Android\分诊屏BS版.apk`，打开后输入[5.3 服务端-页面站点](/pages/V5.5.2009/software-deploy/install-step/triage-screen-setting/server-page-site.html#_5-3-4-搭建成功)地址`192.168.26.61:10002`：

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/triage-screen-setting/client-android-site/save-android-site-address.png" alt="">
 <span>图5-5-2-2-1</span>
</div>

点击<button>确定</button>按钮，进入如下界面，说明配置成功：

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/triage-screen-setting/client-window-site/dp-style1.png" alt="">
 <span>图5-5-2-2-2</span>
</div>

点击卫宁logo可进入设置界面，查看相关配置：

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/triage-screen-setting/client-android-site/dp-setting.png" alt="">
 <span>图5-5-2-2-3</span>
</div>



## 5.5.3 电视、Android盒子类设备

电视、Android盒子类设备无法设置`系统TTS引擎`，所以提供了[分诊屏BS版_电视使用.apk](/download/分诊屏BS版_电视使用.apk)。此时，设备只需安装这1个apk。
1. 安装`分诊屏BS版_电视使用.apk`后，连接外网。
点击<font style="color:blue;">点击授权语音库</font>，

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/triage-screen-setting/client-android-site/save-android-address-with-speech.png" alt="">
 <span>图5-5-3-1</span>
</div>

2.未授权的情况下，点击<button>语音库授权(未授权)</button>。界面会弹出语音库授权成功。此时点击播放按钮，能够正常发声就证明配置成功

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/triage-screen-setting/client-android-site/integration-auth-success.png" alt="">
 <span>图5-5-3-2</span>
</div>

之后操作，参考[5.5.2.2 分诊屏配置](/pages/V5.5.2009/software-deploy/install-step/triage-screen-setting/client-android-site.html#_5-5-2-2-分诊屏配置)。

## FAQ


