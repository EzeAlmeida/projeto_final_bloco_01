import { Perecivel } from "./Perecivel";
import { Produto } from "./Produto";

export class naoPerecivel extends Produto {

    private _naoPerecivel: string;


    constructor(id: number, nome: string, tipo: number, preco: number, naoPerecivel: string) {
        super(id, nome, tipo, preco)
        this._naoPerecivel = naoPerecivel;
    }



    public get naoPerecivel(): string {
        return this._naoPerecivel;
    }

    public set naoPerecivel(value: string) {
        this._naoPerecivel = value;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Nao perecivel: ${this._naoPerecivel}`)
    }
}
