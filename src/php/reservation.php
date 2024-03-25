<?php

session_start();
try {
    $connection = new PDO('mysql:host=airbncnvictor.mysql.db;dbname=airbncnvictor;charset=utf8', 'airbncnvictor', 'Projetl3');
} catch (PDOException $e) {
    echo "Erreur connexion serveur : " . $e->getMessage();
    exit(); // on quitte le script en cas d'erreur de connexion
}
$input = file_get_contents('php://input');
$_POST = json_decode($input, true);

// Vérification de la connexion
if ($_SESSION['connecter'] == 1) {
    // Récupération des données POST
    $D_debut = $_POST['Ddebut'];
    $D_fin = $_POST['Dfin'];
    $modele = $_POST['modele'];
    $email = '';

    // Requête pour récupérer l'id de la voiture
    $requete = $connection->prepare("SELECT idvoiture FROM voitures WHERE modèle = '$modele'");
    $requete->execute(array('$modele' => $modele));
    $resultat = $requete->fetch();
    $idvoiture = $resultat['idvoiture'];

    // Requête pour vérifier la disponibilité de la voiture
    $requete = $connection->prepare("SELECT Ddebut, Dfin FROM reservations WHERE (('$D_fin' > Ddebut AND '$D_fin' < Dfin) OR ('$D_debut' > Ddebut AND '$D_debut < Dfin)) AND idvoiture = '$idvoiture'");
    $requete->execute(array('$D_debut' => $D_debut, '$D_fin' => $D_fin, '$idvoiture' => $idvoiture));
    $resultat = $requete->fetchAll();

    if (empty($resultat)) {
        // Insertion de la réservation si la voiture est disponible
        $requete = $connection->prepare("INSERT INTO reservations (`idclient`, `idvoiture`, `email`, `Ddebut`, `Dfin`) VALUES ('', '$idvoiture', '$email', '$D_debut', '$D_fin')");
        $requete->execute(array('$idvoiture' => $idvoiture, '$email' => $email, '$D_debut' => $D_debut, '$D_fin' => $D_fin));
        echo 'Réservation effectuée avec succès.';
        echo $D_debut;
    } else {
        echo 'La période demandée n\'est pas disponible.';
    }
} else {
    echo 'Veuillez vous connecter avant d\'effectuer une réservation.';
}
?>
