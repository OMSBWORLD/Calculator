let buttons = document.querySelectorAll('.button');
let screen = document.querySelector('.screen')

buttons.forEach((individual_button)=>{
        individual_button.addEventListener('click',(e)=>{
            switch(e.target.innerHTML){
                case 'C':
                    screen.innerHTML = '0'
                    break;
                case '=':
                    try{
                        screen.innerHTML = eval(screen.innerHTML)
                    }catch{
                        screen.innerHTML = 'syntax error'
                    }
                    break;
                case 'DEL':
                    if(screen.innerHTML){
                        screen.innerHTML = screen.innerHTML.slice(0, -1)
                    }
                    break;
                default:
                    screen.innerHTML += e.target.innerHTML
            }
        })
})