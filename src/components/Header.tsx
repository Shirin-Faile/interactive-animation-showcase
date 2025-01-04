export default function Header() {
    return (
        <header className="bg-orange-500 text-white p-4 flex justify-between">
            <h1 className="text-xl font-bold">PLAYFUL PIXELS</h1>
            <nav>
                <a href="/" className="mx-4 hover:underline">Home</a>
                <a href="/gallery" className="mx-4 hover:underline">Gallery</a>
                <a href="/about" className="mx-4 hover:underline">About Me</a>
            </nav>
        </header>
    );
}