import React from 'react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">

      <div className="text-center max-w-md">

        {/* 404 number */}
        <h1 className="text-8xl font-bold text-gray-200 select-none mb-2">404</h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Page not found</h2>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          Sorry, we couldn't find the page you're looking for. It may have been moved, deleted, or never existed.
        </p>

        {/* Actions */}
        <div className="flex items-center justify-center gap-3">
          <a
            href="/"
            className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
          >
            Back to home
          </a>
          <button
            onClick={() => window.history.back()}
            className="px-5 py-2.5 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Go back
          </button>
        </div>

        {/* Support link */}
        <p className="mt-8 text-xs text-gray-400">
          Need help?{' '}
          <a href="/contact" className="text-gray-600 underline underline-offset-2 hover:text-gray-900 transition-colors">
            Contact support
          </a>
        </p>
      </div>

    </div>
  );
};

export default ErrorPage;