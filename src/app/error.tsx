'use client';
import Link from 'next/link';
import React from 'react';

export default function InternalErrorPage() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-violet-600">500</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Something went wrong!
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry for the inconvenience, we are working on it.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
