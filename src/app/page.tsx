import SelectTravelBox from "@/components/SelectTravelBox";
import Image from "next/image";

export default function Home() {
  const image = "/sean-oulashin-KMn4VEeEPR8-unsplash.jpg";

  return (
    <main className="container flex min-h-screen justify-center items-center mx-auto">
      {/* <div className="bg-cyan-300 w-full h-screen absolute top-0 shadow-md" /> */}
      <Image
        src={image}
        alt=""
        fill={true}
        layout={"fill"}
        objectFit={"cover"}
      />
      <SelectTravelBox />
    </main>
  );
}
