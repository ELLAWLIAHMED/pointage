<?php
include_once 'dao/IDao.php';
include_once 'connexion/Connexion.php';
include_once 'beans/Machine.php';
class MachineService implements IDao {
    private $connexion;
    function __construct(){
       $this->connexion= new Connexion(); 
    }
     public function create($o) {
        $query = "INSERT INTO machine VALUES (null,?,?,?,?)";
        $req = $this->connexion->getConnexion()->prepare($query);
        $req->execute(array($o->getReference(),$o->getDate(),$o->getPrix(),$o->getIdsalle())) or die('Error');
    
    }

    public function delete($id) {
        $query = "DELETE FROM machine WHERE id = ?";
        $req = $this->connexion->getConnexion()->prepare($query);
        $req->execute(array($id)) or die("erreur delete");
    }

    public function findAll() {
        $query = "select * from machine";
        $req = $this->connexion->getConnexion()->query($query);
        $f= $req->fetchAll(PDO::FETCH_OBJ);
        return $f;
    }
    
    public function findCountMachine(){
        $query= "select idsalle,count(*) as nombre_machine from machine group by idsalle";
        $req = $this->connexion->getConnexion()->query($query);
        $f= $req->fetchAll(PDO::FETCH_OBJ);
        return $f;    
    }
    public function findById($o) {
        $query = "select * from machine where id =?";
        $req = $this->connexion->getConnexion()->prepare($query);
        $req->execute(array($o->getNom()));  
        $res=$req->fetch(PDO::FETCH_OBJ);
        $fonction = new Departement($res->id,$res->reference, $res->date, $res->prix);
        return $fonction;
    }

  
    public function update($o) {
        $query = "UPDATE machine SET reference = ?,date=?,prix=?,idsalle=? where id = ?";
        $req = $this->connexion->getConnexion()->prepare($query);
        $req->execute(array($o->getReference(),$o->getDate(), $o->getPrix(),$o->getIdsalle(), $o->getId())) or die('Error');       
    }
}
