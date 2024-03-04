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

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["Email"];
    $mot_de_passe = $_POST["MotdePasse"];

    $requete = $connection->prepare("SELECT mot_de_passe FROM clients WHERE email = :email");
    $requete->execute(array(':email' => $email));
    $resultat = $requete->fetch(PDO::FETCH_ASSOC);

    if ($resultat && password_verify($mot_de_passe, $resultat['mot_de_passe'])) {
        // Connexion réussie, redirigez vers la page de succès
        header('Location: https://www.airbncar.fr/index2.html');
        exit();
    } else {
        // Identifiants incorrects, renvoyer un message d'erreur
        echo "Adresse email ou mot de passe incorrect.";
    }
}
?>
