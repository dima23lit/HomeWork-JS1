// html tree
let body = {
    tagName: 'body',
    subTags:[
        {tagName: 'div',
            subTags:[
                {tegName: 'span',
                 text: 'Enter a data please:'
                },
                {tagName : 'br'},
                {tagName: 'input',
                attrs: {
                    type:"text",
                    id:"name"
                    }},
                {tagName: 'input',
                attrs: {
                    type:"text",
                    id:"surname"
                    }}
            ],
        },
        {
            tagName: 'div',
            subTags:[
                {tagName: 'button',
                 text : 'OK',
                    attrs: {id:"ok"
                    }},
                {tagName: 'button',
                 text : 'cancel',
                    attrs: {id:"cancel"
                    }
                }
            ],
        }
        ],
     }


alert(body.subTags[1].subTags[1].attrs.id)
alert(body.subTags[0].subTags[2].attrs.id)


// // declarative fields
let notebook = {
    brand: "HP",
    type:  "440 G4",
    model: "Y7Z75EA",
    ram: 4,
    size: "14",
    weight: 1.8,
    resolution: {
        width: 1920,
        height: 1080,
    },
};

let phone = {
    brand: "meizu",
    model: "m2",
    ram: 2,
    color: "black",
};

let person = {
    name: "Donald",
    surname: "Trump",
    married: true,
}
notebook ['brand'] = prompt('Enter a name')
notebook ['type'] = prompt('Enter a name')
notebook ['model'] = prompt('Enter a name')
notebook ['ram'] = +prompt('Enter a number')
notebook ['size'] = prompt('Enter a name')
notebook ['weight'] = +prompt('Enter a number')
notebook.resolution ['width'] = +prompt('Enter a number')
notebook.resolution ['height'] = +prompt('Enter a number')

phone ['brand'] = prompt('Enter a name')
phone ['model'] = prompt('Enter a name')
phone ['ram'] = +prompt('Enter a number')
phone ['color'] = prompt('Enter a name')

person ['name'] = prompt('Enter a name')
person ['surname'] = prompt('Enter a name')
person ['married'] = prompt('Enter true or false')

console.log (notebook)
console.log (phone)
console.log (person)


// object links
person ['smartphone'] = phone
person ['laptop'] = notebook
phone ['owner'] = person
notebook ['owner'] = person
console.log(person.smartphone.owner.laptop.owner.smartphone == person.smartphone)

console.log (notebook)
console.log (phone)
console.log (person)



// imperative array fill 3
let arr = []
arr[0] = +prompt()
arr[1] = +prompt()
arr[2] = +prompt()
arr[3] = +prompt()
arr[4] = +prompt()
console.log(arr)



// while confirm
user = ''
while (user != true){ 
    user = confirm()
	if (user == true){ 
		continue;      
	}
    if (user == null){
		break; 
	}
}


// array fill
let arr2 = []
do {
  let n = arr2.push ('')
    n = prompt("")
} while (n)


// array fill nopush
let arr1 = []
while (arr1 != true) {
    arr1.length = 0;
    a = arr1[arr1.length++] = prompt();
    console.log(arr1)
    if (a == null){
        break;
}
}



// infinite probability
let i = 0;
 while(true) {
    i++;
    if(Math.random() > 0.9) {
        alert(i);
        break;
    }
}



// empty loop
    while (true){
        let c = prompt();
        if (c!== null)
        break;
    }


// progression sum
for (let z = 1; z < 100 ; z = z + 3) {
  console.log (z)
}


// chess one line
str ='';
for (let e=0; e<12;e++){
if (e % 2 != 0){str += "."}
 else{str += "#"};}
 alert(str);


// number
let str = '';
for (var d=0;d<=9;d++){
  for (var e=0;e<=9;e++){
    str += e;
    if (e==9) { str += '\n'}
  }
}
alert(str);


// chess
for (var g = 1 , str = "" ; g < 10 ; g++){
    for (let k = 1 ; k <= 6 ; k++){
        str +=".";
        str +="#";
            if(k == 6){
                str += "\n";
                g++;}
   
    for (let k = 1 ; k <= 6 && g % 2 == 0; k ++){
        str +="#";
        str +=".";
        if(k == 6){
                str +="\n";
                }   
}
}
   }
console.log (str);


// cubes
var v = [];
for (var index = 0; index < 100; index++) {
  v[index] = Math.pow(index,3);   
}
console.log(v)


// синий пояс
var x = 0, y = 0;
var max = 5;
var space = "",
    star = "";

while (x < max) {
    space = "";
    star = "";
    for (y = 1; y < max - x; y+=1) space += ".";
    for (y = 0; y < 2 * x + 1; y++) star += "#";
    console.log(space + star + space);
    x++;
}





