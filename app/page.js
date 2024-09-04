import { Button } from "@nextui-org/react";
import Image from "next/image";
import HomeComponent from "./components/Home"; // Rename here

export default function Home() {
  return (
    <div>
      <HomeComponent /> {/* Use the new name here */}
    </div>
  );
}
