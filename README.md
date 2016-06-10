# Robot Masters for MegaMan/Rockman series
A React app listing the robot masters from the Mega Man series. It uses react-flip-move that uses FLIP animations.

# Inspired by Flip Move Samples
You can find those examples here:

https://github.com/joshwcomeau/react-flip-move

#Running Locally
* Clone repo
* Run the following commands:

```bash
npm install
npm run start
```
* Open your favorite browser and enter

```bash
localhost:8080/webpack-dev-server/
```

#Functionality (buttons)

## List
Displays robot masters in a list format.

## Grid
Displays robot masters in a grid-like format (current default)

## Ascending
Orders robot masters by `Ascending` or `Decending` order. Order determined by robot master id (e.g. 009)

## Shuffle
Shuffles the robot masters order randomly. Hey, this is cool when you replay the game and can't figure out which boss to start. Forget the traditional suggested kill order (live a little!)  :p

## Refresh
Resets the robot master list.  

## Series
Filters the robot masters for each specific series.

## Close button
If you put your mouse over each robot master, you will see a "X" button. This removes the robot master from the list. Yay, you killed him or her! (Yes, there's a [female robot master](http://megaman.wikia.com/wiki/Splash_Woman))


