import { GradientSection } from "@/components/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function NotFound() {
  return (
    <GradientSection id="not-found" className="text-center">
      <h1 className="custom-h1">404 - Page Not Found</h1>
      <p className="custom-margin-after-title custom-muted-description">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="custom-margin-after-description">
        <Button>Go back to Home</Button>
      </Link>
    </GradientSection>
  );
}
