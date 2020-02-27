$(document).ready(function() {
    function getCountFrom(url, i) {
        $.ajax({
            url: url,
            data: {op: ''},
            type: 'POST',
            success: function(data, textStatus, jqXHR) {
                $('h2[class="number"]').eq(i).text(data.length);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('h2[class="number"]').eq(i).text('...');
            }
        });
    }
    getCountFrom('controller/gestionEmploye.php', 0);
    getCountFrom('controller/gestionDepartement.php', 1);
    getCountFrom('controller/gestionPointage.php', 2);
    getCountFrom('controller/gestionFonction.php', 3);
    getCountFrom('controller/MachineController.php', 4); //added by ahmed
    getCountFrom('controller/MachineController.php', 5);

    $.ajax({
        url: 'controller/CountController.php',
        data: {op: ''},
        type: 'POST',
        success: function(data, textStatus, jqXHR) {
            label = [];
            datas = [];
            for (i = 0; i < data.length; i++) {
                label.push('sale'+data[i].idsalle);
                datas.push(data[i].nombre_machine);
            }
            console.log(label);
            new Chart(document.getElementById("bar-chart"), {
                type: 'bar',
                data: {
                    labels:label, //["Africa", "Asia", "Europe", "Latin America", "North America"],  //à modifier
                            datasets: [
                                {
                                    label: "Nombre des salles",
                                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                                    data:datas  //[2478, 5267, 734, 784, 433]  //à modifier
                                }
                            ]
                },
                options: {
                    legend: {display: false},
                    title: {
                        display: true,
                        text: 'nombre des machines par salle'
                    }
                }
            });

        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });

    /* new Chart(document.getElementById("bar-chart"), {
     type: 'bar',
     data: {
     labels: label; //["Africa", "Asia", "Europe", "Latin America", "North America"],  //à modifier
     datasets: [
     {
     label: "Population (millions)",
     backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
     data: [2478, 5267, 734, 784, 433]  //à modifier
     }
     ]
     },
     options: {
     legend: {display: false},
     title: {
     display: true,
     text: 'nombre des machines par salle'
     }
     }
     }); */
});