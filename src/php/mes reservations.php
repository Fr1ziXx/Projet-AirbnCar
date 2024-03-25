<?php
include 'conect.php';
try{
$connection = new PDO('mysql:host=airbncnvictor.mysql.db;dbname=airbncnvictor;charset=utf8','airbncnvictor','Projetl3'); //connection au serveur ,la variable sert a savoir si la conection est etablie
   
}
catch(PDOException $e ){
       echo("erreur connexion serveur ");
    }


   

    if(isset($_POST["mes reservations"]))
{
    
    $requete=$connection->prepare("SELECT *  from  reservations where email = '$_EMAIL' ");   
    $requete->execute(['$_EMAIL'=>$_GLOBALS['EMAIL'] ]) ;
    $resultat = $requete->fetchAll();

    if ($resultats) {
        foreach ($resultats as $resultat) {
            
            echo "idvoiture : " . $resultat['idvoiture'] . "<br>";
            echo "date de debut : " . $resultat['Ddebut'] . "<br>";
            echo "date de fin : " . $resultat['Dfin'] . "<br>";
           
        }
    } else {
        echo "Aucun résultat trouvé pour cet email.";
    }
}
?>