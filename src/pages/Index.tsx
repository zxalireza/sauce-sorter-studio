import ProductTable from "@/components/ProductTable";
import productsImage from "@/assets/products.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">محصولات سس های سرد نوولا</h1>
          <p className="text-center text-primary-foreground/90">
            تعداد تیرهای دیگر در قرابه تولید ضبط تولید سس های سرد فرنگی‌ساز : ۱۰ تیر
          </p>
          <p className="text-center text-primary-foreground/90">
            محصولات تولیدی: خط تولید سس های سرد فرنگی‌ساز
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Product Image */}
        <div className="mb-12 flex justify-center">
          <div className="bg-card rounded-lg shadow-xl overflow-hidden border border-border p-8">
            <img 
              src={productsImage} 
              alt="محصولات نوولا" 
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Product Tables */}
        <ProductTable />

        {/* Footer Note */}
        <div className="mt-12 bg-accent rounded-lg p-6 text-center">
          <p className="text-accent-foreground text-lg">
            تمامی محصولات با بهترین کیفیت و استانداردهای بهداشتی تولید می‌شوند
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
