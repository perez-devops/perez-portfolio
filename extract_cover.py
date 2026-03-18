import sys
try:
    import fitz  # PyMuPDF
except ImportError:
    print("PyMuPDF not found.")
    sys.exit(1)

def extract_cover(pdf_path, output_path):
    try:
        doc = fitz.open(pdf_path)
        page = doc.load_page(0)  # first page
        # Increase resolution
        zoom = 2 
        mat = fitz.Matrix(zoom, zoom)
        pix = page.get_pixmap(matrix=mat)
        pix.save(output_path)
        print(f"Saved {output_path}")
    except Exception as e:
        print(f"Error extracting {pdf_path}: {e}")
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: extract_cover.py <pdf_path> <output_path>")
        sys.exit(1)
    extract_cover(sys.argv[1], sys.argv[2])
