
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import OrderConfirmation from "./OrderConfirmation";

export default function ConfirmationPage() {
  const { id } = useParams();
  const [order, setOrder] = useState();

  const getOrder = async () => {
    const response = await fetch(`http://localhost:3001/api/orders/${id}`);
    const data = await response.json();
    setOrder(data)
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