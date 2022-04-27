// (|| - OR), (&& - AND), !



const name = 'Sof';
const age = 23;

if (name == 'sof' || age == 22){
    console.log('hello lowercase sof or 22 years old');
}
else if(name == 'Sof' || age == 24){
    console.log('hello uppercase Sof or 24 years old');
}

if(name == 'sof' && age == 23){
    console.log('hello lowercase sof and 23 years old');
}
else if(name == 'Sof' && age == 23){
    console.log('hello uppercase Sof and 23 years old');
}
else{
    console.log('nothing');
}