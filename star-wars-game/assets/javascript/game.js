var hp;
var atkDmg;
var yourAtk = Math.floor(Math.random() * 10) + 20;


var images = [
    "assets/images/Yoda.png",
    "assets/images/darth-vader.jpg",
    "assets/images/stormtrooper.png",
    "assets/images/solo.jpg"
];

var yoda = $("<div>");
yoda.attr({
    "id": 'master',
    "class": 'char',

});
yoda.hp = 150;
yoda.atkDmg = 20;
yoda.css({
    "background-image": "url('" + images[0] + "')",
    "background-size": "cover",
    "border": '1px solid red',
    "height": '200px',
    "width": '200px',
    "margin": '10px',
});

$("#charSel").append(yoda);
$(yoda).html(yoda.hp)



var vader = $("<div>");
vader.attr({
    "id": 'father',
    "class": 'char',

});
vader.hp = 200;
vader.atkDmg = 35;
vader.css({
    "background-image": "url('" + images[1] + "')",
    "background-size": "cover",
    "border": '1px solid red',
    "height": '200px',
    "width": '200px',
    "margin": '10px',

});
$("#charSel").append(vader);
$(vader).html(vader.hp)

var trooper = $("<div>");
trooper.attr({
    "id": 'storm',
    "class": 'char',

});
trooper.hp = 50;
trooper.atkDmg = 5;
trooper.css({
    "background-image": "url('" + images[2] + "')",
    "background-size": "cover",
    "border": '1px solid red',
    "height": '200px',
    "width": '200px',
    "margin": '10px',
});
$("#charSel").append(trooper);
$(trooper).html(trooper.hp)


var solo = $("<div>");
solo.attr({
    "id": 'han',
    "class": 'char',

});
solo.hp = 175;
solo.atkDmg = 25;
solo.css({
    "background-image": "url('" + images[3] + "')",
    "background-size": "cover",
    "border": '1px solid red',
    "height": '200px',
    "width": '200px',
    "margin": '10px',
});
$("#charSel").append(solo);
$(solo).html(solo.hp);


charSet();
var yourChar;

function charSet() {
    console.log("click ready")

    $("#charSel").on('click', '.char', function () {
        console.log("select")
        
        $('#enemyPool').append($('.char'));
        $("#yourChar").append($(this));
        
        yourChar = this;

        enemyset();
    });

};

var badGuy;

function enemyset() {
    console.log("incel");
    $("#enemyPool").on('click', '.char', function () {
        console.log("enemy")
        $("#defender").append($(this));
        badGuy = this;


        $("#enemyPool").off("click");

        fightSection();

    });
};


function fightSection() {
    console.log("get ready");
    $(document).on('click', '#attack', function() {
        console.log(yourChar)
        
        console.log("fight!");
        console.log(badGuy)
        console.log(badGuy.hp)
        console.log(vader.hp)


        //At this point i could not get the hp and atkDmg values to follow it down to this point so i could not call them for argument

    })
};