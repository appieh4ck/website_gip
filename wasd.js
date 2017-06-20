/**
 * Created by Appie on 17-1-2017.
 */
/* WASD MOVEMENT */
x = 0;
y = 0;
speed = 5;
angle = 0;
mod = 0;
var hasGP = false;
var repGP;

var input = {
    left: false,
    right: false,
    up: false,
    down: false
};

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
car = new Image();
car.src = "http://i.imgur.com/uwApbV7.png";

window.addEventListener("keydown", keypress_handler, false);
window.addEventListener("keyup", keyup_handler, false);

var moveInterval = setInterval(function () {
    draw();
}, 30);

function draw() {
    context = canvas.getContext("2d");
    context.clearRect(0, 0, 800, 800);

    context.fillStyle = "rgb(200, 100, 220)";
    context.fillRect(50, 50, 100, 100);

    x += (speed * mod) * Math.cos(Math.PI / 180 * angle);
    y += (speed * mod) * Math.sin(Math.PI / 180 * angle);

    context.save();
    context.translate(x, y);
    context.rotate(Math.PI / 180 * angle);
    context.drawImage(car, -(car.width / 2), -(car.height / 2));
    context.restore();
}

function keyup_handler(event) {
    if (event.keyCode == 87 || event.keyCode == 83) {
        mod = 0;
    }
}

function keypress_handler(event) {
    console.log(event.keyCode);
    if (event.keyCode == 87) {
        voor();
        mod = 1;

    }
    if (event.keyCode == 83) {
        achter();
        mod = -1;
    }
    if (event.keyCode == 65) {
        links();
        angle -= 5;
    }
    if (event.keyCode == 68) {
        rechts();
        angle += 5;
    }
}

function voor() {
    beweging(180, 0);
}

function achter() {
	beweging(0, 180);
}

function links() {
	beweging(0,0);
}

function rechts() {
	beweging(180,180);
}

function stop() {
	beweging(95,95);
}


function canGame() {
    return "getGamepads" in navigator;
}

if(canGame()) {

    var prompt = "To begin using your gamepad, connect it and press any button!";
    $("#gamepadPrompt").text(prompt);

    $(window).on("gamepadconnected", function() {
        hasGP = true;
        $("#gamepadPrompt").html("Gamepad connected!");
        repGP = window.setInterval(checkGamepad,100);
    });

    $(window).on("gamepaddisconnected", function() {
        $("#gamepadPrompt").text(prompt);
        window.clearInterval(repGP);
    });

    //setup an interval for Chrome
    var checkGP = window.setInterval(function() {
        if(navigator.getGamepads()[0]) {
            if(!hasGP) $(window).trigger("gamepadconnected");
            window.clearInterval(checkGP);
        }
    }, 500);

    function checkGamepad() {
        var gp = navigator.getGamepads()[0];
        var axeLF = 0;
		var axeLF2 = 0;
		var axeRF = 0;
		var LT = 0;
		var RT = 0;


		var a =0;
        if (gp.buttons[7].value > 0) {
			var l_servo = 0;
			var r_servo = 0;
            mod = 1;
			LT += gp.buttons[7].value
			LT = LT * 100;
			console.log(LT);
			l_servo = map_range(LT, -100, 100, 0, 180);
			r_servo = map_range(LT, -100, 100, 95, 0);
            //voor();
            console.log("vooruit");
			beweging(l_servo,r_servo);

        } else if (gp.buttons[6].value>0){
			var l_servo = 0;
			var r_servo = 0;
            mod = -1;
			RT = gp.buttons[6].value
			RT = RT *100;
			l_servo = map_range(RT, -100, 100, 95, 0);
			r_servo = map_range(RT, -100, 100, 0, 180);
            //achter();
            console.log("RT", RT);
			beweging(l_servo, r_servo);
        } else if(gp.axes[0] < -0.5) {
			var l_servo = 0;
			
            input.left = true;
            input.right = false;
            angle -= 5;
			// hier verder werken a mattie
			
			axeLF += gp.axes[0];
			axeLF = axeLF * 100;
			
			l_servo= map_range(axeLF, -100, 0, 0, 95);
			beweging(l_servo,l_servo);
            //links();
            console.log(axeLF);
        } else if(gp.axes[0] > 0.5) {
			var l_servo = 0;
		
            input.left = false;
            input.right = true;
            angle += 5;
			axeLF2 += gp.axes[0];
			axeLF2 = axeLF2 *100;
			l_servo = map_range(axeLF2, 0, 100, 95, 180);
			beweging(l_servo, l_servo);
            //rechts();
            console.log("rechts");
		
        } else {
            input.left = false;
            input.right = false;
            mod =0;

            stop();
        }
		if (gp.axes[2] != 0){
			axeRF += gp.axes[2];
			axeRF = axeRF * 100
			a = map_range(a, -100, 100, 0, 180);
			console.log(a);
			camServo(a);
		}
		
		

    }
}
function camServo(val){
	var myData = 'column_name=' + 'servoPosition2' +'&'+ 'value='+ val;

    jQuery.ajax({
        type: "POST", // HTTP method POST or GET
        url: "response.php", //Where to make Ajax calls
        dataType:"text", // Data type, HTML, json etc.
        data:myData, //post variables
        success:function(){
            //alert("I am an alert box!");
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert(thrownError); //throw any errors
        }
    });
}

function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function beweging(servo1, servo2){
	var myData = 'column_name=' + 'servoPosition' +'&'+ 'value='+ servo1;

    jQuery.ajax({
        type: "POST", // HTTP method POST or GET
        url: "response.php", //Where to make Ajax calls
        dataType:"text", // Data type, HTML, json etc.
        data:myData, //post variables
        success:function(){
            //alert("I am an alert box!");
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert(thrownError); //throw any errors
        }
    });
    var myData2 = 'column_name=' + 'servoPosition1' +'&'+ 'value='+ servo2;
    jQuery.ajax({
        type: "POST", // HTTP method POST or GET
        url: "response.php", //Where to make Ajax calls
        dataType:"text", // Data type, HTML, json etc.
        data:myData2, //post variables
        success:function(){
            //alert("I am an alert box!");
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert(thrownError); //throw any errors
        }
    });
}
