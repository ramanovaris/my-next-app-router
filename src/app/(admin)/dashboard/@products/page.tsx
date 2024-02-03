"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");

  const revalidate = async () => {
    const feth = await fetch("http://localhost:3000/api/revalidate?tag=products&secret=rama123", {
      method: "POST",
    });

    if (!feth.ok) {
      setStatus("Revalidation failed");
    } else {
      const response = await feth.json();
      if (response.revalidate) {
        setStatus("Revalidation success");
      }
    }
  };

  return (
    <div className="w-3/6 h-96 bg-gray-300 rounded-[12px] flex justify-center items-center mr-5">
      <h1>{status}</h1>
      <button className="bg-black text-white p-3 rounded-md m-5" onClick={() => revalidate()}>
        Revalidate
      </button>
    </div>
  );
}