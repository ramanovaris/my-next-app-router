import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Nike Air Force 1 '07",
    price: 1549000,
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_435,c_limit/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoes-WrLlWX.png",
  },
  {
    id: 2,
    title: "Nike Dunk Low Retro",
    price: 1549000,
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_435,c_limit/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-shoe-66RGqF.png",
  },
  {
    id: 3,
    title: "Nike Zoom Vomero 5",
    price: 2489000,
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_435,c_limit/lkwfba88t6qix4qxaavi/zoom-vomero-5-shoes-qZG4RJ.png",
  },
  {
    id: 4,
    title: "Nike Zoom Vomero 5",
    price: 2489000,
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_435,c_limit/lkwfba88t6qix4qxaavi/zoom-vomero-5-shoes-qZG4RJ.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({ status: 200, message: "Success", data: detailProduct });
    }
    return NextResponse.json({ status: 404, message: "Not Found", data: {} });
  }

  const products = await retrieveData("products");

  return NextResponse.json({ status: 200, message: "Success", data: products });
}
