controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
function Walking () {
    if (controller.down.isPressed()) {
        animation.runImageAnimation(
        Character,
        assets.animation`WalkDown`,
        250,
        false
        )
    } else if (controller.up.isPressed()) {
        animation.runImageAnimation(
        Character,
        assets.animation`WalkUp`,
        250,
        false
        )
    } else if (controller.right.isPressed()) {
        animation.runImageAnimation(
        Character,
        assets.animation`WalkRight`,
        250,
        false
        )
    } else {
        animation.runImageAnimation(
        Character,
        assets.animation`WalkLeft`,
        250,
        false
        )
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
let Character: Sprite = null
tiles.loadMap(tiles.createMap(tilemap`Route 1`))
Character = sprites.create(assets.image`PlayerDown`, SpriteKind.Player)
controller.moveSprite(Character)
Walking()
scene.cameraFollowSprite(Character)
Character.setPosition(80, 120)
