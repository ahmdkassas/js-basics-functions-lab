function distanceFromHqInBlocks (blockNum) {
    if(blockNum >= 42){
        return blockNum - 42;
    }
    else{
        return 42 - blockNum;
    }
    
  }
  
  function distanceFromHqInFeet (blockNum) {
    let blocks = distanceFromHqInBlocks(blockNum);
    return blocks * 264;
  }

  function distanceTravelledInFeet (block1, block2) {
    let blocks = Math.abs(block1 - block2);
    return blocks * 264; 
  }
  
  function calculatesFarePrice (start, end) {
    let distance = distanceTravelledInFeet(start, end);
    let fare = 0;
    if(distance <= 400){
        return fare;
    }
    else if(distance > 400 && distance <= 2000){
        fare = (distance - 400) * 0.02;
        return fare;
    }
    else if(distance > 2000 && distance <= 2500){
        fare = 25;
        return fare;
    }
    else{
        return "cannot travel that far";
    }
  }