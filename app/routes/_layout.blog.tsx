import { Link } from "@remix-run/react";

export const config = { runtime: 'edge' }

export default function Complex() {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-16">
          <header className="flex flex-col items-center gap-9">
            <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
              Page renders within a layout route
            </h1>
            <Link to="/blog/article"  
              className="text-blue-500 hover:text-blue-700">
              Navigate to Blog Article
            </Link>
          </header>         
        </div>
      </div>
    );
  }
  