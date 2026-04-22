import React from 'react';

export default function PageHeader({ 
    title = "Dashboard", 
    breadcrumb = [], 
    children 
}) {
    // Format breadcrumb jika string
    const breadcrumbItems = typeof breadcrumb === 'string' 
        ? [breadcrumb] 
        : Array.isArray(breadcrumb) 
        ? breadcrumb 
        : [];

    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-semibold">
                    {title}
                </span>
                {breadcrumbItems.length > 0 && (
                    <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
                        {breadcrumbItems.map((item, index) => (
                            <React.Fragment key={index}>
                                {index > 0 && (
                                    <span id={`breadcrumb-separator-${index}`} className="text-gray-500">/</span>
                                )}
                                <span 
                                    id={`breadcrumb-item-${index}`}
                                    className="text-gray-500 hover:text-gray-700 cursor-pointer"
                                >
                                    {item}
                                </span>
                            </React.Fragment>
                        ))}
                    </div>
                )}
            </div>
            <div id="action-button">
                {children}
            </div>
        </div>
    );
}