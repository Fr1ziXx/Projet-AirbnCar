<?php
$servername = "airbncnvictor.mysql.db";
$username = "airbncnvictor";
$password = "Projetl3";
$database = "airbncnvictor";

try {
    $connection = new PDO('mysql:host=airbncnvictor.mysql.db;dbname=airbncnvictor;charset=utf8', 'airbncnvictor', 'Projetl3');
} catch (PDOException $e) {
    echo "Erreur connexion serveur : " . $e->getMessage();
}
$input = file_get_contents('php://input');
$_POST = json_decode($input, true);
// Récupérer les données du formulaire POST
$confirmation_mot_de_passe = $_POST["CMotdePasse"];
$email = $_POST["Email"];
$mot_de_passe = $_POST["MotdePasse"];
$nom = $_POST["Nom"];
$prenom = $_POST["Prenom"];
$ville = $_POST["ville"];

// Vérifier si les mots de passe correspondent
if ($mot_de_passe !== $confirmation_mot_de_passe) {
    echo "Les mots de passe ne correspondent pas.";
    
   
} else {
    // Hasher le mot de passe
    $mot_de_passe_hash=hash('sha256',$mot_de_passe);

    // Insérer les données dans la base de données
    $requete = $connection->prepare("INSERT INTO clients (`idclient`,`nom`, `prénom`, `ville`, `email`, `mot_de_passe`) VALUES ('','$nom','$prenom','$ville','$email','$mot_de_passe_hash')");
    $requete->execute(array('$nom' => $nom, '$prenom' => $prenom, '$ville' => $ville, '$email' => $email, '$mot_de_passe_hash' => $mot_de_passe_hash));
    echo " 'votre email :' . $email . ' votre mot de passe  ' . $mot_de_passe_hash";
}
?>
