import React from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
    return <div className="w-full lg:w-1/2 xl:w-1/3 border border-primary">{children}</div>
}
