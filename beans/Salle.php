<?php

class Salle {
    private $id;
    private $num;
    private $type;
    function __construct($id, $num, $type) {
        $this->id = $id;
        $this->num = $num;
        $this->type = $type;
    }
    public function getId() {
        return $this->id;
    }

    public function getNum() {
        return $this->num;
    }

    public function getType() {
        return $this->type;
    }

    public function setId($id) {
        $this->id = $id;
    }

    public function setNum($num) {
        $this->num = $num;
    }

    public function setType($type) {
        $this->type = $type;
    }


}
