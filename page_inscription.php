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
    $prenom = $_POST["Prenom"];
    $nom = $_POST["Nom"];
    $ville = $_POST["ville"];
    $email = $_POST["Email"];
    $mot_de_passe1 = $_POST["MotdePasse"];
    $mot_de_passe2 = $_POST["CMotdePasse"];

    $requete = $connection->prepare("SELECT COUNT(*) FROM clients WHERE email = :email");
    $requete->execute(array(':email' => $email));
    $email_existe = $requete->fetchColumn();

    if (strcmp($mot_de_passe1, $mot_de_passe2) != 0 || $email_existe) {
        // Les mots de passe ne correspondent pas ou l'email est déjà utilisé
        echo "Les mots de passe ne correspondent pas ou l'adresse email est déjà utilisée.";
    } else {
        // Hasher le mot de passe avant de l'insérer dans la base de données
        $mot_de_passe1_hash = password_hash($mot_de_passe1, PASSWORD_DEFAULT);

        $requete = $connection->prepare("INSERT INTO clients (nom, prénom, ville, email, mot_de_passe) VALUES (:nom, :prenom, :ville, :email, :mot_de_passe)");
        $requete->execute(array(
            ':nom' => $nom,
            ':prenom' => $prenom,
            ':ville' => $ville,
            ':email' => $email,
            ':mot_de_passe' => $mot_de_passe1_hash
        ));

        header('Location: https://www.airbncar.fr/index.html');
        exit();
    }
}
?>

