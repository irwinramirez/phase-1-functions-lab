// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(42-pickupLocation);
}
function distanceFromHqInFeet(pickupLocation){
    return distanceFromHqInBlocks(pickupLocation) * 264;
}
function distanceTravelledInFeet(start, destination){
    if(start > destination){
        return (start - destination) * 264;
    }
    else{
        return (destination - start)* 264;
    } 

}
function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet (start, destination);
    if(distance < 400){
        return 0
    }
    else if (distance > 400 && distance <= 2000 ){
        return .02 * (distance - 400)
    }
    else if (distance > 2000 && distance < 2500){
        return 25
    }
    else if (distance > 2500){
        return "cannot travel that far"
    }
}
