import Link from 'next/link';

export default function notFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center">
        {/* Large Decorative Text */}
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        <div className="relative -mt-16">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Lost in Space?
          </h2>
          
          <p className="mt-4 text-gray-600 text-lg">
            Sorry, we couldn't find the page you're looking for. 
            It might have been moved or deleted.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="btn btn-accent btn-outline"
            >
              Go back home
            </Link>
            
            <Link
              href="/contact"
              className="rounded-lg border border-gray-300 px-8 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}