<?php
class Machine {
    private $id;
    private $reference;
    private $date;
    private $prix;
    private $idsalle;
    function __construct($id, $reference, $date, $prix, $idsalle) {
        $this->id=$id;
        $this->reference = $reference;
        $this->date = $date;
        $this->prix = $prix;
        $this->idsalle= $idsalle;
    }
    public function getId() {
        return $this->id;
    }

    public function getReference() {
        return $this->reference;
    }
    public function getIdsalle() {
        return $this->idsalle;
    }

    public function getDate() {
        return $this->date;
    }

    public function getPrix() {
        return $this->prix;
    }

    public function setId($id) {
        $this->id = $id;
    }
     public function setIdsalle($idsalle) {
        $this->idsalle = $idsalle;
    }

    public function setReference($reference) {
        $this->reference = $reference;
    }

    public function setDate($date) {
        $this->date = $date;
    }

    public function setPrix($prix) {
        $this->prix = $prix;
    }



}
