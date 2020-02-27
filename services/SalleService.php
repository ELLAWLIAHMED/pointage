
<?php


include_once 'beans/Salle.php';
include_once 'connexion/Connexion.php';
include_once 'dao/IDao.php';

class SalleService implements IDao {
    
    private $connexion;
    
    function __construct() {
        $this->connexion = new Connexion();
    }

    
    public function create($o) {
        $query = "INSERT INTO salle VALUES (NULL,?,?)";
        $req = $this->connexion->getConnexion()->prepare($query);
        $req->execute(array($o->getNum(),$o->getType() )) or die('Error');
    
    }

    public function delete($id) {
        $query = "DELETE FROM salle WHERE id = ?";
        $req = $this->connexion->getConnexion()->prepare($query);
        $req->execute(array($id)) or die("erreur delete");
    }

    public function findAll() {
        $query = "select * from salle";
        $req = $this->connexion->getConnexion()->query($query);
        $f= $req->fetchAll(PDO::FETCH_OBJ);
        return $f;
    }
    

    public function findById($id) {
        $query = "select * from salle where id =?";
        $req = $this->connexion->getConnexion()->prepare($query);
        $req->execute(array($id));  
        $res=$req->fetch(PDO::FETCH_OBJ);
        $fonction = new Salle($res->id,$res->num, $res->type);
        return $fonction;
    }

  
  public function update($o) {
        $query = "UPDATE salle SET num = ?,type=? where id = ?";
        $req = $this->connexion->getConnexion()->prepare($query);
        $req->execute(array($o->getNum(),$o->getType(), $o->getId())) or die('Error');       
    }

}
