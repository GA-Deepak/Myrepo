
// document.addEventListener("DOMContentLoaded", Filter);
// function Filter(){

  // let input = document.getElementById("toy");
  // let subtit = document.getElementById("Category");
  // console.log(subtit);
  // let filter = input.value.toUpperCase();
  // for (i = 0; i < subtit.length; i++) {
  //   td = tr[i].getElementsByTagName("td")[2];
  //   if (td) {
  //     const textValue = td.textContent || td.innerText;
  //     if (textValue.toUpperCase().indexOf(filter) > -1) {
  //       console.log(filter);
  //       tr[i].style.display = "";
  //     } else {
  //       tr[i].style.display = "";
  //     }
  //   }
  // }
  // var filterCheckboxes = document.querySelector('input[type="checkbox"]');
// var filterFunc = function () {
//   var selectedFilters = {};

//   filterCheckboxes.filter(":checked").each(function () {
//     if (!selectedFilters.hasOwnProperty(this.name)) {
//       selectedFilters[this.name] = [];
//     }

//     selectedFilters[this.name].push(this.value);
//   });

 
//   var $filteredResults = document.querySelector(".card");


//   $.each(selectedFilters, function (name, filterValues) {
    
//     $filteredResults = $filteredResults.filter(function () {
//       var matched = false,
//         currentFilterValues = document.querySelector(this).data("category").split(" ");

     
//       $.each(currentFilterValues, function (_, currentFilterValue) {
      
//         if ($.inArray(currentFilterValue, filterValues) != -1) {
//           matched = true;
//           return false;
//         }
//       });

     
//       return matched;
//     });
//   });

//   document.querySelector(".card").hide().filter($filteredResults).show();
// };

// $filterCheckboxes.addEventListener("change", filterFunc);

// }};