<?php

try{
$connection = new PDO('mysql:host=airbncnvictor.mysql.db;dbname=airbncnvictor;charset=utf8','airbncnvictor','Projetl3'); //connection au serveur ,la variable sert a savoir si la conection est etablie
   
}
catch(PDOException $e ){
       echo("erreur connexion serveur ");
    }
    
$input = file_get_contents('php://input');
$_POST = json_decode($input, true);

if(isset($_POST["reserver"]))
{
if($_CONNECTER==1)
{
    
    
    
    $requete=$connection->prepare("SELECT idclient  from  clients where email = '$_EMAIL' ");   
    $requete->execute(['$_EMAIL'=>$_EMAIL ]) ;
    $resultat = $requete->fetch();
    $idclient=$resultat['idclient'];

    
    $requete=$connection->prepare("SELECT idvoiture  from  voitures where modèle = '$modele' ");   
    $requete->execute(['$modele'=>$modele ]) ;
    $resultat = $requete->fetch(); 
   if ($resultat) {
    $idvoiture = $resultat['idvoiture']; 
   }
    




    // Récupération de la date depuis le formulaire
    $Ddebut = $_POST['Ddebut'];
    $Dfin = $_POST['Dfin'];
   

    // Manipulation de la date avec PHP 
    $Ddebut = new DateTime($Ddebut);
    $Dfin = new DateTime($Dfin);
    
    if($Dfin >= $Ddebut)
    {
        $requete=$connection->prepare("SELECT Ddebut , Dfin   from reservations where ('$Dfin' >'Ddebut' AND '$Dfin'<'Dfin' )OR ('$Ddebut'>'Ddebut' AND '$Ddebut'<'Dfin')");   
      $requete->execute(['$Ddebut'=>$Ddebut , '$Dfin'=>$Dfin ]) ;
      $resultat = $requete->fetchAll(); 

        if($resultat){
    
        
            echo 'La période problématique va du ' . $resultat['Ddebut'] . ' au ' . $resultat['Dfin'];

    

       }
       else{
         $requete= $connection->prepare("INSERT INTO `reservations`(`idclient`, `idvoiture`,`email`) VALUES ('$idclient','$idvoiture','$_EMAIL','$Ddebut','$Dfin')") ; 
           $requete->execute(['$idclient'=>$idclient , '$idvoiture'=>$idvoiture ,'$_EMAIL'=>$_EMAIL ,'$Ddebut'=>$Ddebut ,'$Dfin'=>$Dfin]);

       }
   
    }
    else{
        echo("date renseigner ne respectant pas le format demander ");
    }


    

   
}
else{

    echo("veuillez vous connecter avant d'effectuer une reservation");
}

}



    



  
?>