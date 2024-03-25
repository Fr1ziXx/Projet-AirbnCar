<?php
session_start();
try {
    $connection = new PDO('mysql:host=airbncnvictor.mysql.db;dbname=airbncnvictor;charset=utf8', 'airbncnvictor', 'Projetl3');
} catch (PDOException $e) {
    echo "Erreur connexion serveur : " . $e->getMessage();
}

$input = file_get_contents('php://input');
$_POST = json_decode($input, true);

$_SESSION['connecter'] =0 ;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $EMAIL = $_POST["Email"];
    $_SERVER=$EMAIL ;
    $mot_de_passe1 = $_POST["MotdePasse"];

    $requete = $connection->prepare("SELECT mot_de_passe FROM clients WHERE email = '$EMAIL'");
    $requete->execute(array('$EMAIL' => $EMAIL));
    $resultat = $requete->fetch();

    $mot_de_passe_hash = hash('sha256', $mot_de_passe1);

    if ($resultat && strcmp($mot_de_passe_hash, $resultat['mot_de_passe']) == 0) {
        // Connexion réussie
        echo "Connexion établie";
        $_SESSION['connecter']=1 ;
        $_SESSION['EMAIL']=$EMAIL ;

    } else {
        echo "Adresse email ou mot de passe incorrect.";
    }
}
?>


