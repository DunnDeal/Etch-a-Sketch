function createBox(dims){
    let box = document.querySelector("#container");
    let rowDiv,colDiv;
    for(a = 1;a <= dims;a++){
        rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        for(b = 1;b <= dims;b++){
            colDiv = document.createElement('div');
            colDiv.classList.add('col'); 
            colDiv.style.backgroundColor = 'rgba(255, 254, 254, 0.7)';
            colDiv.style.width = 500/dims + 'px';
            colDiv.style.height = 500/dims + 'px';
            colDiv.style.boxShadow="0px 0px 0px 1px black inset";
            colDiv.addEventListener('mouseover',function(e){
                if(!e.target.classList.contains('colored')){
                    e.target.style.background = random_rgba();
                    e.target.classList.add('colored'); 
                }
                else{
                    let temp = e.target.style.background;
                    let etemp = temp.replace('rgb','');
                    let replaced = etemp.replace('(','');
                    let after = replaced.split(',');
                    let red = parseInt(after[0]) * 0.9;
                    let green = parseInt(after[1]) * 0.9;
                    let blue = parseInt(after[2]) * 0.9;
                    e.target.style.background = 'rgb(' +red + ',' + green + ',' + blue + ')';
                }
            })
            rowDiv.appendChild(colDiv);
        }
        box.appendChild(rowDiv);
    }
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

function clearBox(){
    let box = document.querySelector(".box");
    while(box.firstChild){
        box.removeChild(box.firstChild);
    }
}

createBox(15);

document.querySelector('.new').addEventListener('click',function(e){
    let dimension;
    do{
        dimension = prompt('Enter New Canvas Dimension (in Pixel)','From 1 - 64');
    }while(dimension < 1 || dimension > 64);
    clearBox();
    createBox(dimension);
})