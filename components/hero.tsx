import { Link } from "@/components/ui/link";

export default function Hero() {
  return (
    <section className="mb-16">
      <h1 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
        Hey, I&apos;m Mubashir Hassan 👋
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
        I&apos;m a software engineer, currently working as a product engineer
        at{" "}
        <Link
          href="https://crediblex.io"
          variant="brand"
          external
          target="_blank"
        >
          CredibleX
        </Link>, a UAE-based fintech. Based in Mansehra, a small, beautiful
        city in northern Pakistan.
      </p>
      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
        Working primarily in the TypeScript/JavaScript ecosystem using Node.js
        and React.js &ndash; plus a small crew of AI agents that help me take
        on more ambitious challenges. I steer, they implement. Together we
        create digital experiences 🤖
      </p>
    </section>
  );
}
