import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon','capcom','fungus','bonus'];
  let domain = ['.com','.net','.us','.io']



  for (let i=0;i<pronoun.length;i++) {
    for (let j=0;j<adj.length;j++) {
      for (let k=0;k < noun.length;k++) {
        for (let h=0;h<domain.length;h++) {
          if (`${noun[k]}`.includes(`${domain[h]}`.split(".")[1])) {
            console.log(`${pronoun[i]+adj[j]+noun[k].split(domain[h].split(".")[1])[0]+domain[h]}`)
          }
          else {
            console.log(`${pronoun[i]+adj[j]+noun[k]+domain[h]}`)
          }
        }
      }
    }
  }

};
