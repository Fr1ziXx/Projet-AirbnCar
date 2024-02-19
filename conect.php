<?php
$servername="airbncnvictor.mysql.db";
$username="airbncnvictor";
$password="Projetl3";
$database="airbncnvictor";

try{
$connection = new PDO('mysql:host=airbncnvictor.mysql.db;dbname=airbncnvictor;charset=utf8','airbncnvictor','Projetl3'); //connection au serveur ,la variable sert a savoir si la conection est etablie
   
}
catch(exeption $e)
{
    echo("erreur connexion serveur");
    
}



if(isset($_POST["button"]))
{

        

$_CONNECTER=0;
    
    $_EMAIL =$_POST["email"];
    $mot_de_passe1 =$_POST["mot_de_passe"]; //recuperation des identifiant dans le formulaire 
    
        
    
        

}

              // on regarde si l'email et le mots de passe fournit sont dans la base de donée ,il doivent corespondre a un seul enregistrement  
            $requete=$connection->prepare("SELECT mot_de_passe  from  clients where email = '$_EMAIL'  ");
            
             $requete->execute(['$_EMAIL'=>$_EMAIL ) ;
            
            // on regarde si le resultat contient un element , si c'est le cas alors l'email et le mots de passe sont valide
        
            if(password_verify($mot_de_passe1,$requete))
            { 
                //$prenom=$connection->query("SELECT prenom from clients where email like "$email"); //query permet de preparer et d'executer la requete avec une seule commande 
                

                $_CONNECTER=1;
                header('Location: https://www.airbncar.fr/index2.html');
                exit();
              
            }
            else
            {
                echo("aucun compte associé a ces identifiants ");
                $_CONNECTER=0;
            }

    
?>
