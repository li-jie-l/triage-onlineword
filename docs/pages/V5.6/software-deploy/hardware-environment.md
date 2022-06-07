
[[TOC]]

## 硬件配置

<table>
    <tr>
        <th style="width:18vw;">数据端</th>
        <th style="width:24vw;">种类</th>
        <th style="width:58vw;">配置</th>
    </tr>
    <tr>
        <td rowspan="5">数据库服务器</td>
        <td>CPU</td>
        <td>8核2.0G以上CPU</td>
    </tr>
    <tr>
        <td>内存</td>
        <td>16G或以上</td>
    </tr>
    <tr>
        <td>高性能硬盘</td>
        <td>500GB</td>
    </tr>
    <tr>
        <td>网络</td>
        <td>千兆</td>
    </tr>
    <tr>
        <td>sql server版本</td>
        <td>建议2012及以上，2008部分功能不适用</td>
    </tr>
    <tr>
        <td rowspan="6">服务器端</td>
        <td>CPU</td>
        <td>Intel(R) Core(TM) i3-2120M <br/>CPU @3.30GHzFg及更高</td>
    </tr>
    <tr>
        <td>内存</td>
        <td>16G或以上</td>
    </tr>
    <tr>
        <td>硬盘</td>
        <td>500G或以上</td>
    </tr>
    <tr>
        <td>IIS服务器</td>
        <td>7及以上</td>
    </tr>
    <tr>
        <td>操作系统</td>
        <td>2008及以上</td>
    </tr>
    <tr>
        <td>.NET框架</td>
        <td>.NetFramework4.8及以上</td>
    </tr>
    <tr>
        <td rowspan="7">护士分诊台</td>
        <td>CPU</td>
        <td>CPU	Intel(R) Core(TM) i3-2120M <br/>CPU @3.30GHzFg及更高</td>
    </tr>
    <tr>
        <td>内存</td>
        <td>4G及以上</td>
    </tr>
    <tr>
        <td>硬盘</td>
        <td>200G及以上</td>
    </tr>
    <tr>
        <td>分辨率</td>
        <td>1024*768</td>
    </tr>
    <tr>
        <td>操作系统</td>
        <td>win7、win8、win10</td>
    </tr>
    <tr>
        <td>.NET框架</td>
        <td>.NetFramework4.5及以上</td>
    </tr>
    <tr>
        <td>网络</td>
        <td></td>
    </tr>
    <tr>
        <td rowspan="5">window屏</td>
        <td>系统版本</td>
        <td>Windows 7及以上</td>
    </tr>
    <tr>
        <td>时钟</td>
        <td>国家标准时间时钟，<br/>不能内网(无外网)环境下关机重启、断电重启，时间出现停滞或恢复出厂时间</td>
    </tr>
    <tr>
        <td>其他</td>
        <td>
        1. 设备自身不能带有重启后还原系统功能；<br/>
        2. 设备语音音量满足医院叫号播放需要；<br/>
        </td>
    </tr>
    <tr>
        <td>分辨率</td>
        <td>1920*1080，或宽高比约1.77</td>
    </tr>
    <tr>
        <td>.NET框架</td>
        <td>.NetFramework4.5及以上</td>
    </tr>
    <tr>
        <td rowspan="5">安卓屏</td>
        <td>系统版本</td>
        <td>5.0及以上</td>
    </tr>
    <tr>
        <td>网络</td>
        <td>支持无线或者网线连外网(语音授权需要)</td>
    </tr>
    <tr>
        <td>分辨率</td>
        <td>最佳分辨率为1920X1080，设备分辨率可在此基础上乘以相应的系数我们产品会按照等比率自适应。</td>
    </tr>
    <tr>
        <td>时钟</td>
        <td>国家标准时间时钟，<br/>不能内网(无外网)环境下关机重启、断电重启，时间出现停滞或恢复出厂时间</td>
    </tr>
    <tr>
        <td>其他</td>
        <td>
        1. 设备自身不能带有重启后还原系统功能；<br/>
        2. 支持Apk安装、卸载；<br/>
        3. 支持标准版开机自启动方式(RECEIVE_BOOT_COMPLETED-广播监听)，如果硬件厂商不支持此方式，需要厂商提供相关配置apk(指定开机启动的应用)，否则需要人工操作启动应用；<br/>
        4. 提供定时开关机apk(定时开关机功能是基于系统ROM实现的，且各厂商不通用，故需厂商提供)；<br/>
        5. 设备语音音量满足医院叫号播放需要；<br/>
        </td>
    </tr>
    <tr>
        <td rowspan="6">签到机设备</td>
        <td>CPU</td>
        <td>CPU	Intel(R) Core(TM) i3-2120M <br/>CPU @3.30GHzFg及更高</td>
    </tr>
    <tr>
        <td>内存</td>
        <td>4G及以上</td>
    </tr>
    <tr>
        <td>硬盘</td>
        <td>200G及以上</td>
    </tr>
    <tr>
        <td>分辨率</td>
        <td>竖屏，建议1080*1920</td>
    </tr>
    <tr>
        <td>操作系统</td>
        <td>win7、win8、win10</td>
    </tr>
    <tr>
        <td>.NET框架</td>
        <td>.NetFramework4.5及以上</td>
    </tr>
</table>
<br/>

::: tip 注意
1. [https://dotnet.microsoft.com/en-us/download/dotnet-framework](https://dotnet.microsoft.com/en-us/download/dotnet-framework/net48#)；<br/>
2. 分诊数据库、分诊web服务，部署在一台服务器上，内存需要不少于32G
:::
