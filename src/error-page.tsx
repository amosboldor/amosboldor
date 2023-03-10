import {isRouteErrorResponse, Link, useRouteError} from "react-router-dom";

export default function ErrorBoundary() {
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        const is404 = error.status === 404;
        const msg = is404 ? 'Please check the URL in the address bar and try again.' : error.data?.message && error.data.message;
        return (
            <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
                <div className="max-w-max mx-auto">
                    <main className="sm:flex">
                        <p className="text-4xl font-extrabold text-blue-600 sm:text-5xl">{error.status}</p>
                        <div className="sm:ml-6">
                            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">{is404 ? 'Page Not Found' : error.statusText}</h1>
                                <p className="mt-1 text-base text-gray-500">{msg}</p>
                            </div>
                            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                                <Link
                                    to="/"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Go back home
                                </Link>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    } else {
        return <div>Oops</div>;
    }
}
