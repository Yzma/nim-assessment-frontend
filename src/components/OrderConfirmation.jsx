
import styles from "./styles/OrderConfirmation.module.css";

export default function OrderConfirmation({ order }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Thank you for the order friend!</h2>
      <div className={styles.orderInfo}>
      <p>Customer name: {order.name}</p>
      <p>Customer address: {order.address}</p>
      <p>Items: ({order.items.length})</p>
      <ol className={styles.items}>
        {order.items.map(element => 
          <li key={element.item.id}>
            {element.item.name} - {element.quantity} - ${element.quantity * element.item.price}
          </li>
        )}
      </ol>
      <p>Order Id: {order.id}</p>
      </div>
    </div>
  )
}