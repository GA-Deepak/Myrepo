document.addEventListener("DOMContentLoaded", cardTrash);
function cardTrash() {
  const val  = JSON.parse(localStorage.getItem("trash"));
  // console.log(val);
  for (let index = 0; index < val.length; index++) {
    const element = val[index];
    console.log(element);
    let row = document.getElementById("deep");
    var divcol = document.createElement("div");
    let divcard = document.createElement("div");
    let divcardbod = document.createElement("div");
    let cardtitle = document.createElement("h3");
    let cardSubtit = document.createElement("h6");
    let image = document.createElement("img");
    let cardtext = document.createElement("p");
    let cardnum = document.createElement("p");
    let Reset = document.createElement("button");
    let edit = document.createElement("button");
    var delet = document.createElement("button");

    divcol.setAttribute("class", "col-sm-4");
    divcard.setAttribute("class", "card");
    divcardbod.setAttribute("class", "card-body");
    cardtitle.setAttribute("class", "card-title");
    cardSubtit.setAttribute("class", "card-subtitle");
    image.setAttribute("class", "card-img");
    cardtext.setAttribute("class", "card-text");
    cardnum.setAttribute("class", "card-group");
    Reset.setAttribute("class", "btn btn-primary btn-sm");
    Reset.setAttribute("onclick", "resetFuc('" + val[index]['prod'] + "')");
    Reset.innerText = "Restore";
    // edit.setAttribute("class", "btn btn-success btn-sm");
    // edit.innerText = "Edit";
    delet.setAttribute("class", "btn btn-danger btn-sm");
    delet.setAttribute("onclick", "deleteFuc('" + val[index]['prod'] + "')");
    delet.innerText = "Delete";

    for (key in element) {
      if (key === "prod") {
        cardtitle.innerText = element[key];
      } else if (key === "Title") {
        cardSubtit.innerText = element[key];
      } else if (key === "description") {
        cardtext.innerText = element[key];
      } else if (key === "Url") {
        image.setAttribute("src", element[key]);
      } else if (key === "Price") {
        cardnum.innerText = element[key];
      }
    }
    divcardbod.appendChild(cardtitle);
    divcardbod.appendChild(cardSubtit);
    divcardbod.appendChild(image);
    divcardbod.appendChild(cardtext);
    divcardbod.appendChild(cardnum);
    divcardbod.appendChild(Reset);
    // divcardbod.appendChild(edit);
    divcardbod.appendChild(delet);
    divcard.appendChild(divcardbod);
    divcol.appendChild(divcard);
    row.appendChild(divcol);

}
}
function deleteFuc(id)
{
  trash = []
  temp = JSON.parse(localStorage.getItem("trash"))
  for(let x = 0;x<temp.length;x++)
  {
    if(id!=temp[x]['prod'])
    {
      trash.push(temp[x])
    }
  }
  localStorage.removeItem("trash")
  localStorage.setItem("trash",JSON.stringify(trash))
  window.location.reload();
}

function resetFuc(id)
{
  trashTemp = JSON.parse(localStorage.getItem("trash"))
  trash = []
  users = JSON.parse(localStorage.getItem("users"))
  for(let x = 0;x<trashTemp.length;x++)
  {
    if(id!=trashTemp[x]['prod'])
    {
      trash.push(trashTemp[x])
    }
    else
    {
      users.push(trashTemp[x])
    }
  }
  localStorage.removeItem("trash")
  localStorage.setItem("users",JSON.stringify(users))
  localStorage.setItem("trash",JSON.stringify(trash))
  window.location.reload();
}