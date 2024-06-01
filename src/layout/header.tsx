const Header = () => {
    return (
        <header className="top-0 left-0 right-0 p-4 shadow-sm bg-inherit sticky z-10 border-b">
            <div className="mx-auto flex justify-between">
                <div className="flex items-center gap-6">
                    <a href="/">
                        <h1 className="text-2xl font-bold text-start">Map Your Value</h1>
                    </a>
                </div>
            </div>
        </header>
    )
};

export default Header;
