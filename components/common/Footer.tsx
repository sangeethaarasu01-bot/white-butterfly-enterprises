export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left - Address */}
          <div className="text-gray-700 text-sm space-y-2">
            <h3 className="font-semibold text-base">Office Address</h3>

            <p>White Butterfly Enterprises</p>
            <p>34805, McLeod Avenue</p>
            <p>Abbotsford, Canada V3G 1G9</p>
          </div>

          {/* Right - Contact */}
          <div className="text-gray-700 text-sm space-y-2">
            <p>
              Email :{" "}
              <a
                href="mailto:buy@white-butterfly-enterprises.com"
                className="text-blue-600 hover:underline"
              >
                buy@white-butterfly-enterprises.com
              </a>
            </p>

            <p>
              Phone :{" "}
              <a href="tel:+12269665509" className="text-red-500 font-medium">
                +1 (226) 966-5509
              </a>
            </p>

            <p className="text-gray-500 text-xs">
              ( Support is available 24/7 )
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mt-6 pt-4 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {year} White Butterfly Enterprises. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-blue-600">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-600">
              Terms
            </a>
            <a href="#" className="hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
