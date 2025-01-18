export default function Header() {
    return (
        <header className="bg-orange-500 text-white p-4 flex flex-wrap items-center justify-between">
            <h1 className="text-xl font-bold mb-2 sm:mb-0">PLAYFUL PIXELS</h1>
            <nav className="w-full sm:w-auto text-center sm:text-left">
                <a href="/home" className="mx-2 sm:mx-4 hover:underline block sm:inline">Home</a>
                <a href="/gallery" className="mx-2 sm:mx-4 hover:underline block sm:inline">Gallery</a>
            </nav>
        </header>
    );
}
