
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import OrderConfirmation from "./OrderConfirmation";

export default function ConfirmationPage() {
  const { id } = useParams();
  // const [menuItems, setMenuItems] = useState([]);
  const [order, setOrder] = useState();
  // const [orderModal, setOrderModal] = useState(false);

  console.log("id: ", id)

  const getOrder = async () => {
    const response = await fetch(`http://localhost:3001/api/orders/650df768f043929ab26c28f2`);
    const data = await response.json();
    setOrder(data)
    console.log("data: ", data)
    // setMenuItems(data);
  };

  useEffect(() => {
    getOrder();
  }, []);
  
  return (
    <div>
      {order && <OrderConfirmation order={order} />}
    </div>
  )
}