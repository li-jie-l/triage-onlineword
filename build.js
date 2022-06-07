let shell = require('shelljs');

//1.生成git代码版本信息
//检查控制台是否以运行`git `开头的命令
if (!shell.which('git')) {
    //在控制台输出内容
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
}
write2File();

function write2File() {
    //git版本值
    const codeHash = shell.exec(`git log -1 --pretty=format:%H`);
    /*作者 和 提交者 之间究竟有何差别，其实作者指的是实际作出修改的人，提交者指的是最后将此工作成果提交到仓库的人。
    所以，当你为某个项目发布补丁，然后某个核心成员将你的补丁并入项目时，你就是作者，而那个核心成员就是提交者。*/
    //作者，真正写代码的人
    const author = shell.exec(`git log -1 --pretty=format:%an`);
    //修订日期
    const reviseTime = shell.exec(`git log -1 --pretty=format:%ai --date=relative`);
    //提交者，将补丁合入的人
    const committer = shell.exec(`git log -1 --pretty=format:%cn`);
    //提交日期
    const commitTime = shell.exec(`git log -1 --pretty=format:%ci --date=relative`);
    const branch = shell.exec(`git log -1 --pretty=format:%D`);
    const result = {
        "branch":`${branch}`,
        "codeHash":`${codeHash}`,
        "author":`${author}`,
        "reviseTime":`${reviseTime}`,
        "committer":`${committer}`,
        "commitTime":`${commitTime}`,
        "creatTime":`${dateFormat()}`,
    };
    shell.echo(JSON.stringify(result)).to('./docs/.vuepress/public/licence.json');
}

function dateFormat(){
    let time=new Date();
    const y = time.getFullYear();
    const m = time.getMonth()+1;
    const d = time.getDate();
    const h = time.getHours();
    const mm = time.getMinutes();
    const s = time.getSeconds();
    return `${y}-${m}-${d} ${h}:${mm}:${s}`;
}
