var flower = {
    type: "flower",
    info: "",
    water: 4,
    time: 250
};
var cactus = {
    type: "cactus",
    info: "",
    water: 4,
    time: 250
};
var normalTree = {
    type: "normalTree",
    info: "",
    water: 4,
    time: 250
};
var flower = {
    type: "flower",
    minTem: 0,
    maxTem: 0,
    info: "",
    water: 4,
    time: 250
};
var cactus = {
    type: "cactus",
    info: "",
    water: 4,
    time: 250
};
var normalTree = {
    type: "normalTree",
    info: "",
    water: 4,
    time: 250
};
var suggestText = "";
var status = 0;

function findStatus(type, temp, water) {
    if (type == "Cactus") {
        if (water < 300)
            status += 1024;
        else if (water < 350)
            status += 256;
        else if (water < 900)
            status += 0;
        else
            status += 1024;
        if (temp < 30)
            status += 0;
        else if (temp < 40)
            status += 16;
        else
            status += 1024;
    } else if (type == "Flower") {
        if (water < 300)
            status += 1024;
        else if (water < 350)
            status += 64;
        else if (water < 700)
            status += 0;
        else
            status += 1024;
        if (temp < 15)
            status += 1024;
        else if (temp < 30)
            status += 0;
        else
            status += 1024;
    } else {
        if (water < 300)
            status += 256;
        else if (water < 700)
            status += 0;
        else
            status += 1024;
        if (temp < 15)
            status += 1024;
        else if (temp < 32)
            status += 0;
        else if (temp < 40)
            status += 16;
        else
            status += 1024;
    }
    // status = 6;
    setTextWaring(status);

}

function setTextWaring(status) {
    if (status == 0)
        suggestText = "Your's plant is fine.";
    else if (status == 4)
        suggestText = "Need more water but don't give it too much cause tempurature is very high right now.";
    else if (status == 16)
        suggestText = "Water is enough now. You can manage or adjust water in setting.";
    else if (status == 64)
        suggestText = "Now it's no light need some lightfor growing.";
    else if (status == 256)
        suggestText = "Now it's high tempurature need if your's plant still there it may harm them. We recommend to take them back home.";
    else if (status >= 1024)
        suggestText = "Your's plant might died from this bad enviroment.";
    else if (status == 8)
        suggestText = "Need more water but don't give it too much cause tempurature is very high right now.";
        else if (status == 68)
            suggestText = "Need a lot of water and light.";
        else if (status == 260)
            suggestText = "Need water but light is already enough so you may setting to take it back in place.";
        else if (status == 32)
            suggestText = "Water is enough now. You can manage or adjust water in setting.";
        else if (status == 80)
            suggestText = "Water is enough now. You should give more light to plant.";
        else if (status == 272)
            suggestText = "Your plant is now full. No more water and No more light.";
        else if (status == 128)
            suggestText = "Need more light for growing and photosynthesis.";
        else if (status == 512)
            suggestText = "Your's plant get a lot of light it may die from high tempurature.";
        else
            suggestText = "Your plant is fine normal giving water and normal tempurature.";
      // $('#sugText').html(suggestText); $('#sugText').css('font-size', '25px');
      // return suggestText;
    }
