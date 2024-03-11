<?php

try{
$connection = new PDO('mysql:host=airbncnvictor.mysql.db;dbname=airbncnvictor;charset=utf8','airbncnvictor','Projetl3'); //connection au serveur ,la variable sert a savoir si la conection est etablie
   
}
catch(exeption $e ){
       echo("erreur connexion serveur ");
    }
    


if(isset($_POST["mes_reserv"]))
{
if($_CONNECTER==1)
{


    $requete=$connection->prepare("SELECT *  from  reservations where email = '$_EMAIL' ");   
    $requete->execute(['$_EMAIL'=>$_EMAIL ]) ;
    $resultat = $requete->fetchAll();
    
    echo ("$resultat");








}

}

  
?>