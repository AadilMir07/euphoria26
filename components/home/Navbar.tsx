import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Container className="flex items-center justify-between py-6">
        <h1 className="text-xl font-bold tracking-widest text-white">
          EUPHORIA
        </h1>

        <Button className="rounded-full px-6">
          Register
        </Button>
      </Container>
    </header>
  );
}