<?php

chdir('..');
include_once 'services/MachineService.php';
extract($_POST);

$ds = new MachineService();

if ($op != '') {
    if ($op == 'add') {
        $ds->create(new Machine(0,$reference,$date,$prix,$idsalle));
    } elseif ($op == 'update') {
        $ds->update(new Machine($id,$reference,$date,$prix,$idsalle));
    } elseif ($op == 'delete') {
        $ds->delete($ds->delete($id));
    }
}

header('Content-type: application/json');
echo json_encode($ds->findAll());

