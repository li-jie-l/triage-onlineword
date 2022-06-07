---
lang: zh-CN
---

[[TOC]]

[←返回目录](/pages/V5.6/faq/triage-soft/triage-soft.md)

案例：
一个诊区soundplay部署在护士分诊台电脑上；
1. 医生A叫号信息弹框展示在大屏1上，语音是护士台soundplay发出；
2. 医生B叫号信息弹框展示在大屏2上，语音是护士台soundplay发出；<br/>
叫号信息通过护士台soundplay排队展示在大屏1或者2上

解决：
1. 修改诊区规则：【门急诊相关设置】-【分诊规则设置】- “叫号内容设置”如下所示：护士站选择“使用喇叭叫号”；勾选“医生接诊叫号”，选择“使用诊区诊间屏一起叫号”
（如果没有诊间屏，也可以选择“诊区屏叫号诊间屏不叫”）
<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/faq/triage-soft/分诊规则设置-叫号内容设置.png" alt="">
 <span>图1</span>
</div>

2. 分诊设备绑定；<br/>
 1）诊区语音绑定：护士分诊台电脑，部署soundplay所在客户端前台程序publicexe，并将护士台电脑ip维护成语音设备，绑定到到当前诊区;

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/faq/triage-soft/分诊设备绑定-语音.png" alt="">
 <span>图1</span>
</div>

2）诊间大屏绑定：医生A所在诊间绑定大屏1；医生B所在诊间绑定大屏2

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/faq/triage-soft/诊间大屏绑定.png" alt="">
 <span>图1</span>
</div>

3. 语音程序配置文件<br>
在护士台电脑publicexe前台程序文件下，找到Config文件夹下的Winning.SoundPlay.Config文件，配置如下：<br/>
`websocket`节点的`IsUse`和`IsPub`设置为`True`,`IP`设置为空（系统会自动读取当前设备的ip，无需配置）；<br/>
`factory`节点 的`Type`设置为`1`，无需安装捷通语音包，如果设置为0，则需要安装捷通语音包

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/faq/triage-soft/Winning.SoundPlay.Config.png" alt="">
 <span>图1</span>
</div>

4. 运行soundplay程序，双击即可运行，运行后会隐藏在任务来右侧图标里

<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/faq/triage-soft/独立语音程序.png" alt="">
 <span>图1</span>
</div>
<div style="display:flex;flex-direction: column;justify-content: center;align-items: center; width: 100%;">
 <img style="border: 2px #f5f5f5 solid" src="/image/5.6img/faq/triage-soft/独立语音程序-任务栏.png" alt="">
 <span>图1</span>
</div>

5. 上述设置都完成后，即可检验：在医生A叫号后，仅大屏1弹框提示，护士台电脑的soundpaly程序会叫号；在医生B叫号后，仅大屏2弹框提示，护士台电脑的soundpaly程序叫号；
两个医生都叫号的话，护士台电脑soundplay程序会按照他们的叫号先后排序，然后发声叫号；对应的屏也会在叫号时弹框。
