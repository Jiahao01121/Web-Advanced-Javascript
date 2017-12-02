# P5 Interactive game
#### Date: Oct 19 - Oct 22

---
## Demo
[APP]( https://jiahao01121.github.io/Web-Advanced-Javascript/web-advanced-jS-assignment-resubmission/interactive-website/p5_obj-test/)

## Library & Tech & Language used:
 - p5.js
 - es6

## Project description
 - Interactive game that build with p5.js and canvas API.

 - Concept:

  The idea of this game is to use the concept of Object Oriented Programming to construct "Object" that holds every single piece of information about one instance, and produce multiple instance that have same attributes but different value/state.

 - Game mechanism:

  45 balls that have different initial starting point, speed and acceleration. The position of the balls equals to the current position plus the speed value that stores as an object attribute inside each ball's object. Evert time the balls touched bars at bottom of the screen, assign the x position of the balls equals current x - speed.
 - leaderboard:

  every time ball touches the bar, score plus one. So that user can track the score they got and also score is stored as object's attribute inside every ball's instances.
 - cheat mode (unfinished):

 when the balls reaches certain y position, the bar automatically move to the correspondent position in order to score.


## Highlight:
- Interactive:
  - Each ball in the game is an object, calculator on the top is update base on every object.

---

##### File Structure:
```
p5_obj-test
│
├── index.html
├── libraries
├── sketch.js (entry point)
│    
└README.md (Detailed info about the project)
```
