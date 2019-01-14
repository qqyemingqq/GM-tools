ConfDaoLiangView = {};
ConfDaoLiangView.data = [];
ConfDaoLiangView.paramKey = ["id", "name", "group", "link", "game_id", "icon", "img", "desc", "link_params", "pt_params", "weight"];
ConfDaoLiangView.element = menuLink = document.getElementById('ConfDaoLiangBody');
ConfDaoLiangView.iconUrl = 'https://t1pxwxres.leshu.com/Princess_coming/moreGameIcons/';


ConfDaoLiangView.appendEle = function (data) {
    ConfDaoLiangView.data = data.data['recommend_info'];
    for (let j = 0; j < ConfDaoLiangView.data.length; j++) {
        let tr = document.createElement('tr');
        for (let i = 0; i < ConfDaoLiangView.paramKey.length; i++) {
            let td = document.createElement('td');
            if(ConfDaoLiangView.paramKey[i] === 'icon'){
                let img = document.createElement('img');
                if(ConfDaoLiangView.data[j][ConfDaoLiangView.paramKey[i]].indexOf('http')===-1){
                    img.src = ConfDaoLiangView.iconUrl+ConfDaoLiangView.data[j][ConfDaoLiangView.paramKey[i]];
                    img.setAttribute('title',ConfDaoLiangView.parentToolTips(img));
                }else{
                    img.src = ConfDaoLiangView.data[j][ConfDaoLiangView.paramKey[i]];
                    img.setAttribute('title',ConfDaoLiangView.parentToolTips(img));
                }
                img.setAttribute('data-toggle','tooltip');
                img.setAttribute('data-placement','top');
                td.appendChild(img);
            }else {
                td.innerText = ConfDaoLiangView.data[j][ConfDaoLiangView.paramKey[i]];
            }
            tr.appendChild(td);
        }
        let btnTd = document.createElement('td');
        let editBtn = ConfDaoLiangView.createBtn('修改',(e)=>{console.log('修改');});
        let delBtn = ConfDaoLiangView.createBtn('删除',(e)=>{console.log('删除');});
        btnTd.appendChild(editBtn);
        btnTd.appendChild(delBtn);
        tr.appendChild(btnTd);

        ConfDaoLiangView.element.appendChild(tr);
    }
    console.log(ConfDaoLiangView.data);
};
ConfDaoLiangView.createBtn = function (btnName,cb) {
    let btn = document.createElement('input');
    btn.className = 'pure-button';
    btn.type = 'button';
    btn.value = btnName;
    btn.style.margin = '2px;';
    btn.onclick = function () {
        cb(btn);
    };
    return btn;
};
ConfDaoLiangView.parentToolTips = function (ele) {
    console.log(ele);
    let toolTips = '';
    if(ele.src.indexOf(ConfDaoLiangView.iconUrl)===-1){
        toolTips += '配置：'+ ele.src;
    }else{
        toolTips += '配置：'+ ele.src.replace(ConfDaoLiangView.iconUrl,'');
    }
    toolTips += '\n大小：'+ ele.width+'x'+ele.height;
    return toolTips;
};