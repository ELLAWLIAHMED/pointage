<?php

chdir('..');
include_once 'services/SalleService.php';
extract($_POST);

$ds = new SalleService();

if ($op != '') {
    if ($op == 'add') {
        $ds->create(new Salle(0,$numero,$type));
    } elseif ($op == 'update') {
        $ds->update(new Machine($id,$num,$type));
    } elseif ($op == 'delete') {
        $ds->delete($ds->delete($id));
    }
}

header('Content-type: application/json');
echo json_encode($ds->findAll());

