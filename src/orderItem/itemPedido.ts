import { Produto } from "src/product/produto";
import { Pedido } from "src/order/pedido";
import { ManyToOne } from "typeorm";

export class itemPedido{
    id: number;
   
    @ManyToOne (type => Produto, product => product)
    product: Produto;
   
    @ManyToOne (type => Pedido, order => order)
    order: Pedido;
    quantity: number;
    unitValue: number;
    totalValue: number;
}