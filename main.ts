info.onCountdownEnd(function () {
    game.gameOver(true)
})
info.startCountdown(60)
game.setGameOverEffect(false, effects.slash)
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    .......22...22......
    ......2322.2222.....
    ......232222222.....
    ......222222222.....
    .......22222b2......
    ........222b2.......
    .........222........
    ..........2.........
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . c a a a c . . . . . . . 
    . . . c c f a b b c . . . . . . 
    . . . b f f b f a a . . . . . . 
    . . . b b a b f f a . . . . . . 
    . . . c b f b b a c . . . . . . 
    . . . . b a f c c . . . . . . . 
    . . . . . b b c . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
controller.moveSprite(mySprite)
mySprite2.setPosition(20, 84)
mySprite2.follow(mySprite, randint(75, 90))
forever(function () {
	
})
forever(function () {
    if (mySprite.overlapsWith(mySprite2)) {
        sprites.destroy(mySprite)
        game.gameOver(false)
    }
    if (mySprite.x > 160) {
        mySprite.x = 5
        mySprite2.follow(mySprite, randint(10, 200))
        info.changeCountdownBy(10)
    } else if (mySprite.y > 120) {
        mySprite.y = 5
        mySprite2.follow(mySprite, randint(10, 200))
        info.changeCountdownBy(10)
    } else if (mySprite.y < 0) {
        mySprite.y = 115
        mySprite2.follow(mySprite, randint(10, 200))
        info.changeCountdownBy(10)
    } else if (mySprite.x < 0) {
        mySprite.x = 155
        mySprite2.follow(mySprite, randint(10, 200))
        info.changeCountdownBy(10)
    }
})
