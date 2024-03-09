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


$_CONNECTER = 0; // Assurez-vous que la variable est initialisée

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["Email"];
    $mot_de_passe = $_POST["MotdePasse"];
    $input = file_get_contents('php://input');
$_POST = json_decode($input, true);

    $requete = $connection->prepare("SELECT mot_de_passe FROM clients WHERE email = '$email'");
    $requete->execute(['email' => $email]); // Utilisez 'email' au lieu de '$email'
    $resultat = $requete->fetch(PDO::FETCH_ASSOC);

    if ($resultat && password_verify($mot_de_passe, $resultat['mot_de_passe'])) {
        // Connexion réussie, redirigez vers la page de succès
        echo "Connexion établie";
        $_CONNECTER = 1;
    } else {
        // Identifiants incorrects, renvoyer un message d'erreur
        echo "Adresse email ou mot de passe incorrect.";
    }
}
?>

