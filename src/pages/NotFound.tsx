import { Link } from "react-router-dom";
import Seo from "../lib/seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you are looking for could not be found." />
      <div className="container-page flex flex-col items-center justify-center py-32 text-center">
        <h1 className="text-6xl text-primary-700">404</h1>
        <p className="mt-4 text-lg text-neutral-gray">
          The page you are looking for could not be found.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-700 px-6 py-3 font-semibold text-white transition hover:bg-primary-800"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}
