import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

let customer = new Customer("123", "Samuel Ribeiro");
const address = new Address("Rua dois", 2, "12345-678", "São Paulo");
customer.Address = address;
customer.activate();
// ID

// Objeto - Entidade por estar no mesmo agregado
const item1 = new OrderItem("1", "Item 1", 10);
const item2 = new OrderItem("1", "Item 2", 20);
const order = new Order("1", customer._id, [item1, item2]);