import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${
                active
                    ? 'border-indigo-400 text-black bg-indigo-50 focus:text-black focus:bg-indigo-100 focus:border-indigo-700'
                    : 'border-transparent text-black hover:text-black hover:bg-gray-50 hover:border-gray-300 focus:text-black focus:bg-gray-50 focus:border-gray-300'
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
