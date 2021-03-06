const express = require('express');
const router = express.Router();
const problemService = require("../services/problemService_aftermongo")
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

//get problems
router.get('/problems',function(req, res){
  problemService.getProblems()
    .then(problems => {
      res.json(problems)
    });
})

//get problem
router.get('/problem/:id',(req, res) => {
  const id = req.params.id;
  problemService.getProblem(+id)
    .then( problem => res.json(problem))
})
//post problem
router.post('/problems',jsonParser, (req, res) => {
  console.log("stuff adding to data base")
  problemService.addProblem(req.body)
    .then(problem => {
      res.json(problem);
    }, (error) => {
      res.status(400).send('Problem name already exists!');
    })
})

module.exports = router;
