
const readlinesync = require("readline-sync");

export function main() {



    while (true) {

        console.log(
            "*****************************************************");
        console.log("                                                     ");
        console.log("                FARMÁCIA BEM ESTAR                   ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                        ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Listar Produto por Id                ");
        console.log("            4 - Atualizar Dados do Produto           ");
        console.log("            5 - Deletar Produto                       ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
        );

        console.log("Entre com a opção desejada: ");
        let opcao = readlinesync.questionInt("");

        if (opcao === 6) {
            console.log(
                "\nClickShop - Sua compra a um clique");


            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(
                    "\n\nCriar Produto\n\n",);

             

                break;

            case 2:
                console.log("\n Listar todos os produtos");
                listarProdutos()

                break;

            case 3:
                console.log("\n Listar produto por ID");

                break;

            case 4: console.log("\n Atualizar dados do produto");

                break;

            case 5:

                console.log("\n Deletar produto");



        }



        function keyPress(): void {

            console.log("\nPressione enter para continuar...");
            readlinesync.prompt();
        }

        main();
    }
}