<?php
$servername="airbncnvictor.mysql.db";
$username="airbncnvictor";
$password="Projetl3";
$database="airbncnvictor";
try{
$connection = new PDO('mysql:host=airbncnvictor.mysql.db;dbname=airbncnvictor;charset=utf8','airbncnvictor','Projetl3'); //connection au serveur ,la variable sert a savoir si la conection est etablie
   
}
catch(exeption $e ){
       echo("erreur connexion serveur ");
    }



if(isset($_POST["button"]))
{

        


    
        
            $prenom=$_POST["prenom"]; //recuperation des données du formulaire
            $nom=$_POST["nom"];
            $ville=$_POST["ville"];
            $_EMAIL=$_POST["email"];
            $mot_de_passe1=$_POST["mdp1"];
            $mot_de_passe2=$_POST["mdp2"];
        
            $requete=$connection->prepare("SELECT COUNT(*) from clients where email ='$_EMAIL' ") ;
            $requete->execute(['$email'=>$_EMAIL]);
            
            
             if(strcmp($mot_de_passe1,$mot_de_passe2)==0  and $requete->fetchColumn() )
 {
       echo("les 2 mots de passe sont differents ou l'adresse email est deja utilisé ");
           
 }
 else {
                $mot_de_passe1 = password_hash($mot_de_passe1, PASSWORD_DEFAULT);
     $requete=$connection->prepare("INSERT INTO `clients`(`idclient`, `nom`, `prénom`, `ville`, `email`, `mot_de_passe`) VALUES ('','$nom','$prenom','$ville','$_EMAIL','$mot_de_passe1')") ;//prepare  permet de preparer la requete ,une connexion est faite avec le serveur et un template est preparé 
            //les 2 premieres apostrophe sont vides car elle coresponde a l'id qui est auto incrementé par mysql
            
            $requete->execute(['$nom'=>$nom , '$prenom'=>$prenom ,'$ville'=>$ville ,'$email'=>$_EMAIL ,'$mot_de_passe'=>$mot_de_passe1]);// execute permet de remplacer les éléments php dans la requéte par des valeurs accépté par sql et la commande envoie la requete aux serveur 
            header('Location: https://www.airbncar.fr/index.html');
 }
}
  
?>
