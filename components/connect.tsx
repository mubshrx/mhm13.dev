import { links } from "@/lib/identity";
import { Link } from "@/components/ui/link";

export default function Connect() {
  return (
    <section>
      <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 mb-4">
        Connect
      </h2>
      <div className="flex flex-col items-start space-y-2 text-sm">
        <Link href={links.github} variant="nav" external target="_blank">
          GitHub
        </Link>
        <Link href={links.x} variant="nav" external target="_blank">
          X / Twitter
        </Link>
        <Link href={links.linkedin} variant="nav" external target="_blank">
          LinkedIn
        </Link>
        <Link href={`mailto:${links.email}`} variant="nav" external>
          Email
        </Link>
      </div>
    </section>
  );
}
