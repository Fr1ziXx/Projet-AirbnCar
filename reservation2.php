<?php

try{
$connection = new PDO('mysql:host=airbncnvictor.mysql.db;dbname=airbncnvictor;charset=utf8','airbncnvictor','Projetl3'); //connection au serveur ,la variable sert a savoir si la conection est etablie
   
}
catch(exeption $e ){
       echo("erreur connexion serveur ");
    }



if(isset($_POST["reserver"]))
{
if($_CONNECTER==1)
{
    

    
    $requete=$connection->prepare("SELECT idclient  from  clients where email = '$_EMAIL' ");   
    $requete->execute(['$_EMAIL'=>$_EMAIL ]) ;
    $resultat = $requete->fetch();
    $idclient=$resultat['idclient'];

    $modele=$_POST["modele"];
    $requete=$connection->prepare("SELECT idvoiture  from  voitures where modèle = '$modele' ");   
    $requete->execute(['$modele'=>$modele ]) ;
    $resultat = $requete->fetch(); 
if ($resultat) {
    $idvoiture = $resultat['idvoiture']; 
}
    




    // Récupération de la date depuis le formulaire
    $date = $_POST['date'];


    // Manipulation de la date avec PHP 
    $dateObj = new DateTime($date);
    $nouvelleDate = $dateObj->format('Y-m-d'); // Formatage de la date
    
   



    

    $requete=$connection->prepare("INSERT INTO `reservations`(`idclient`, `idvoiture`, `nbjours`,'email) VALUES ('$idclient','$idvoiture','$nbjours','$_EMAIL')") ; 
    
    
    $requete->execute(['$idclient'=>$idclient , '$idvoiture'=>$idvoiture ,'$nbjours'=>$nbjours ,'$_EMAIL'=>$_EMAIL]);
}
else{

    echo("veuillez vous connecter avant d'effectuer une reservation");
}

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