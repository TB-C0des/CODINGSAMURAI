// Todo: Make M+ M- and MC functional
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    let arr = [];
    if(e.target.innerHTML == '='){
      let f = 1;
      for(let i=0;i<string.length;++i)
      if(string[i]=='^') f=0;
      if(f==0)
      {
        let g = ""
        let x="";
        let ind = 0;
        while(string[ind]!='^')
        {
            g+=string[ind];
            ind += 1;
        }
        let j = ind;
        while(ind<string.length)
        {
            ind += 1;
            x+=string[ind]; 
            console.log(string[ind]);
        }
        x = parseFloat(x);
        g = parseFloat(g);
        let y = Math.pow(g,x);
        document.querySelector('input').value = y;
        arr.push(parseFloat(y));
      }
      else
      {
      string = eval(string);
      document.querySelector('input').value = string;
      arr.push(parseFloat(string));
    }
    }
    else if(e.target.innerHTML == "<i>n!</i>"){
      let d = parseFloat(string);
      let f = parseInt(string);
      let ans = 1;
      for(let i = 2;i<=d;++i) {ans*=i;}
      if(f==d) {document.querySelector('input').value = ans;arr.push(parseFloat(ans));}
      else {document.querySelector('input').value="Invalid";}
    }
    else if(e.target.innerHTML == 'C'){
      string = "";
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML=='√')
    {
      let x = parseFloat(string);
      let y = Math.sqrt(x);
      document.querySelector('input').value = y;
      arr.push(parseFloat(y));
    }
    else if(e.target.innerHTML=='M+')
    {
       let y = arr.pop();
       let z = y+parseFloat(string);
       console.log(y);
       document.querySelector('input').value = z;
    }
    else if(e.target.innerHTML=='M-')
    {
       let y = arr.pop();
       let z = y-parseFloat(string);
       document.querySelector('input').value = z;
    }
    else if(e.target.innerHTML=='MC')
    {
      arr = [];
    }
    else if(e.target.innerHTML=='10^x')
    {
       let x = parseFloat(string);
       document.querySelector('input').value=Math.pow(10,x);
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    }
  })
})