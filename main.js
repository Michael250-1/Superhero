var Canvas=new fabric.Canvas("myCanvas");
playerx=10;
playery=10;
blockwidth=30;
blockheight=30;
var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playery,
            left:playerx
        });
        Canvas.add(player_object);
    });

}
function block_update(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object=Img;
        block_object.scaleToWidth(blockwidth);
        block_object.scaleToHeight(blockheight);
        block_object.set({
            top:playery,
            left:playerx
        });
        Canvas.add(block_object);
    });
    
}


