import { Produto } from "./Produto";
const readlinesync = require("readline-sync");



export class Perecivel extends Produto {

    private _perecivel: string;


    constructor(id: number, nome: string, tipo: number, preco: number, perecivel: string) {
        super(id, nome, tipo, preco)
        this._perecivel = perecivel;
    }


    public get perecivel(): string {
        return this._perecivel;
    }


    public set perecivel(value: string) {
        this._perecivel = value;



    } public visualizar(): void {
        super.visualizar();
        console.log(`Produto perecivel: ${this._perecivel}`)
    }


}




