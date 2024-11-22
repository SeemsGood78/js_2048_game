const e=new class{constructor(e=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]){this.board=e,this.score=0,this.status="idle"}getState(){return this.board}getScore(){return this.score}getStatus(){return this.status}start(){this.resetBoard(),this.addRandomTile(),this.addRandomTile(),this.status="playing"}restart(){this.start()}moveLeft(){this.move(e=>e,e=>e)}moveRight(){this.move(e=>e.reverse(),e=>e.reverse())}moveUp(){this.moveTranspose(e=>e,e=>e)}moveDown(){this.moveTranspose(e=>e.reverse(),e=>e.reverse())}resetBoard(){this.board=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],this.score=0}addRandomTile(){let e=[];if(this.board.forEach((t,s)=>{t.forEach((t,r)=>{0===t&&e.push([s,r])})}),e.length>0){let[t,s]=e[Math.floor(Math.random()*e.length)];this.board[t][s]=.9>Math.random()?2:4}}move(e,t){let s=!1,r=this.board.map((r,a)=>{let o=e([...r]),i=this.mergeRow(o);return this.rowsEqual(o,i)||(s=!0),t(i)});s&&(this.board=r,this.addRandomTile()),this.updateStatus()}moveTranspose(e,t){this.board=this.transpose(this.board),this.move(e,t),this.board=this.transpose(this.board)}mergeRow(e){let t=[],s=!1;for(let r=0;r<e.length;r++){if(s){s=!1;continue}0!==e[r]&&e[r]===e[r+1]?(t.push(2*e[r]),this.score+=2*e[r],s=!0):0!==e[r]&&t.push(e[r])}for(;t.length<4;)t.push(0);return t}transpose(e){return e[0].map((t,s)=>e.map(e=>e[s]))}rowsEqual(e,t){return e.every((e,s)=>e===t[s])}updateStatus(){this.board.flat().includes(2048)?this.status="win":this.board.flat().includes(0)||this.canMakeMove()||(this.status="lose")}canMakeMove(){for(let e=0;e<4;e++)for(let t=0;t<4;t++)if(e>0&&this.board[e][t]===this.board[e-1][t]||t>0&&this.board[e][t]===this.board[e][t-1])return!0;return!1}};function t(){let t=e.getState(),s=document.querySelectorAll(".field-cell");t.flat().forEach((e,t)=>{let r=s[t];r.textContent=e||"",r.className="field-cell",e&&r.classList.add(`field-cell--${e}`)}),document.querySelector(".game-score").textContent=e.getScore(),"win"===e.getStatus()?(document.querySelector(".message-win").classList.remove("hidden"),document.querySelector(".message-lose").classList.add("hidden")):"lose"===e.getStatus()?(document.querySelector(".message-lose").classList.remove("hidden"),document.querySelector(".message-win").classList.add("hidden")):(document.querySelector(".message-win").classList.add("hidden"),document.querySelector(".message-lose").classList.add("hidden"))}document.querySelector(".start").addEventListener("click",function(){let s=document.querySelector(".start")||document.querySelector(".restart");"playing"!==e.getStatus()?e.start():e.restart(),s.textContent="Restart",s.classList.remove("start"),s.classList.add("restart"),document.querySelector(".message-start").classList.add("hidden"),t()}),document.addEventListener("keydown",function(s){if("playing"===e.getStatus()){switch(s.key){case"ArrowLeft":e.moveLeft();break;case"ArrowRight":e.moveRight();break;case"ArrowUp":e.moveUp();break;case"ArrowDown":e.moveDown();break;default:return}t()}}),t();
//# sourceMappingURL=index.b54a1449.js.map
