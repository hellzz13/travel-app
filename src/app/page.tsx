import SelectTravelBox from "@/components/SelectTravelBox";
import Image from "next/image";

export default function Home() {
  const image = "/sean-oulashin-KMn4VEeEPR8-unsplash.jpg";

  return (
    <main className="container flex min-h-screen justify-center items-center mx-auto bg-cyan-300">
      <Image
        src={image}
        alt="paisagem praia, areia e mar"
        fill={true}
        layout={"fill"}
        objectFit={"cover"}
        className="h-min-screen"
      />

      <SelectTravelBox />
    </main>
  );
}
