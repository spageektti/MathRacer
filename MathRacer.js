/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: MathRacer
@author: spageektti 
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"
const road = "r"

setLegend(
  [player, bitmap`
................
.....446644.....
....44444444....
...LD4DDDD4DL...
...L44444444L...
...L41111114L...
...4111111114...
....44444444....
....14DDDD41....
....14444441....
....44DDDD44....
...L14444441L...
...L14DDDD41L...
...LD444444DL...
....D33DD33D....
................`],
  [road, bitmap`
2000000000000000
2000000000000000
2000000000000000
0000000000000000
0000000000000002
0000000000000002
0000000000000002
0000000000000000
2000000000000000
2000000000000000
2000000000000000
0000000000000000
0000000000000002
0000000000000002
0000000000000002
0000000000000000`],
)

setSolids([])

let level = 0
const levels = [
  map`
.........
.........
.........
.........
.........
.........
.........
....p....`
]

setMap(levels[level])
setBackground(road)

onInput("a", () => {
  getFirst(player).x -= 1
})

onInput("d", () => {
  getFirst(player).x += 1
})

afterInput(() => {

})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// need to be in function to work
async function move() {
  for (j = 0; j < 10; j++) {
    for (let i = 7; i >= 0; i--) { // the "i" need to be 7 to make a little break
      await sleep(500);
      getFirst(player).y = i;
    }
  }
}

move();
