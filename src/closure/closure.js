function sumWithClosure(firstNum=0) {
    return function op(secondNum=0) {
        return console.log(firstNum + secondNum);
        };
  }
  sumWithClosure(3)(2);


function createPetList() {
    const petList = [];
    return function (newPet) {
        if(newPet)
          petList.push(newPet);
        
      return petList;
    }
  }

  const myPetList = createPetList();
myPetList("gato");
myPetList("perruno");
console.log(myPetList());