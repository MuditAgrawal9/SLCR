import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({ subsets: ["latin"], weight: "400" });

export default function Page() {
  return <p className={garamond.className}>This text is in Garamond</p>;
}
