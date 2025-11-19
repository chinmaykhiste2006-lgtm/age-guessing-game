const males = [
    { name: "Arjun", age: 26 },
    { name: "Rohan", age: 28 },
    { name: "Vikram", age: 32 },
    { name: "Siddharth", age: 24 },
    { name: "Amit", age: 30 },
    { name: "Kunal", age: 27 },
    { name: "Rahul", age: 25 },
    { name: "Manish", age: 33 },
    { name: "Harsh", age: 22 },
    { name: "Suresh", age: 35 }
    ]
  
const females = [
    { name: "Ananya", age: 23 },
    { name: "Priya", age: 27 },
    { name: "Kavya", age: 21 },
    { name: "Sneha", age: 25 },
    { name: "Aditi",age: 29 },
    { name: "Riya",age: 24 },
    { name: "Meera",age: 28 },
    { name: "Pooja", age: 26 },
    { name: "Shreya", age: 22 },
    { name: "Nisha", age: 30 }
    ]
  
   const others = [
      { name: "Avery", age: 23 },
      { name: "Jordan", age: 19 },
      { name: "Riley", age: 20 },
      { name: "Phoenix", age: 30 },
      { name: "Skyler", age: 21 },
      { name: "Rowan", age: 27 },
      { name: "Dakota", age: 24 },
      { name: "Charlie", age: 20 },
      { name: "Emerson", age: 31 },
      { name: "Blair", age: 19 }
    ]
  
export let random_human;
export let age;

export function randomName(gender, num){


    if(gender === "male"){
         random_human = males[num];
         
        }

    else if(gender === "female"){
        random_human = females[num];
        
    }

    else {
        random_human = others[num];
        
    }

    age = random_human.age;
    console.log(random_human.age);

    document.querySelector('.js-name').
innerHTML = `
Guess ${random_human.name}'s Age
`
};




