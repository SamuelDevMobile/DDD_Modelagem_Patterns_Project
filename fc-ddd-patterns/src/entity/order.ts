import OrderItem from "./order_item";

export default class Order {

    _id: string;
    _customerId: string; // se está em diferente agregados, relacao por id
    _items: OrderItem[]; // se está no mesmo agregados, relacao pela mesma classe

    constructor(id: string, customerId: string, items: OrderItem[]) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
    }

}
