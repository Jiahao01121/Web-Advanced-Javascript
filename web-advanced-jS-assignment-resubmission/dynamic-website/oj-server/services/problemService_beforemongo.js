let fakeData = [{id: 1, name: 'a',desc: 'b'},{id: 2, name: 'c',desc: 'd'}];

const getProblems = function(){
  return new Promise((resolve, reject) => {
    resolve(fakeData);
  })
}

const getProblem = function(id){
  return new Promise((resolve, reject) => {
    resolve( fakeData.find(i => i.id === id) );
  })
}

const addProblem = function(newProblem){
  return new Promise((resolve, reject) =>{
    if (fakeData.find(p => p.name === newProblem.name)) {
      reject('Problem already exists!')
    } else {
      newProblem.id = fakeData.length + 1;
      fakeData.push(newProblem);
      resolve(newProblem);
    }
  })

}
module.exports = {
  getProblems,
  getProblem,
  addProblem
}
