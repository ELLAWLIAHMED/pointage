      $(document).ready(function () {
    $.ajax({
        url: 'controller/SalleController.php',
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
        var numero = $("#numero");
        var type = $("#type");
        if ($('#btn').text() == 'Ajouter') {
            $.ajax({
                url: 'controller/SalleController.php',
                data: {op: 'add', numero: numero.val(), type: type.val()},
                type: 'POST',
                success: function (data, textStatus, jqXHR) {
                    remplir(data);
                    numero.val('');
                    type.val('');
                   
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
            url: 'controller/SalleController.php',
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
        var numero = $(this).closest('tr').find('td').eq(0).text();
        var type = $(this).closest('tr').find('td').eq(1).text();
        btn.text('Modifier');
        $("#id").val(id);
        $("#numero").val(numero);
        $("#type").val(type);
        
        btn.click(function () {
            if ($('#btn').text() == 'Modifier') {
                $.ajax({
                    url: 'controller/MachineController.php',
                    data: {op: 'update', id: id, reference: $("#reference").val(), date: $("#date").val(), prix:$('#prix').val()},
                    type: 'POST',
                    success: function (data, textStatus, jqXHR) {
                        remplir(data);
                        $("#reference").val('');
                        $("#date").val('');
                        $('#prix').val('');      
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
            ligne += '<td>' + data[i].num + '</td>';
            ligne += '<td>' + data[i].type + '</td>';
            ligne += '<td><button type="button" class="btn btn-outline-danger supprimer">Supprimer</button></td>';
            ligne += '<td><button type="button" class="btn btn-outline-secondary modifier">Modifier</button></td></tr>';
        }
        contenu.html(ligne);
    }

});







