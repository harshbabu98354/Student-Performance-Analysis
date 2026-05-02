let students = JSON.parse(localStorage.getItem("students")) || [];

function analyze(){
    let name = document.getElementById("name").value;
    let m = +maths.value, s = +science.value;
    let e = +english.value, c = +computer.value;

    if(name===""){ alert("Enter Name"); return; }

    let pass = 15;
    let mf = m<pass, sf=s<pass, ef=e<pass, cf=c<pass;
    let fail = mf||sf||ef||cf;

    let total = m+s+e+c;
    let percent = (total/400*100).toFixed(2);

    students.push({name,m,s,e,c,total,percent,fail,mf,sf,ef,cf});
    localStorage.setItem("students",JSON.stringify(students));
    show();
}

function show(){
    let rows="";
    students.forEach(x=>{
        rows+=`<tr>
        <td>${x.name}</td>
        <td>${x.m} ${x.mf?"F":""}</td>
        <td>${x.s} ${x.sf?"F":""}</td>
        <td>${x.e} ${x.ef?"F":""}</td>
        <td>${x.c} ${x.cf?"F":""}</td>
        <td>${x.total}</td>
        <td>${x.percent}</td>
        <td style="color:${x.fail?"red":"green"}">${x.fail?"FAIL":"PASS"}</td>
        </tr>`;
    });
    result.innerHTML=rows;
}
show();