var changeDom = () =>{
    document.getElementById("h1-nice").style.color="red";
    document.getElementsByTagName("h3")[0].style.color="green";
    document.getElementsByClassName("par")[0].style.color="orange";
    var input = document.getElementsByName("changeInput")[0];
    input.setAttribute("type", "radio");
    var btn_blue = document.querySelector(".btn-blue");
    btn_blue.style.backgroundColor="blue";
    btn_blue.style.color="white";
}

// let navigateDOM = () => {
//     document.getElementById("p2").innerHTML = document.getElementById("p1").firstChild.nodeValue;
// }

//Traversing elements
let navigateDOM = () => {
    //parentNode
    const para1 = document.getElementById("p1");
    
    const div_dom = document.getElementById("div-dom");

    console.log(para1.parentNode);

    console.log(div_dom.parentNode);

    console.log(para1.childNodes);

    console.log(div_dom.childNodes);

    console.log(div_dom.children);

    console.log(div_dom.previousElementSibling);

    console.log(para1.nextElementSibling);

    console.log(div_dom.nextElementSibling)

    console.log(para1.firstChild)

    console.log(div_dom.firstElementChild)


    console.log(para1.lastChild)

    console.log(div_dom.lastElementChild)
    }

    let manipulate = () =>{
        const newpar = document.createElement("h3");
        newpar.textContent = "Still Learning";
        document.body.append(newpar);
    }