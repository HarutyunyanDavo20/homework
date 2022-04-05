const root = document.getElementById("root");

let colorBox = 'black'

function createBox(row, box) {
    const container = document.createElement('div')

    if(colorBox === 'black'){
        colorBox = 'white'
    }else{
        colorBox = 'black'
    }
    container.innerHTML = '' 
    container.style =`
    width:100px; 
    height:100px; 
    color:red; 
    border: 1px solid red;
    background: ${colorBox}
    `
    container.className= `box-${row}_${box}`

    return container
}


function createRow(row) {

    if(colorBox === 'black'){
        colorBox = 'white'
    }else{
        colorBox = 'black'
    }
    
    const container = document.createElement('div')
    container.className = 'board'
    for(let i = 0; i<8; i++){
        container.appendChild(createBox(row, i+1))
    }

    

    return container
}



function App () {

    const container = document.createElement('div')
    
    for(let i = 0; i<8; i++){
        container.appendChild(createRow(i+1))
    }

    return container

}




root.appendChild(App())