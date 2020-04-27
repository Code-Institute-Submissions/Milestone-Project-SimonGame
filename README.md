<h1 align="center">
Interactive Frontend - Milestone Project 2 -Simon Game <br> Joeri van den Kieboom
</h1>
<div align="center">

## Overview

This website is created for people who want to challenge themself with a simple free memory game.<br>
The design is based on simplicity and user friendliness. <br> 
See for yourself : 
[**Simon Game website here!**](https://joeri157.github.io/Milestone-Project-SimonGame/)
</div>

## UX

### Project Purpose

The main goal of the Simon game is to provide a fun and challenging experience to users of all ages.

### Player Experience

- Added an Alert when you open my website, so you get a reminder on reading the **Rules and Instructions**.

### User Stories

- #### As a player, I'd like to see:
    - Easy and simple controls.
    - Different colours for each pad included with sound.
    - A Rule and Instruction window how to play the game.
    - Different 'Strict' button to increase the difficulty.
    
### Wireframes

- [Desktop Display](wireframes/desktopsimon.png)
- [Mobile Display](wireframes/MobileviewSimon.png)
    
## Features

### Excisting Features

- *Power Slider -* <br> 
A simple slider to turn the game ON or OFF.
It will turn basic green to see that you've put the button ON.

- *Coloured Pads -* <br>
4 Basic (abit darker) color pads like the same simon game.<br>
All pads light up with a lighter color and box-shadow effect.

- *Start Button -* <br>
A start button which is changing in color when you turn the power ON. <br>
With the change in color you are able to see that the game is ready to play.

- *Count Display -* <br> 
A simple box with a red border and black background with a text color of red.

- *Strict Slider -* <br>
A slider button to turn the strict option ON or OFF. <br>
Its a different color from the Power button to see the differences between both buttons.

- *Rules and Instruction button -* <br>
A modal button in the top left. <br>
This will open the rules and instructions with a clear rules and instructions.

### Features Left to Implement

None to implement.
  
## Technologies Used

- [HTML](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [Javascript](https://en.wikipedia.org/wiki/JavaScript)
- [Jquery](https://jquery.com/)
- [Bootstrap](https://getbootstrap.com/)

## Testing

|Test Cases |Status |Issues|
| --- | --- | --- |
|When you click on power switch start button should be green| Pass |
|When you click 'one'of the colored pads it should light up| Pass |
|When website loads alert box should pop up | Pass |
|Functions work @ Mozilla| Pass| Only Power button wont reset after win and page reload |
|Functions work @ Google Chrome| Pass |
|Functions work @ Microsoft Edge| Pass |
|Functions work @  Sony Xperia XZ| Pass |
|Pressing power button too quickly to start game| Pass | This may end up in a crash with multiple sounds and colors flashing|

## Validators

- [W3C Markup Validation Center](https://validator.w3.org/)
- [W3C CSS Validation Center](https://jigsaw.w3.org/css-validator/)

## Deployment

- To view the deployed version of [Simon Game!](https://joeri157.github.io/Milestone-Project-SimonGame/) I needed to take the following steps:
    - Log in to [GitHub](https://github.com/).
    - Select - *Joeri157/Milestone-Project-SimonGame* - from the list of repositories.
    - Select - *Settings* - from the navbar near the top right side.
    - Scroll down to where it says - *Github Pages* -
    - There you will find - *Source* -
    - Click on the button and select - *master branch* -
    - After you've set it on *master branch* the page will automatically load again.
    - If you open it right away you will see an **Error404**.
    - This progress before the site goes live will take a couple of minutes.

- To add this repository to your local workspace:
    - Click on the [Simon Game repository on GitHub!](https://joeri157.github.io/Milestone-Project-SimonGame/) link.
    - Select the green button on the right-hand side named **Clone or download** and copy the clone URL.
    - Go into your local workspace and open up a new terminal (git bash).
    - You will need to be inside of the directory that you want to add the cloning to.
    - Type `git clone ` and paste the URL you copied from GitHub and press enter. It should look like this: 
```console
git clone https://github.com/*username*/*repository*
```
The process of cloning will now be completed. For further information on cloning,
 visit [How to clone from GitHub](https://help.github.com/en/articles/cloning-a-repository).


## Credits

### Acknowledgements

- [Google](https://www.google.com/) <br>
HTML Simon-game <br>
CSS Simon-game <br>
Bootstrap Simon-game <br>

- [W3Schools](https://www.w3schools.com/) <br>
Box-shadows <br>
Toggle-Switch <br>

- [FreeCodeCamp](https://www.freecodecamp.org/) <br>
Did a couple of exercises for refreshment.

- [Youtube](https://www.youtube.com/?gl=NL&hl=nl) <br>
[Javscript tutorial](https://www.youtube.com/watch?v=PkZNo7MFNFg&t=10172s) <br>
[Simon Game JavaScript Tutorial for Beginners](https://www.youtube.com/watch?v=n_ec3eowFLQ)

- **MEDIA :** <br>
https://s3.amazonaws.com/freecodecamp/simonSound1.mp3 <br>
https://s3.amazonaws.com/freecodecamp/simonSound2.mp3 <br>
https://s3.amazonaws.com/freecodecamp/simonSound3.mp3 <br>
https://s3.amazonaws.com/freecodecamp/simonSound4.mp3 <br>
