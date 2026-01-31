const Footer = () => {
    return (
        <footer className="bg-surface py-8 border-t border-border">
            <div className="container mx-auto px-6 text-center text-text-muted">
                <p>&copy; {new Date().getFullYear()} The Perez Emmanuel. Building the Future</p>
            </div>
        </footer>
    );
};

export default Footer;
