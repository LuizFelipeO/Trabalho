import { ManyToOne,Entity } from "typeorm";
import { Cliente } from "src/customer/cliente";

@Entity("pedidos") 

export class Pedido {
    id: number;
    orderNumber: string;
    orderDate: Date;
    total: number;

    @ManyToOne(type => Cliente, customer => customer)
    customer: Cliente;
}