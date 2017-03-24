<?php
  if(isset($_POST['validation'])) {
 
     //Indique si le fichier a été téléchargé
     if(!is_uploaded_file($_FILES['image']['tmp_name']))
        echo 'Un problème est survenu durant l opération. Veuillez réessayer !';
     else {
        //liste des extensions possibles    
        $extensions = array('/png', '/gif', '/jpg', '/jpeg');
 
        //récupère la chaîne à partir du dernier / pour connaître l'extension
        $extension = strrchr($_FILES['image']['type'], '/');
 
        //vérifie si l'extension est dans notre tableau            
        if(!in_array($extension, $extensions))
            echo 'Vous devez uploader un fichier de type png, gif, jpg, jpeg.';
        else {         
 
            //on définit la taille maximale
            define('MAXSIZE', 20000000);        
            if($_FILES['image']['size'] > MAXSIZE)
               echo 'Votre image est supérieure à la taille maximale de '.MAXSIZE.' octets';
            else {
                //connexion à la base de données
                try {
                    $bdd = new PDO('mysql:host=localhost;dbname=wemovit', 'root', '');
                } catch (Exception $e) {
                    exit('Erreur : ' . $e->getMessage());
                }
 
                //Lecture du fichier
                $image = file_get_contents($_FILES['image']['tmp_name']);
 
                $req = $bdd->prepare("INSERT INTO photo(id_photo, chemin_photo) VALUES(:id_photo, :chemin_photo)");
                $req->execute(array(
                    'id_photo' => $_POST['id_photo'],
                    'chemin_photo' => $_POST['chemin_photo']
                    ));
 
                echo 'L\'insertion s est bien déroulée !';
             }
          }
      }
  }
?>
 