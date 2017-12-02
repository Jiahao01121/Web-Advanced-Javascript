let fakeData = [{id: 1, name: 'a',desc: 'b'},{id: 2, name: 'c',desc: 'd'}];

const getProblems = function(){
  return new Promise((resolve, reject) => {
    // console.log("JSON.stringify(fakeData)")
    resolve(fakeData);
  })
}

const getProblem = function(id){
  return new Promise((resolve, reject) => {
    resolve( fakeData.find(i => i.id === id) );
  })
}

module.exports = {
  getProblems,
  getProblem
}
