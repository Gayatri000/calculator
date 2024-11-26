function add()
{
    let a=document.getElementById('firstbox').value
    let b=document.getElementById('secondbox').value

    a=parseInt(a)
    b=parseInt(b)

    let sum=a+b;
    let r=document.getElementById('result')
    
    r.innerHTML=sum;
}

function sub()
{
    let a=document.getElementById('firstbox').value
    let b=document.getElementById('secondbox').value

    a=parseInt(a)
    b=parseInt(b)

    let sum=a-b;
    let r=document.getElementById('result')
    
    r.innerHTML=sum;
}