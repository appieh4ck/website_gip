<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="favicon.ico">
    <title>Appie's Gip</title>
    <!-- Bootstrap core CSS -->
    <link href="css/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="css/vendor/bootstrap/css/ie10-viewport-bug-workaround.css" rel="stylesheet">
    <link href="css/flat-ui.css" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
    <style>
        body {
            min-height: 2000px;
            padding-top: 70px;
        }
    </style>
    <!-- Static navbar -->
    <div class="navbar navbar-inverse navbar-embossed navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="sr-only">Toggle navigation</span> </button> <a class="navbar-brand" href="index.html">Appie's GIP</a> </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li><a href="index.html">Home</a></li>
                    <li class="active"><a href="feed.php">Videofeed</a></li>
                    <li><a href="controls.html">Controls</a></li>
                    <li><a href="wasd.html">WASD</a> </li>
                </ul>
            </div>
            <!--/.nav-collapse -->
        </div>
    </div>
    
  <div class="container">
        <!-- Main component for a primary marketing message or call to action -->
        <div class="jumbotron">
            <img style="-webkit-user-select: none" src="http://<?php echo $_SERVER['SERVER_ADDR'];?>:8081/live.html">
            <div id="slider"></div>
        </div>
    
      
      
            <!-- /container -->
        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="js/flat-ui.min.js"></script>
        <link href="//vjs.zencdn.net/5.8/video-js.min.css" rel="stylesheet">
        <script src="//vjs.zencdn.net/5.8/video.min.js"></script>
</body>

</html>
