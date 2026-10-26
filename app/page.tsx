import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-[60svh]" />
      <Footer />
    </>
  );
}
