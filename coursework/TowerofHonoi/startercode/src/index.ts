import './styles.css'; 
import { Game } from './game';
const button1 = document.getElementById('button1') as HTMLButtonElement
const button2 = document.getElementById('button2') as HTMLButtonElement
const button3 = document.getElementById('button3') as HTMLButtonElement
const game = new Game()

button1.addEventListener('click' , () => {
    game.acceptInput(0);
    
 

})


button2.addEventListener('click' , () => {
  game.acceptInput(1);
    
})


button3.addEventListener('click' , () => {
  game.acceptInput(2);
    
})