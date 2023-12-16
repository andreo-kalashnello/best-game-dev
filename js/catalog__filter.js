const catalogList = document.querySelector('.catalog__menu-list'),
    catalogItems = document.querySelectorAll('.catalog__card'),
    catalogListItems = document.querySelectorAll('.catalog__menu-item');

function filter() {
    catalogList.addEventListener('click', event => {
        const targetId = event.target.dataset.id;
        const target = event.target

        if(target.classList.contains('catalog__menu-item')){
            catalogListItems.forEach(catalogListItem => catalogListItem.classList.remove('catalog__menu-item--active'));
            target.classList.add('catalog__menu-item--active');
        }

        


        switch(targetId){
            case 'all':
                getItems2('catalog__card');
            break
            case 'rpg':
                getItems(targetId);
            break
            case 'shooter':
                getItems(targetId);
            break
            case 'casual':
                getItems(targetId);
            break
            case 'action':
                getItems(targetId);
            break
        }

    })
}
filter()

function getItems(className){
    catalogItems.forEach(item => {
        if(item.classList.contains('catalog__card-' + className)){
            item.style.display = 'flex';
        }
        else{
            item.style.display = 'none';
        }
    })
}

function getItems2(className){
    catalogItems.forEach(item => {
        if(item.classList.contains(className)){
            item.style.display = 'flex';
        }
        else{
            item.style.display = 'none';
        }
    })
}
























