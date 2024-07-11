import readlinesync from 'readline-sync'
import { naoPerecivel } from "./src/Model/naoPerecivel";
import { ProdutoController } from "./src/controller/ProdutoController";
import { Perecivel } from "./src/Model/Perecivel";



    let opcao, id, tipo, preco: number;
    let nome, generico, fragancia: string;
    let tipoProduto = ['Perecivel', 'NaoPerecivel'];

    
    const produtoController: ProdutoController = new ProdutoController();

    produtoController.cadastrar(new Perecivel(produtoController.gerarId(),
        "Picanha 700GR", 1, 45.00, "sim"));

    produtoController.cadastrar(new naoPerecivel(produtoController.gerarId(),
        "Sabonete", 2, 60.00, "Nao"));

    while (true) {

        console.log(
            "*****************************************************");
        console.log("                                                     ");
        console.log("                ClickMarket                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Buscar Produto por Id                ");
        console.log("            4 - Atualizar Dados do Produto           ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");



        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao === 6) {
            console.log(
                "\nClickPlus - Sua compra em um clique!");


            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(
                    "\n\nCriar Produto\n\n",);

                nome = readlinesync.question("Digite o Nome do Produto: ");

                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                preco = readlinesync.questionFloat("Digite o preco: ");

                switch (tipo) {
                    case 1:
                        generico = readlinesync.question("Digite o Nome Generico do Produto: ");
                        produtoController.cadastrar(new Perecivel(produtoController.gerarId(),
                            nome, tipo, preco, generico));
                        break;
                    case 2:
                        fragancia = readlinesync.question("O produto é liquido? ou Solido: ");
                        produtoController.cadastrar(new naoPerecivel(produtoController.gerarId(),
                            nome, tipo, preco, fragancia));
                        break;
                }


                break;
            case 2:
                console.log(
                    "\n\nListar todos os Produtos\n\n",);

                produtoController.listarTodas();


                break;
            case 3:
                console.log(
                    "\n\nConsultar Produtos - por Id\n\n",);

                id = readlinesync.questionInt("Digite o Id do Produto: ");
                produtoController.procurarPorId(id);


                break;
            case 4:
                console.log(
                    "\n\nAtualizar dados do Produto\n\n",);

                id = readlinesync.questionInt("Digite o Id do Produto: ");

                let produto = produtoController.buscarNoArray(id);

                if (produto !== null) {

                    nome = readlinesync.question("Digite o Nome do Produto: ");

                    tipo = produto.tipo;

                    preco = readlinesync.questionFloat("Digite o preco: ");

                    switch (tipo) {
                        case 1:
                            generico = readlinesync.question("Digite o Nome Generico do Medicamento: ");
                            produtoController.atualizar(new Perecivel(id,
                                nome, tipo, preco, generico));
                            break;
                        case 2:
                            fragancia = readlinesync.question("Digite a frangancia do Cosmetico: ");
                            produtoController.atualizar(new naoPerecivel(id,
                                nome, tipo, preco, fragancia));
                            break;
                    }

                } else
                    console.log("Produto não Encontrado!")


                break;
            case 5:
                console.log(
                    "\n\nApagar um Produto\n\n",);

                id = readlinesync.questionInt("Digite o Id do Produto: ");
                produtoController.deletar(id);


                break;
            default:
                console.log(
                    "\nOpção Inválida!\n");


                break;
        }
    }

