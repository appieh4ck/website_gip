<?php

set_include_path(get_include_path() . PATH_SEPARATOR . '/phpseclib1.0.7');
include('phpseclib1.0.7/Net/SSH2.php');
$status = $_POST['statusServer'];

$ssh = new Net_SSH2($_SERVER['SERVER_ADDR'] ,22);
if (!$ssh->login('pi', 'appieh4ck')) {
    exit('Login Failed');
}
else{
    if ($status == "uit"){
        $ssh->exec('pkill java');
        echo "Java server is succesvol gestopt!";
    }
    
    if ($status == "aan"){
        $ssh->exec('pkill java');
        $ssh->exec('java -jar jserver.jar');
        echo "Java server is succesvol gestart!";
    }
    
}
?>