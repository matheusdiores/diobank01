import { DioAccount } from "./DioAccount";

export class EspecialAccount extends DioAccount{

    constructor(name:string, accountNumber: number){
        super(name, accountNumber)
    }

    public deposit = (valor: number): void => {
        this.setBalance(this.getBalance() + valor + 10)
    }

}