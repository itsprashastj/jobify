import Link from "next/link";

export default function FooterComp() {
  return (
    <div>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="flex text-center">
          <p className="text-xs text-muted-foreground">&copy; 2024 by&nbsp;</p>

          <span className="text-xs text-muted-foreground">
            <Link
              href="https://github.com/sahabji0P"
              target="_blank"
              prefetch={false}
              rel="noreferrer"
              className="group transition duration-300"
            >
              Shashwat Jain.&nbsp;
              <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full"></span>
            </Link>
          </span>
          <p className="text-xs text-muted-foreground">All rights reserved.</p>
        </div>

        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  );
}
