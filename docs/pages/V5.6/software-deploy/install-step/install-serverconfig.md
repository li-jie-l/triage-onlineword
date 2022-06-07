---
lang: zh-CN
---

[[TOC]]


## 3.1 部署工具：环境检测

输入当前服务器管`用户名`、`密码`，点击<button style="background:#2d3afa;color:#ffffff;border:none;">检测</button>。
校验通过后，点击右下角的<button style="background:#2d3afa;color:#ffffff;border:none;">下一步</button>
按钮；如果IIS校验未通过, [查看教程添加](/pages/V5.6/faq/software-deploy/1.IIS功能添加或检查.html#_1-1-添加iis)
<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/soft-deploy/install-step/部署工具新版-环境检测.png" alt="">
 <span>图3-1-1</span>
</div>

## 3.2 选择部署：勾选部署服务

点击右下角全部勾选，或者按需部署。勾选完成后，点击右下角的<button style="background:#2d3afa;color:#ffffff;border:none;">下一步</button>
                 按钮；

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/soft-deploy/install-step/部署工具新版-选择部署.png" alt="">
 <span>图3-2</span>
</div>

## 3.3 服务配置

### 3.3.1 选择部署包

部署包路径默认为`护士分诊部署工具`文件夹下的`部署包.zip`;如果`部署包.zip`位置变动，可点击<button style="background:#2d3afa;color:#ffffff;border:none;">
选择</button>按钮

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/soft-deploy/install-step/部署工具新版-服务配置.png" alt="">
 <span>图3-3-1-1</span>
</div>

### 3.3.2 数据库配置

配置现场数据库，点击<button style="background:#2d3afa;color:#ffffff;border:none;">测试连接</button>按钮，测试数据库连接是否正常

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/soft-deploy/install-step/部署工具新版-服务配置.png" alt="">
 <span>图3-3-2-1</span>
</div>

### 3.3.3 服务配置

数据库配置下面可展开查看各个服务的配置，如无特殊情况，无需变动，点击<button style="background:#2d3afa;color:#ffffff;border:none;">下一步</button>即可；
想了解更多配置详情，点击[这里](/pages/V5.6/faq/software-deploy/服务配置详情.md)；<br/>
注意：如果端口号被占用下一步会被拦截，处理端口被占用情况，[参考这里处理](/pages/V5.6/faq/software-deploy/4.处理端口被占用情况.html)。
<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/soft-deploy/install-step/部署工具新版-服务配置详细.png" alt="">
 <span>图3-3-3-1</span>
</div>


## 3.4 安装部署：部署成功

点击<button style="background:#2d3afa;color:#ffffff;border:none;">开始部署</button>，
部署成功后，可以看到界面上有<button style="background:#ffffff;color:#2d3afa;border:1px #03A9F3 solid;">查看</button>按钮，可跳转至浏览器，浏览服务；
点击<button style="background:#2d3afa;color:#ffffff;border:none;">部署完成</button>即可关闭部署工具。

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/soft-deploy/install-step/部署工具新版-安装部署.png" alt="">
 <span>图3-4-1</span>
</div>
<br/>
<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/soft-deploy/install-step/部署工具新版-部署成功.png" alt="">
 <span>图3-4-2</span>
</div>

## 3.5 检查部署的Nginx、IIS服务

### 3.5.1 检查Nginx服务

1. 查看配置的Nginx路径下，是否有`nginx`文件夹，默认在服务端`D:\nurseTriage5.6\nginx`

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/服务所在目录.png" alt="">
 <span>图3-5-1-1</span>
</div>

2. 打开`任务管理器`，查看`nginx`是否成功运行

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/Nginx-任务管理器.png" alt="">
 <span>图3-5-1-2</span>
</div>

3. `nginx`文件夹下的`nginx.exe`需添加开机自启动，以防服务器重启后出现服务异常的情况。

### 3.5.2 确认服务均部署
 
打开IIS，查看服务是否成功部署(共计9个IIS服务)

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/IIS-服务站点.png" alt="">
 <span>图3-5-2-1</span>
</div>


