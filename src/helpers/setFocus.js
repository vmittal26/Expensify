
export default ()=>{
    let list = document.getElementsByTagName('input');

    for (var item of list) {
        item.focus();
    }
}
