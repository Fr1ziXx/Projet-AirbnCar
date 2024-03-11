<?php

try{
$connection = new PDO('mysql:host=airbncnvictor.mysql.db;dbname=airbncnvictor;charset=utf8','airbncnvictor','Projetl3'); //connection au serveur ,la variable sert a savoir si la conection est etablie
   
}
catch(PDOException $e ){
       echo("erreur connexion serveur ");
    }
$input = file_get_contents('php://input');
$_POST = json_decode($input, true);

    if(isset($_POST["confirmer modèle"]))
    {
        
        $modele=$_POST["modele"];
        $requete=$connection->prepare("SELECT   from  clients where email = '$_EMAIL' ");   
    $requete->execute(['$_EMAIL'=>$_EMAIL ]) ;
    $resultat = $requete->fetchAll();
    $idclient=$resultat['idclient'];

    }

    if(isset($_POST["mes reservations"]))
{
    
    $requete=$connection->prepare("SELECT *  from  reservations where email = '$_EMAIL' ");   
    $requete->execute(['$_EMAIL'=>$_EMAIL ]) ;
    $resultat = $requete->fetchAll();

    if ($resultats) {
        foreach ($resultats as $resultat) {
            
            echo "ID : " . $resultat['id'] . "<br>";
            echo "Email : " . $resultat['email'] . "<br>";
           
        }
    } else {
        echo "Aucun résultat trouvé pour cet email.";
    }
}
?>