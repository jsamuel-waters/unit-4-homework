var objScoreKeeper = {
    playerScore: 0,
    targetScore:  0,
    ruby: 0,
    emerald: 0,
    sapphire: 0,
    diamond: 0,
};

var gameHTML = `
    <button id="ruby" class="button" value="`+ objScoreKeeper.ruby +`">
        Ruby
    </button>
    
    <button id="sapphire" class="button" value="`+ objScoreKeeper.sapphire +`">
        Sapphire
    </button>
    
    <button id="emerald" class="button" value="3">
        Emerald
    </button>
    
    <button id="diamond" class="button" value="4">
        Diamond
    </button>
    `;

    objScoreKeeper = {
    playerScore: 0,
    targetScore:  0,
    ruby: 0,
    emerald: 0,
    sapphire: 0,
    diamond: 0,
    startGame: function() {
        //playerScore is reset at game start
        this.playerScore = 0;

        //set target score to a randomly selected value between 50 - 99
        //this.targetScore = Math.floor(Math.random * 50 + 50); 
        this.targetScore = Math.floor(Math.random * 30);

        //each crystal will have a specific pattern of points
        this.ruby = Math.ceil(Math.random() * 5);
        this.sapphire = Math.ceil(Math.random() * 4 + 3);
        this.emerald = Math.ceil(Math.random() * 3 + 4);
        objScoreKeeper.diamond = Math.ceil(Math.random() * 6 + 2);
        console.log(this.ruby);
        console.log(this.sapphire);
        console.log(this.emerald);
        console.log(objScoreKeeper.diamond);
        
        //display game content
        $("#game").html(gameHTML);
        console.log(this.addPoints);
        
        //++!!!
        //The html to which a listener applies must already exist before you try to assign it
        //--!!!
        //set event listener for gem clicks
        
        $(".button").on("click", objScoreKeeper.addPoints);


        
    },
    
    addPoints: function(){
        console.log("hello");
        if (this.id == "ruby") {
            objScoreKeeper.ruby += $(this).val(); //getting treated like a string
            console.log(objScoreKeeper.ruby);
        
        } else if (this.id == "sapphire") {
                console.log("hi sapphy");

        } else if (this.id == "emerald") {
                console.log("hi emmy");

        } else {
                console.log("hi diva");
        }

    },
    
    checkScore: function(){
        
    }
};

$(document).ready(objScoreKeeper.startGame);

// //the game executes below
// $(document).ready(function() {
//     $("#game").html(gameHTML);

// });