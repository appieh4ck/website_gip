/**
 * Created by Appie on 10-1-2017.
 */
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


$(function() {

    var $document   = $(document),
        selector    = '[data-rangeslider]',
        $input      = $(selector);

    $document.on('change', selector, function(e) {
        var value = e.target.value,
            output = e.target.parentNode.getElementsByTagName('output')[0];
        output.innerHTML = value;


        var myData = 'column_name=' + 'servoPosition' + '&' + 'value='+ value;

        jQuery.ajax({
            type: "POST", // HTTP method POST or GET
            url: "response.php", //Where to make Ajax calls
            dataType:"text", // Data type, HTML, json etc.
            data:myData, //post variables
            success:function(){
            },
            error:function (xhr, ajaxOptions, thrownError){
                alert(thrownError); //throw any errors
            }
        });



    });

    $input.rangeslider({

        // Deactivate the feature detection
        polyfill: false,

        // Callback function
        onInit: function() {},

        // Callback function
        onSlide: function(position, value) {},

        // Callback function
        onSlideEnd: function(position) {}
    });

    // Example functionality to demonstrate programmatic value changes
    $document.on('click', '#js-example-change-value button', function(e) {
        var $inputRange = $('input[type="range"]', e.target.parentNode),
            value = $('input[type="number"]', e.target.parentNode)[0].value;

        $inputRange.val(value).change();
    });


});

$(function() {

    var $document   = $(document),
        selector    = '[data-rangeslider2]',
        $input      = $(selector);

    $document.on('change', selector, function(e) {
        var value = e.target.value,
            output = e.target.parentNode.getElementsByTagName('output')[0];
        output.innerHTML = value;


        var myData = 'column_name=' + 'servoPosition1' + '&' + 'value='+ value;

        jQuery.ajax({
            type: "POST", // HTTP method POST or GET
            url: "response.php", //Where to make Ajax calls
            dataType:"text", // Data type, HTML, json etc.
            data:myData, //post variables
            success:function(){
            },
            error:function (xhr, ajaxOptions, thrownError){
                alert(thrownError); //throw any errors
            }
        });



    });

    $input.rangeslider({

        // Deactivate the feature detection
        polyfill: false,

        // Callback function
        onInit: function() {},

        // Callback function
        onSlide: function(position, value) {},

        // Callback function
        onSlideEnd: function(position) {}
    });

    // Example functionality to demonstrate programmatic value changes
    $document.on('click', '#js-example-change-value button', function(e) {
        var $inputRange = $('input[type="range"]', e.target.parentNode),
            value = $('input[type="number"]', e.target.parentNode)[0].value;

        $inputRange.val(value).change();
    });


});

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