// Função para exibir a mensagem de sucesso
        function exibirMensagemSucesso() {
            const mensagemSucesso = document.getElementById("mensagemSucesso");
            mensagemSucesso.style.display = "block";

            setTimeout(function() {
                mensagemSucesso.style.display = "none";
            }, 3000);
        }

        // Função para enviar os dados do formulário para o modal
        function enviarDadosParaModal() {
            const nome = document.getElementById("nome").value;
            const telefone = document.getElementById("telefone").value;
            const empresa = document.getElementById("empresa").value;
            const id = document.getElementById("id").value;
            const id_site = document.getElementById("id_site").value;
            const website = document.getElementById("website").value;
            const gerente = document.getElementById("gerente").value;
            const sistema = document.getElementById("sistema").value;
            const valorMensal = document.getElementById("valorMensal").value;
            const dataPagamento = document.getElementById("dataPagamento").value;
            const diasAtraso = document.getElementById("diasAtraso").value;

            // Cria uma nova linha para a tabela do modal
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${nome}</td>
                <td>${telefone}</td>
                <td>${empresa}</td>
                <td>${id}</td>
                <td>${id_site}</td>
                <td>${website}</td>
                <td>${gerente}</td>
                <td>${sistema}</td>
                <td>${valorMensal}</td>
                <td>${dataPagamento}</td>
                <td>${diasAtraso}</td>
            `;

            // Obtém a tabela dentro do modal e adiciona a nova linha à tabela
            const tableBody = document.querySelector("#dadosModal table tbody");
            tableBody.appendChild(newRow);

            // Exibir a mensagem de sucesso
            exibirMensagemSucesso();

            // Limpa o formulário após enviar os dados para o modal
            document.getElementById("cadastroForm").reset();
        }

        // Manipulador de eventos para o evento "submit" do formulário
        document.getElementById("cadastroForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Evitar o envio padrão do formulário

            // Chamar a função para enviar os dados para o modal
            enviarDadosParaModal();
        });
