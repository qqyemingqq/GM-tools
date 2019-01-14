(function (window, document) {

    let layout = document.getElementById('layout'),
        menu = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink'),
        content = document.getElementById('main'),
        mainButton = document.getElementById('mainButton'),
        ConfDaoLiang = document.getElementById('ConfDaoLiang'),


        ConfDaoLiangButton = document.getElementById('ConfDaoLiangButton'),
        ConfHaiBaoButton = document.getElementById('ConfHaiBaoButton'),
        addConfDaoLiangButton = document.getElementById('addConfDaoLiangButton')

    ;

    let views = [content, ConfDaoLiang];

    addConfDaoLiangButton.addEventListener('pointerup', () => {
        console.log("addConfDaoLiangButton");

    });

    ConfDaoLiangButton.addEventListener('pointerup', () => {
        console.log("ConfDaoLiangButton");
        Model.getDataFromMGGF(recommendData,{game_id:54,token:'xx'},(e)=>{
            ConfDaoLiangView.appendEle(e);
        });
        switchViw(ConfDaoLiang);
    });

    mainButton.addEventListener('pointerup', () => {
        console.log("mainButton");
        switchViw(content);
    });

    ConfHaiBaoButton.addEventListener('pointerup', () => {
        console.log("ConfHaiBaoButton");
    });


    function toggleClass(element, className) {
        console.log(element, className);
        let classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;


        for (; i < length; i++) {
            if (classes[i] === className) {
                classes.splice(i, 1);
                break;
            }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    function toggleAll(e) {
        let active = 'active';

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
        console.log('menuLink');
    }

    menuLink.onclick = function (e) {
        toggleAll(e);
        console.log('menuLink');
    };

    content.onclick = function (e) {
        if (menu.className.indexOf('active') !== -1) {
            toggleAll(e);
        }
    };

    function switchViw(view) {
        if (views.indexOf(view) !== -1) {
            views.forEach((e) => {
                if (view === e) {
                    e.style.display = 'unset';
                } else {
                    e.style.display = 'none';
                }
            })
        } else {

        }
    }
}(this, this.document));
