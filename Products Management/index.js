const prodNam = () => {
  const prod = document.getElementById("product").value;
  const Title = document.getElementById("title").value;
  const Price = document.getElementById("price").value;
  const Url = document.getElementById("url").value;
  const description = document.getElementById("descp").value;
  const location = document.getElementById("location").value;
  const category = document.getElementById("Category").value;
  var stock;
  if (document.getElementById("instock").checked) {
    stock = document.getElementById("instock").value;
  } else {
    stock = document.getElementById("nostock").value;
  }

  let fname = {
    prod,
    Title,
    Price,
    Url,
    description,
    location,
    category,
    stock,
  };
  let users;
  if (localStorage.getItem("users") === null) {
    users = [];
    trash = [];
  } else {
    users = JSON.parse(localStorage.getItem("users"));
  }
  users.push(fname);
  localStorage.setItem("users", JSON.stringify(users));
  window.location.reload();
};


document.addEventListener("DOMContentLoaded", cardDisplay([]));
cardDisplay(JSON.parse(localStorage.getItem("users")));
function cardDisplay(array) {
  val = array;
  console.log(val.length);
  for (let index = 0; index < val.length; index++) {
   
      var element = val[index];
      let row = document.getElementById("deep");
      var divCol = document.createElement("div");
      let divCard = document.createElement("div");
      let divCardBod = document.createElement("div");
      let cardTitle = document.createElement("h3");
      let stock1 = document.createElement("h5");
      let cardSubtit = document.createElement("h6");
      let image = document.createElement("img");
      let location = document.createElement("p");
      let catagory = document.createElement("p");
      let cardText = document.createElement("p");
      let cardNum = document.createElement("p");
      let view = document.createElement("button");
      let edit = document.createElement("button");
      edit.setAttribute("data-bs-toggle", "modal");
      edit.setAttribute("data-bs-target", "#exampleModal");
      let delet = document.createElement("button");

      divCol.setAttribute("class", "col-sm-4");
      divCard.setAttribute("class", "card");
      divCardBod.setAttribute("class", "card-body");
      cardTitle.setAttribute("class", "card-title");
      stock1.setAttribute("id", "st1");
      cardSubtit.setAttribute("class", "card-subtitle");
      image.setAttribute("class", "card-img h-5");
      location.setAttribute("class", "card-text");
      catagory.setAttribute("class", "card-text");
      cardText.setAttribute("class", "card-text");
      cardNum.setAttribute("class", "card-group");
      view.setAttribute("class", "btn btn-primary btn-sm");
      view.innerText = "View";
      view.setAttribute("onclick", "viewFun('" + val[index]["prod"] + "')");
      edit.setAttribute("class", "btn btn-success btn-sm");
      edit.innerText = "Edit";
      edit.setAttribute("onclick", "editFun('" + val[index]["prod"] + "')");
      delet.setAttribute("class", "btn btn-danger btn-sm");
      delet.setAttribute("onclick", "deleteFuc('" + val[index]["prod"] + "')");
      delet.innerText = "Delete";

      for (key in element) {
        if (key === "prod") {
          cardTitle.innerText = element[key];
        } else if (key === "Title") {
          cardSubtit.innerText = element[key];
        } else if (key === "description") {
          cardText.innerText = element[key];
        } else if (key === "Url") {
          image.setAttribute("src", element[key]);
        } else if (key === "Price") {
          cardNum.innerText = element[key];
        } else if (key === "location") {
          location.innerText = element[key];
        } else if (key === "catagory") {
          catagory.innerText = element[key];
        }
      }
      divCardBod.appendChild(cardTitle);
      // divCardBod.appendChild(stock);
      divCardBod.appendChild(cardSubtit);
      divCardBod.appendChild(image);
      divCardBod.appendChild(location);
      divCardBod.appendChild(catagory);
      divCardBod.appendChild(cardText);
      divCardBod.appendChild(cardNum);
      divCardBod.appendChild(view);
      divCardBod.appendChild(edit);
      divCardBod.appendChild(delet);
      divCard.appendChild(divCardBod);
      divCol.appendChild(divCard);
      row.appendChild(divCol);
    
  }
}

const Search = () => {
  let filter = document.getElementById("myInput").value.toUpperCase();
  let title = document.getElementsByClassName("card-title");

  for (let i = 0; i < title.length; i++) {
    let textValue = title[i].textContent;

    if (textValue.toUpperCase().indexOf(filter) > -1) {
      title[i].parentNode.parentNode.style.display = "";
    } else {
      title[i].parentNode.parentNode.style.display = "none";
    }
  }
};



function deleteFuc(id) {
  trash = JSON.parse(localStorage.getItem("trash"));
  users = [];
  trash=[];
  temp = JSON.parse(localStorage.getItem("users"));
  
  for (let x = 0; x < temp.length; x++) {
    if (id != temp[x]["prod"]) {
      users.push(temp[x]);
    } else {
      trash.push(temp[x])
    }
  }
  localStorage.removeItem("users");
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("trash", JSON.stringify(trash));
  
  window.location.reload();
}

function viewFun(id) {
  temp = JSON.parse(localStorage.getItem("users"));
  let data;
  let url = {};
  for (let x = 0; x < temp.length; x++) {
    if (id == temp[x]["prod"]) {
      data = temp[x];
      url = { url: temp[x]["Url"] };
    }
  }

  m = data["prod"];
  n = data["Title"];
  o = data["Price"];
  p = data["description"];
  q = data["location"];
  r = data["category"];
  s = data["stock"];
  console.log(url);
  params = JSON.stringify(url);
  document.location.href =
    "View.html?data1=" +
    m +
    "&data2=" +
    n +
    "&data3=" +
    o +
    "&data4=" +
    p +
    "&data5=" +
    q +
    "&data6=" +
    r +
    "&data7=" +
    s +
    "&datax=" +
    params;

  //  document.location.href = "View.html";
}

function editFun(id) {
  temp = JSON.parse(localStorage.getItem("users"));
  for (let x = 0; x < temp.length; x++) {
    if (id == temp[x]["prod"]) {
      var data = temp[x];

      let obj1 = Object.values(data);

      document.getElementById("product1").value = obj1[0];
      document.getElementById("title1").value = obj1[1];
      document.getElementById("price1").value = obj1[2];
      document.getElementById("url1").value = obj1[3];
      document.getElementById("descp1").value = obj1[4];
    }
  }
}

function saveChanges() {
  users = [];
  id = document.getElementById("product1").value;
  temp = JSON.parse(localStorage.getItem("users"));
  for (let x = 0; x < temp.length; x++) {
    if (id == temp[x]["prod"]) {
      temp[x]["prod"] = document.getElementById("product1").value;
      temp[x]["Price"] = document.getElementById("price1").value;
      temp[x]["Title"] = document.getElementById("title1").value;
      temp[x]["Url"] = document.getElementById("url1").value;
      temp[x]["description"] = document.getElementById("descp1").value;
      temp[x]["location"] = document.getElementById("location1").value;
      temp[x]["category"] = document.getElementById("category1").value;

      users.push(temp[x]);
    } else {
      users.push(temp[x]);
    }
  }
  localStorage.removeItem("users");
  localStorage.setItem("users", JSON.stringify(users));
  window.location.reload();
}

function filterFun() {
  var tempArray = [];
  var ele = [];
  var temp1 = document.getElementById("toy");
  if (temp1.checked) {
    ele.push(temp1.value);
  }
  var temp2 = document.getElementById("clothes");
  if (temp2.checked) {
    ele.push(temp2.value);
  }
  var temp3 = document.getElementById("mobile");
  if (temp3.checked) {
    ele.push(temp3.value);
  }
  var temp4 = document.getElementById("laptops");
  if (temp4.checked) {
    ele.push(temp4.value);
  }
  val = JSON.parse(localStorage.getItem("users"));
  for (let x = 0; x < val.length; x++) {
    for (let y = 0; y < ele.length; y++) {
      if (val[x]["category"] == ele[y]) {
        tempArray.push(val[x]);
      }
    }
  }
  console.log(tempArray);
  cardDisplay(tempArray);
}
