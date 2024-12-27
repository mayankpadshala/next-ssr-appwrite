import axios from "axios";

export default async function Home() {

  const response = await axios.get("http://localhost:3000/api/orders");
  const {orders} = response.data;

  return <main className="container mx-auto max-w-[800px]">
    <div id="orders-container">
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Status</th>
            <th>Type</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order: any) => (
            <tr key={order.$id}>
              <td>{order.customer_email}</td>
              <td>{order.status ? "Done" : "Pending"}</td>
              <td>{order.type}</td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  </main>;
}
