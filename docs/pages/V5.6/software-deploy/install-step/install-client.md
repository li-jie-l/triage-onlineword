---
lang: zh-CN
---

[[TOC]]

客户端程序，在发布包的如下位置：

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/soft-deploy/install-step/客户端目录.png" alt="">
 <span>图1</span>
</div>

介绍如下：

<table>
    <tr>
        <th style="width:25vw;">程序</th>
        <th style="width:10vw;">设备系统</th>
        <th style="width:65vw;"></th>
    </tr>
    <tr>
        <td>护士分诊台</td>
        <td>window</td>
        <td>路径：<br/>xxx\Window客户端\publicexe\OutpatientTriage.exe</td>
    </tr>
    <tr>
        <td>叫号客户端</td>
        <td>window</td>
        <td>路径：<br/>xxx\Window客户端\publicexe\TriageCall.exe</td>
    </tr>
    <tr>
        <td rowspan="2">分诊屏</td>
        <td>window</td>
        <td>路径：<br/>
        xxx\Window客户端\publicexe\TriageScreen.exe<br/>
        xxx\Window客户端\publicexe\Winning.SoundPlay.exe<br/>
        </td>
    </tr>
    <tr>
        <td>Android</td>
        <td>
        路径：<br/>
        xxx\安卓屏\publicexe\分诊屏BS版.apk<br/>
        xxx\安卓屏\publicexe\卫宁语音库.apk<br/>
        </td>
    </tr>
    <tr>
        <td>签到机</td>
        <td>window</td>
        <td>路径：<br/>xxx\Window客户端\publicexe\TriageSignin.exe</td>
    </tr>
</table>

## 5.1 设置参数信息

1. HIS基础数据被同步后，用`谷歌浏览器`打开[3.4.5分诊台服务配置](/pages/V5.6/software-deploy/install-step/install-serverconfig.html#配置信息)中部署的`分诊台服务->前端`服务<br>

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/soft-deploy/install-step/分诊台页面-登录.png" alt="">
 <span>图5-1-1</span>
</div>

::: tip 注意
选择院区，系统默认分配了工号`00` 密码`00`；
:::

2. 打开`门急诊相关设置>参数管理`

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/soft-deploy/install-step/分诊台页面-参数管理路径.png" alt="">
 <span>图5-1-2</span>
</div>

3. 维护服务站点地址，<font style="color:#ff3030">这一步很重要，与客户端的使用密切相关。</font><br>
（免安装版服务端部署工具已写入站点相关参数配置，可不用配置）

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/soft-deploy/install-step/分诊台页面-参数管理配置.png" alt="">
 <span>图5-1-3</span>
</div>

维护`1001到1007`、`1017`、`1019`，共计9个参数。参考[3.4.5分诊台服务配置](/pages/V5.6/software-deploy/install-step/install-serverconfig.html#配置信息)

<table>
    <tr>
        <th style="width:25vw;">服务</th>
        <th style="width:10vw;">参数</th>
        <th style="width:10vw;">类型</th>
        <th style="width:55vw;">服务地址</th>
    </tr>
    <tr>
        <td rowspan="2">分诊台服务</td>
        <td>1001</td>
        <td>前端</td>
        <td>http://服务器ip:10011</td>
    </tr>
    <tr>
        <td>1005</td>
        <td>接口</td>
        <td>http://服务器ip:8120</td>
    </tr>
    <tr>
        <td rowspan="2">呼叫客户端</td>
        <td>1002</td>
        <td>前端</td>
        <td>http://服务器ip:10010</td>
    </tr>
    <tr>
        <td>1017</td>
        <td>接口</td>
        <td>http://服务器ip:8123</td>
    </tr>
    <tr>
        <td rowspan="2">分诊屏服务</td>
        <td>1003</td>
        <td>前端</td>
        <td>http://服务器ip:10014</td>
    </tr>
    <tr>
        <td>1004</td>
        <td>接口</td>
        <td>http://服务器ip:8125</td>
    </tr>
    <tr>
        <td>Nginx</td>
        <td>1006</td>
        <td>WebsocketPort配置</td>
        <td>http://服务器ip:10088</td>
    </tr>
    <tr>
        <td rowspan="2">签到机服务</td>
        <td>1007</td>
        <td>前端</td>
        <td>http://服务器ip:10012</td>
    </tr>
    <tr>
        <td>1019</td>
        <td>接口</td>
        <td>http://服务器ip:8127</td>
    </tr>
</table>

## 5.2 Windows系统安装软件依赖程序

window系统下`护士分诊台`、`叫号客户端`、`分诊屏`、`签到机`运行，依赖相关组件`发布包\客户端\Windows客户端\CefSharp依赖项`。请在客户端电脑安装：

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/cef依赖项.png" alt="">
 <span>图5-2</span>
</div>

## 5.3 部署护士分诊台

### 5.3.1 拷贝客户端

1. 拷贝`发布包\客户端\Windows客户端\publicexe`文件夹到目标电脑，路径例如：D:\V5.6发布包\3、客户端\Windows客户端\publicexe

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/客户端部署-目录路径.png" alt="">
 <span>图5-3-1</span>
</div>

2. `publicexe`文件夹上，`右键`去掉只读属性；

### 5.3.2 拷贝THIS前台文件

1. 护士分诊台如果要读`2-保障卡`、`3-IC卡`实体卡，需要将HIS前台以下文件拷贝到`publicexe`根目录下：

```batch
AESEncrypt.dll
DbConnectCom.dll
HisMiddleWare.ini
kwv40.ini
paycenter.dll
PayProxy.dll
WinningPayInterface.ini
WinningZfjkDataBaseConnectType.ini
ybmain_proxy.dll
```
    
His中`0203参数`开启的话，`paycenter.dll` 也是需要的。

2. 拷过来后，注册dll。`ybmain_proxy.dll`需要安装[his setup.exe客户端，点击下载](/download/his客户端Setup.rar)

建议两种注册方式，

方式一：找到`publicexe/0需要注册的接口.bat`文件，以管理员身份运行，自动注册<br/>
方式二：以管理员身份运行cmd，并输入regsvr32命令行依次注册`DbConnectCom.dll`、`ybmain_proxy.dll`、`paycenter.dll`、`payproxy.dll`

```batch
regsvr32 D:\V5.6发布包\3、客户端\Windows客户端\publicexe\DbConnectCom.dll
regsvr32 D:\V5.6发布包\3、客户端\Windows客户端\publicexe\ybmain_proxy.dll
regsvr32 D:\V5.6发布包\3、客户端\Windows客户端\publicexe\paycenter.dll  
regsvr32 D:\V5.6发布包\3、客户端\Windows客户端\publicexe\payproxy.dll
```    

::: tip 注意
1. 注册不成功可能是被360等杀毒软件非提醒拦截，可退出杀毒软件后重试
2. [ybmain_proxy注册失败，点击这里](/pages/V5.6/faq/triage-soft/注册ybmain_proxy失败.md)
:::

dll注册成功截图！

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/注册dll-1.png" alt="">
 <span>图5-3-2</span>
</div>

### 5.3.3 配置数据库

1. 配置分诊数据库

执行`publicexe\xml`目录下的`DatabaseSeting.exe`程序，并按照下图所示配置

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/数据库配置-路径.png" alt="">
 <span>图5-3-3-1</span>
</div>

KEY：`WNFZ`、数据库：`WINFZK`，先点击<button>测试</button>，测试成功后，点击<button>确定</button>

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/数据库配置-WNFZ.png" alt="">
 <span>图5-3-3-2</span>
</div>

2. 配置HIS数据库

执行`publicexe`目录下的`KWconfig.exe`程序，并按照下图所示配置

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/KWconfig路径.png" alt="">
 <span>图5-3-3-3</span>
</div>

部门代码：`dsquery`，数据库驱动：`mssql`

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/KWconfig配置.png" alt="">
 <span>图5-3-3-4</span>
</div>

### 5.3.4 打开护士分诊台

1. 谷歌浏览器打开`分诊台服务>前端`站点，[可在此处确认站点信息](/pages/V5.6/software-deploy/install-step/install-serverconfig.html#配置信息)。使用账号：00登录。根据示例教程，创建配置第一个测试诊区：
[演示配置一个诊区，点击这里](/pages/V5.6/faq/triage-soft/新增诊区、诊间、分诊屏、叫号客户端.html)

2. 配置完成后，双击程序打开护士分诊台`OutpatientTriage.exe`，如果出现如下界面，则表示配置成功：

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/程序介绍-分诊台程序.png" alt="">
 <span>图5-3-4-1</span>
</div>

## 5.4 部署叫号客户端

在`5.3 部署护士分诊台`完成后，`诊间电脑`运行叫号客户端程序`TriageCall.exe`，如下，表示成功:

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/程序介绍-叫号客户端程序.png" alt="">
 <span>图5-4-1</span>
</div>

::: tip 注意
更改系统显示大小，如放大到125%、150%、……。需要重启应用程序；
:::

## 5.5 部署window分诊屏

运行分诊屏程序`TriageScreen.exe`，如下，表示成功:

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
<img style="border: 2px #f5f5f5 solid" src="/image/5.6img/诊区屏样式二.png" alt="">
<span>图5-5-2</span>
</div>

## 5.6 部署Android分诊屏

系统要求，[详细点击这里](/pages/V5.6/software-deploy/hardware-environment.html#硬件配置)

### 5.6.1 常规设备

1. 安装`分诊屏BS版.apk`、`卫宁语音库.apk`

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/安卓程序目录.png" alt="">
 <span>图5-6-1</span>
</div>

2. 配置语音库

在设备的`设置>语言和输入法>文字转语音(TTS)输出`，首选引擎切换为`WinningSpeech`。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/安卓屏-语音库.png" alt="">
 <span>图5-6-2</span>
</div>

打开安装的`WinningSpeech`，点击<button style="color:#fff;background:#007BFF">试听</button>按钮，能够发声，即为成功。如下：

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/安卓屏-语音库设置.png" alt="">
 <span>图5-6-3</span>
</div>

3. 打开`分诊屏BS版`，输入`分诊屏服务>前端`地址，[可在这里查询](/pages/V5.6/software-deploy/install-step/install-serverconfig.html#配置信息)。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/soft-deploy/install-step/分诊屏-服务地址配置.png" alt="">
 <span>图5-6-4</span>
</div>

4. 点击确定按钮，进入如下界面，说明配置成功：

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
<img style="border: 2px #f5f5f5 solid" src="/image/5.6img/soft-deploy/install-step/诊区屏样式二-带提示授权成功.png" alt="">
<span>图5-6-5</span>
</div>

### 5.6.2 电视、盒子类设备

安装`分诊屏BS版`，输入`分诊屏服务>前端`地址，[可在这里查询](/pages/V5.6/software-deploy/install-step/install-serverconfig.html#配置信息)。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/soft-deploy/install-step/分诊屏-服务地址配置.png" alt="">
 <span>图5-6-1</span>
</div>

点击<button style="color:#fff;background:#007BFF">确定</button>按钮，进入如下界面：

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
<img style="border: 2px #f5f5f5 solid" src="/image/5.6img/soft-deploy/install-step/诊区屏样式二-带提示授权成功.png" alt="">
<span>图5-6-2</span>
</div>

点击`样式logo位置`可进入设置界面，配置相关项，语音库模式选择`电视、盒子类`：

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
<img style="border: 2px #f5f5f5 solid" src="/image/5.6img/soft-deploy/install-step/分诊屏-安卓设备信息.png" alt="">
<span>图5-6-3</span>
</div>

::: tip 注意
1. 延迟启动时间：开机启动程序，网络未就绪，界面就会显示加载失败。此处控制开机多久后，再启动应用；
2. 语音库模式：常规设备、电视、盒子类；
3. 发音方式：普通话、粤语、普通话+粤语；
4. 定时重启：个别设备早上运行到中午，出现卡死，此处配置几个小时重启App一次；
5. 开机启动apk：默认开启，部分厂商将App启动了2次，此处关闭启动
:::

## 5.7 部署签到机

1. 在`5.3 部署护士分诊台`完成后，`签到机`执行签到机程序：`TriageSignin.exe`，如下则表示成功：

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/程序介绍-签到机.png" alt="">
 <span>图5-7-1</span>
</div>

::: danger 注意
签到机程序依赖ybmain_proxy.dll，读卡或者输卡号所报错误有提示“HIS说：...”，请查看`C:\ybmain_proxy`文件夹下的日志，联系HIS开发协助排查
:::

2. `TriageSignin.exe.config`文件解析：

```xml
<?xml version="1.0" encoding="utf-8" ?>
<configuration>
	<appSettings>
        <!--是否开启打印设计  true 开启打印设计  false 关闭打印设计-->
        <add key="printdesign" value="false" />
        <!--华大四合一读卡参数-->
        <add key="cardtypedll" value="HDReadCard.dll"/>
        <add key="cardnamespace" value="HDReadCard.ReadCardHelper"/>
        <add key="ctime" value="20"/>
        <add key="track" value="2"/>
        <add key="voicetxt" value="请先点击刷卡按钮后，再进行刷卡"/>
        <add key="isDebug" value="false"/>
	</appSettings>
    <startup> 
        <supportedRuntime version="v4.0" sku=".NETFramework,Version=v4.5.2" />
    </startup>
</configuration>
```
> 1.`printdesign`：是否开启打印模板设计；<br/>
  2.`voicetxt`：签到成功后，发声的内容(`门急诊相关设置>参数管理中的`中`1013`参数，控制是否发声)；<br/>
  3.`isDebug`：是否开启调式模式<br/>
