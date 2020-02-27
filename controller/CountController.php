<?php

chdir('..');
include_once 'services/MachineService.php';
extract($_POST);

$ds = new MachineService();

header('Content-type: application/json');
echo json_encode($ds->findCountMachine());

