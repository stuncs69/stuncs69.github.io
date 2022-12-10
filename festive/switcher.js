const jazzpicker = document.getElementById('jazzpicker');
const strappicker = document.getElementById('strappicker');
const beugelpicker = document.getElementById('beugelpicker');
const resetpicker = document.getElementById('resetpicker');
const itemInfo = document.getElementsByClassName('item-info');

jazzpicker.addEventListener('click', () => {
    itemInfo[0].style.display = 'block';
    itemInfo[1].style.display = 'none';
    itemInfo[2].style.display = 'none';
    itemInfo[3].style.display = 'none';
    let jazzInfo = document.getElementsByClassName('pick-info')[0];
    jazzInfo.style.display = 'block';
});

strappicker.addEventListener('click', () => {
    itemInfo[0].style.display = 'none';
    itemInfo[1].style.display = 'block';
    itemInfo[2].style.display = 'none';
    itemInfo[3].style.display = 'none';
    let strapInfo = document.getElementsByClassName('pick-info')[1];
    strapInfo.style.display = 'block';
});

beugelpicker.addEventListener('click', () => {
    itemInfo[0].style.display = 'none';
    itemInfo[1].style.display = 'none';
    itemInfo[2].style.display = 'block';
    itemInfo[3].style.display = 'none';
    let beugelInfo = document.getElementsByClassName('pick-info')[2];
    beugelInfo.style.display = 'block';
});

resetpicker.addEventListener('click', () => {
    itemInfo[0].style.display = 'none';
    itemInfo[1].style.display = 'none';
    itemInfo[2].style.display = 'none';
    itemInfo[3].style.display = 'block';
    let resetInfo = document.getElementsByClassName('pick-info')[3];
    resetInfo.style.display = 'block';
});