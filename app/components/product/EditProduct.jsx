// "use client";

// import { useState } from "react";

// export default function EditProduct({ coffee }) {
//   const [name, setName] = useState(coffee.name);
//   const [price, setPrice] = useState(coffee.price);

//   const handleSubmit = () => {

//     alert("Coffee updated successfully!");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mt-4">
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         className="border p-2 mr-2"
//       />
//       <input
//         type="number"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//         className="border p-2 mr-2"
//       />
//       <button type="submit" className="bg-green-500 text-white px-4 py-2">Update</button>
//     </form>
//   );
// }
