import ProductTable from "@/components/ProductTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">محصولات سس های سرد نوولا</h1>
          <p className="text-center text-primary-foreground/90">
            تولید کننده انواع سس های سرد فرنگی‌ساز با بهترین کیفیت
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Product Grid */}
        <ProductTable />

        {/* Footer Note */}
        <div className="mt-12 bg-accent rounded-lg p-6 text-center max-w-[21cm] mx-auto">
          <p className="text-accent-foreground text-lg">
            تمامی محصولات با بهترین کیفیت و استانداردهای بهداشتی تولید می‌شوند
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
