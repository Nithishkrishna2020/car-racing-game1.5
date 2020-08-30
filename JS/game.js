class Game{
    constructor(){}
    getState(){
        database.ref("gameState").on("value",(data) =>{
            gameState = data.val();

        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        player = new Player();      
        if(gameState === 0){
            var playerCountRef = await database.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }     
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1,car2,car3,car4];

    }
    play(){
        form.hide();
        textSize(30);
        text("Game Start",120,100);
        Player.getPlayerInfo();
        if(allPlayers!== undefined){
            var displayPosition = 130;
            textSize(15);
            var index = 0;
            var x = 0;
            var y;
        for(var plr in allPlayers){
            // if(plr === "player"+player.index){
            //     fill("red");
            // }
            // else{
            //     fill("black");
            // }
            // displayPosition = displayPosition+20;
            // text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition);
            index = index+1;
            x = x+ 200;
            y = displayHeight-allPlayers[plr].distance;
            cars[index-1].x = x;
            cars[index-1].y = y;
            if(index === player.index){
                cars[index-1].shapeColor = "blue";
                camera.position.x = displayWidth/2;
                camera.position.y = y;
                

            }


        }
        }
        if(keyIsDown(UP_ARROW)&&player.index!== null){
            player.distance = player.distance+50;
            player.update();
        }
        drawSprites();


        
        
    }
}

