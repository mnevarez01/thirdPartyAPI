$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

var idNumbers = [
  "hour-9",
  "hour-10",
  "hour-11",
  "hour-12",
  "hour-13",
  "hour-14",
  "hour-15",
  "hour-16",
  "hour-17"
];
var value = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var input = "";
var saveBtn = false;

for (i = 0; i < value.length; i++) {
  $(".row").val(value[i]);
  if (moment().format("H") == value[i]) {
    $(".row").addClass("present");
  } else if (moment().format("H") > value[i]) {
    $(".row").addClass("past");
  } else {
    $(".row").addClass("future");
  } //check if it works or if I get an issue
}
//add prevent default?
$(".saveBtn").click(function(event) {
    saveBtn= true;
    input = $(this).text();
    if(saveBtn){
        
        localStorage.setItem("input" input);
    // }else{

    // }
    updatingList();
  
});

function updatingList() {

    var input = localStorage.getItem("input")

    if (!input){
        return;
    }

    $(".decription").text(input)
 
}

//   saveBtn = true;
  //   input = $(".descpition").text();
  //   if (saveBtn) {
  //     localStorage.setItem("todo", input);
  //   } else {
  //   }
// localStorage.setItem('todo' input);
//  //where would I put the JSON.parse(window.localStorage.grtItem(input))
// input.push(newInput)
// window.localStorage.setItem("input", JSON.stringify(input));
// $(".description").append(input);
//click event to save saving input to local storage
//append input from local storage to the hour that was clicked...
