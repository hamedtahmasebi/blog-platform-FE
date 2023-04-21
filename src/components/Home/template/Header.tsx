export const Header = () => {
    return (
        <nav className="flex justify-between py-2 px-4 w-full shadow-lg fixed top-0">
            <h1 className="text-5xl font-bold">Muse</h1>
            <div className="grid grid-cols-2 gap-2">
                <button className="btn btn-lg">Login</button>
                <button className="btn btn-ghost btn-lg">Start writing</button>
            </div>
        </nav>
    );
};
