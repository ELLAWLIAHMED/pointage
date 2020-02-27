$(document).ready(function () {
    $.ajax({
        url: 'controller/SalleController.php',
        data: {op: ''},
        type: 'POST',
        success: function (data, textStatus, jqXHR) {
            var test='';
            for (i = 0; i < data.length; i++) {
            test += '<option value='+data[i].id+'>'+data[i].num+'</option>';
             }
        $('#idsalle').html(test);   
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });

    $.ajax({
        url: 'controller/MachineController.php',
        data: {op: ''},
        type: 'POST',
        success: function (data, textStatus, jqXHR) {
            //alert(JSON.stringify(data));
            remplir(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });

    $('#btn').click(function () {
        var reference = $("#reference");
        var date = $("#date");
        var prix=$("#prix");
        var salle=$("#idsalle");
        if ($('#btn').text() == 'Ajouter') {
            $.ajax({
                url: 'controller/MachineController.php',
                data: {op: 'add', reference: reference.val(), date: date.val(), prix: prix.val(),idsalle: salle.val()},
                type: 'POST',
                success: function (data, textStatus, jqXHR) {
                    remplir(data);
                    reference.val('');
                    date.val('');
                    prix.val('');
                    salle.val('');
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(textStatus);
                }
            });
        }

    });

    $(document).on('click', '.supprimer', function () {
        var id = $(this).closest('tr').find('th').text();
        $.ajax({
            url: 'controller/MachineController.php',
            data: {op: 'delete', id: id},
            type: 'POST',
            success: function (data, textStatus, jqXHR) {
                remplir(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
            }
        });
    });

    $(document).on('click', '.modifier', function () {
        var btn = $('#btn');
        var id = $(this).closest('tr').find('th').text();
        var reference = $(this).closest('tr').find('td').eq(0).text();
        var date = $(this).closest('tr').find('td').eq(1).text();
        var prix = $(this).closest('tr').find('td').eq(2).text();
        var salle = $(this).closest('tr').find('td').eq(3).text();
        btn.text('Modifier');
        $("#reference").val(reference);
        $("#date").val(date);
        $("#prix").val(prix);
        $("#idsalle").val(salle);
        btn.click(function () {
            if ($('#btn').text() == 'Modifier') {
                $.ajax({
                    url: 'controller/MachineController.php',
                    data: {op: 'update', id: id, reference: $("#reference").val(), date: $("#date").val(), prix:$('#prix').val(),idsalle:$('#idsalle').val()},
                    type: 'POST',
                    success: function (data, textStatus, jqXHR) {
                        remplir(data);
                        $("#reference").val('');
                        $("#date").val('');
                        $('#prix').val('');  
                        $('#idsalle').val('');
                        btn.text('Ajouter');
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(textStatus);
                    }
                });
            }
        });
    });
    function remplir(data) {
        var contenu = $('#table-content');
        var ligne = "";
        for (i = 0; i < data.length; i++) {
            ligne += '<tr><th scope="row">' + data[i].id + '</th>';
            ligne += '<td>' + data[i].reference + '</td>';
            ligne += '<td>' + data[i].date + '</td>';
            ligne += '<td>' + data[i].prix + '</td>';
            ligne += '<td>' + data[i].idsalle + '</td>';
            ligne += '<td><button type="button" class="btn btn-outline-danger supprimer">Supprimer</button></td>';
            ligne += '<td><button type="button" class="btn btn-outline-secondary modifier">Modifier</button></td></tr>';
        }
        contenu.html(ligne);
    }

});





