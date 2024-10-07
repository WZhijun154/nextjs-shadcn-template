import Link from "next/link";

export default function AitdkPage() {
  return (
    <div className="container">
      <div className="custom-top-section-padding">
        <h1 className="custom-h1 text-center">AITDK SEO</h1>
        <p className="custom-muted-description text-center custom-margin-after-title">
          Explore the features of AITDK SEO and how it can help you rank your
          website higher.
        </p>
      </div>
      <section className="custom-section-padding flex flex-col items-center">
        <h2 className="custom-h2 text-center">Features of AITDK</h2>
        <p className="custom-muted-description text-center custom-margin-after-title max-w-[720px]">
          Check out{" "}
          <Link className="underline text-primary" href="https://aitdk.com/">
            AITDK SEO
          </Link>
        </p>
      </section>
    </div>
  );
}
