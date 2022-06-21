var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elList = document.querySelector(".js-list");

var todos = [];

elForm.addEventListener("submit",  function(evt){
  evt.preventDefault();
  
  var elInputVal = elInput.value;
  elInput.value = '';
  elList.innerHTML = '';
 
  
  todos.push({
    id: todos.length + 1,
    text: elInputVal,
  });

  for (var i = 0; i < todos.length; i++){
    var newItem = document.createElement('li');
  var newUser = document.createElement('p');
  newUser.textContent = `${todos[i].id}. ${todos[i].text}`;
  newItem.appendChild(newUser);
  elList.appendChild(newItem);
  }

 
}) 
var newItem2 = document.createElement('li');
var newUser2 = document.createElement('p');
var elBtn = document.querySelector('.js-btn');
newItem2.appendChild(newUser2);
  elList.appendChild(newItem2);
var record = new webkitSpeechRecognition();
record.lang = 'uz-UZ';

elBtn.addEventListener('click', function () {
  	record.start();
    record.onresult = function (evt) {
    	console.log(evt);
      newUser2.textContent	=  evt.results[0][0].transcript;
    };
  });

  


// var elBtn = document.querySelector('.btn');
// var record = new webkitSpeechRecognition();

// record.lang = 'uz-UZ';

// elBtn.addEventListener('click', function () {
// 	record.start();
// });

// record.onerror = function () {
// 	console.log('Error');
// };

// record.onend = function () {
// 	console.log('END');
// };

// record.onresult = function (evt) {
// 	console.log(evt);
// 	var result = evt.results[0][0].transcript;

// 	if (result === 'yashil') {
// 		document.body.style.backgroundColor = 'green';
// 	} else if (result === 'qizil') {
// 		document.body.style.backgroundColor = 'red';
// 	} else if (result === 'sariq') {
// 		document.body.style.backgroundColor = 'yellow';
// 	}else if (result === 'siyohrang') {
// 		document.body.style.backgroundColor = 'purple';
// }
//  };
