controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`divano`, tomi, -100, 0)
    animation.runImageAnimation(
    tomi,
    assets.animation`tom1`,
    100,
    false
    )
})
let nem: Sprite = null
let projectile: Sprite = null
let tomi: Sprite = null
scene.setBackgroundColor(2)
scene.setBackgroundImage(assets.image`road`)
tomi = sprites.create(assets.image`tomi`, SpriteKind.Player)
tomi.setPosition(155, 65)
controller.moveSprite(tomi, 70, 70)
tomi.setStayInScreen(true)
game.onUpdateInterval(randint(1000, 2500), function () {
    nem = sprites.create(assets.image`nem`, SpriteKind.Food)
    nem.setPosition(0, randint(20, 100))
    nem.setVelocity(50, 0)
})
