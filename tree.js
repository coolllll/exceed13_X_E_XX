var suggestText = "";
var water = false;
var noWater = false;
var light = false;
var noLight = false;
var dead = false;
var fine = false

function findStatus(type, temp, water) {
    if (type == "Cactus") {
        if (water < 300)
            dead = true;
        else if (water < 350)
            noLight =  true;
        else if (water < 900)
            fine = true;
        else
            dead = true;
        if (temp < 30)
            fine = true;
        else if (temp < 40)
            noWater = true;
        else
            dead = true;
    } else if (type == "Flower") {
        if (water < 300)
            dead = true;
        else if (water < 350)
            light = true;
        else if (water < 700)
            fine = true;
        else
            dead = true;
        if (temp < 15)
            dead = true;
        else if (temp < 30)
            fine = true;
        else
            dead = true;
    } else {
        if (water < 300)
            noLight = true;
        else if (water < 700)
            fine = true;
        else
            dead = true;
        if (temp < 15)
            dead = true;
        else if (temp < 32)
            fine = true
        else if (temp < 40)
            noWater = true;
        else
            dead = true;
    }
    setTextWaring(status);
}

function setTextWaring(status) {
    if (dead)
        suggestText = "Your's plant might died from this bad enviroment.";
    else if (water && light)
        suggestText = "Need a lot of water and light.";
    else if (water && nolight)
        suggestText = "Need water but light is already enough so you may setting to take it back in place.";
    else if (noWater && light)
        suggestText = "Water is enough now. You should give more light to plant.";
    else if (noWater && noLight)
        suggestText = "Your plant is now full. No more water and No more light.";
    else if (water)
        suggestText = "Need more water but don't give it too much cause tempurature is very high right now.";
    else if (noWater)
        suggestText = "Water is enough now. You can manage or adjust water in setting.";
    else if (light)
        suggestText = "Now it's no light need some lightfor growing.";
    else if (noLight)
        suggestText = "Your's plant get a lot of light it may die from high tempurature.";
    else
        suggestText = "Your plant is fine normal giving water and normal tempurature.";
}
