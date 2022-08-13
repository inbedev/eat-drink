<?php
//Ouverture de la connexion
$dsn = 'mysql:host=localhost;dbname=eat&drink';
$username =  'root';
$password =  '';

try 
{
$db = new PDO($dsn, $username, $password);
}
catch (Exception $e)
{
      die('Erreur : ' . $e->getMessage());
}
?>
