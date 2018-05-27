var objScoreKeeper = {
    playerScore: 0,
    targetScore:  0,
    ruby: 0,
    emerald: 0,
    sapphire: 0,
    diamond: 0,
    keepPlaying: true,
    startGame: function() {
        //playerScore and playerWin are reset at game start
        objScoreKeeper.playerScore = 0;
        objScoreKeeper.keepPlaying = true;
        
        //set target score to a randomly selected value between 50 - 99
        //this.targetScore = Math.floor(Math.random * 50 + 50); 
        objScoreKeeper.targetScore = Math.floor(Math.random() * 30);
        
        //each crystal will have a specific pattern of points
        objScoreKeeper.ruby = 1;//Math.ceil(Math.random() * 5);
        objScoreKeeper.sapphire = Math.ceil(Math.random() * 4 + 3);
        objScoreKeeper.emerald = Math.ceil(Math.random() * 3 + 4);
        objScoreKeeper.diamond = Math.ceil(Math.random() * 6 + 2);
        console.log(objScoreKeeper.ruby);
        console.log(objScoreKeeper.sapphire);
        console.log(objScoreKeeper.emerald);
        console.log(objScoreKeeper.diamond);
        
        //!!! gameHTML needs to be declared after the crystals have had thier values randomized so that the buttons generated take the correct values
        var gameHTML = `
            <button id="ruby" class="button" value="`+ objScoreKeeper.ruby +`">
                Ruby
            </button>
            
            <button id="sapphire" class="button" value="`+ objScoreKeeper.sapphire +`">
                Sapphire
            </button>
            
            <button id="emerald" class="button" value="`+ objScoreKeeper.emerald +`">
                Emerald
            </button>
            
            <button id="diamond" class="button" value="`+ objScoreKeeper.diamond +`">
                Diamond
            </button>
            `;

        //!!! 
        var scoreHTML = `
            <div id="player-score">
                Your Score: `+ objScoreKeeper.playerScore +`
            </div>
            <div id="target-score">
                Target Score: `+ objScoreKeeper.targetScore +`
            </div>
            `;
        
        //display game content
        $("#game").html(gameHTML);
        $("#score").html(scoreHTML);
        $("#end").html('<br><br><div id="end"></div>')
        
        //!!! The html to which a listener applies must already exist before you try to assign it
        //set event listener for gem clicks
        
        $(".button").on("click", objScoreKeeper.addPoints);
    
        
    },
    
    addPoints: function(){

        var restartHTML = `
        <button id="restart" class="button">
            Play Again
        </button>
        `;

        if (objScoreKeeper.keepPlaying == true) {
            objScoreKeeper.playerScore += parseInt($(this).val());
            if (objScoreKeeper.playerScore == objScoreKeeper.targetScore) {
                // player wins
                objScoreKeeper.keepPlaying = false;
                $("#end").html("<h2>you win</h2>" + restartHTML);
            } else if (objScoreKeeper.playerScore > objScoreKeeper.targetScore){
                // player loses
                objScoreKeeper.keepPlaying = false;
                $("#end").html("<h2>You Lose</h2>" + restartHTML);
            } else {
                // player score is low enough to continue play
                $("#end").html("<h2>keep going</h2>");
            }
            //update player score
            $("#player-score").html(`
            <div id="player-score">
            Your Score: `+ objScoreKeeper.playerScore +`
            </div>
            `);
        };

        $("#restart").on("click", objScoreKeeper.startGame);

    },
    
};

$(document).ready(objScoreKeeper.startGame);