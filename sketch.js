var cubo
function setup() {
  createCanvas(400,400);
cubo=createSprite(200,200)
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
  cubo.position.x=cubo.position.x+5  
  }

  if(keyIsDown(LEFT_ARROW)){
    cubo.position.x=cubo.position.x-5  
    }

    if(keyIsDown(UP_ARROW)){
      cubo.position.y=cubo.position.y-5  
      }

      if(keyIsDown(DOWN_ARROW)){
        cubo.position.y=cubo.position.y+5  
        }
drawSprites()
}




