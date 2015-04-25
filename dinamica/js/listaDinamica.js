$(function () {
    $("#addConteudo").submit(function (e) {
        e.preventDefault();
        var conteudo = "<tema> " + $("#conteudo").val() + "</tema>";
        var buttonAprendido = "<button class = \"aprendido\">Já aprendi</button>";
        var buttonRemover = "<button class = \"remover\"> Remover </button>";
        var novoConteudo = "<li id='conteudo'>" + conteudo + buttonAprendido + buttonRemover + "</li>";
        $("#lista_aprender").append(novoConteudo);
        $("li").addClass("list-group-item");

        $(".remover").addClass("btn pull-right btn-danger btn-xs");
        $(".aprendido").addClass("btn pull-right btn-warning btn-xs");

        limparInput();
    });

    function limparInput() {
        $("#conteudo").val("");
    }

    $("#lista_aprender").on("click", ".aprendido", function () {
        var li = $(this).parent();
        var conteudoAprendido = li.find("tema").text();
        $("#lista_aprendido").append("<li>" + conteudoAprendido + "</li>");
        $("li").addClass("list-group-item");
        li.remove();
    });

    $("#lista_aprender").on("click", ".remover", function () {
        $(this).parent().remove();
    });


});
