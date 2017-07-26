let distanceX, distanceY

export default function getDistance(objA, objB) {
    distanceX = objA.x - objB.x 
    distanceY = objA.y - objB.y 
    return Math.sqrt(distanceX * distanceX + distanceY * distanceY) 
}