export default function BestSellingProducts() {
  return (
    <section className="py-12 bg-white text-center">
      <div className="container mx-auto  justify-between py-12">
        <h2 className="text-3xl font-bold mb-6">สินค้าขายดี</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["สินค้า A", "สินค้า B", "สินค้า C"].map((item, index) => (
            <div key={index} className="border rounded-lg p-4 shadow">
              <div className="h-40 bg-gray-200 mb-4 rounded" />
              <h3 className="text-lg font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
