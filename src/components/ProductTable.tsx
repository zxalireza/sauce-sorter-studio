import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Product {
  name: string;
  category: string;
  size: string;
  description: string;
}

const products: Product[] = [
  // Mayonnaise Products
  { name: "مایونز خانواده", category: "مایونز", size: "۱۶۰۰ گرمی", description: "مایونز خانوادگی سایز بزرگ" },
  { name: "مایونز", category: "مایونز", size: "۴۷۰ گرمی", description: "مایونز کلاسیک" },
  { name: "سس مایونز", category: "مایونز", size: "۵۰۰ گرمی", description: "سس مایونز استاندارد" },
  { name: "سس مایونز", category: "مایونز", size: "۲۸۰ گرمی", description: "سس مایونز سایز متوسط" },
  { name: "سس مایونز", category: "مایونز", size: "۱۵۰ گرمی", description: "سس مایونز کوچک" },
  
  // Cold Dressing Sauces
  { name: "سس هزارجزیره", category: "سس سرد", size: "۲۸۰ گرمی", description: "سس هزارجزیره" },
  { name: "سس زعفرانی", category: "سس سرد", size: "۲۸۰ گرمی", description: "سس زعفرانی ویژه" },
  { name: "سس سزار", category: "سس سرد", size: "۲۸۰ گرمی", description: "سس سزار کلاسیک" },
  { name: "سس ماست و خیار", category: "سس سرد", size: "۲۸۰ گرمی", description: "سس ماست و خیار" },
  { name: "سس کالباسی", category: "سس سرد", size: "۲۸۰ گرمی", description: "سس کالباسی مخصوص" },
  { name: "سس رنچ", category: "سس سرد", size: "۲۸۰ گرمی", description: "سس رنچ" },
  { name: "سس فرانسوی", category: "سس سرد", size: "۲۸۰ گرمی", description: "سس فرانسوی کلاسیک" },
  
  // Additional Sauce Varieties
  { name: "سس پنیر پارمزان", category: "سس سرد", size: "۲۳۰ گرمی", description: "سس پنیر پارمزان" },
  { name: "سس فلفل سیاه", category: "سس سرد", size: "۲۳۰ گرمی", description: "سس فلفل سیاه" },
  { name: "سس بالزامیک", category: "سس سرد", size: "۲۳۰ گرمی", description: "سس بالزامیک" },
  { name: "سس باربیکیو", category: "سس سرد", size: "۲۳۰ گرمی", description: "سس باربیکیو" },
  { name: "سس ایتالیایی", category: "سس سرد", size: "۲۳۰ گرمی", description: "سس ایتالیایی" },
  { name: "سس عسل خردل", category: "سس سرد", size: "۲۳۰ گرمی", description: "سس عسل خردل" },
  { name: "سس سیر", category: "سس سرد", size: "۲۳۰ گرمی", description: "سس سیر" },
  
  // Mini Sizes
  { name: "سس هزارجزیره", category: "سس سرد", size: "۲۰۰ گرمی", description: "سس هزارجزیره مینی" },
  { name: "سس زعفرانی", category: "سس سرد", size: "۲۰۰ گرمی", description: "سس زعفرانی مینی" },
  { name: "سس رنچ", category: "سس سرد", size: "۲۰۰ گرمی", description: "سس رنچ مینی" },
  { name: "سس فلفل سیاه", category: "سس سرد", size: "۲۰۰ گرمی", description: "سس فلفل سیاه مینی" },
  { name: "سس ایتالیایی", category: "سس سرد", size: "۲۰۰ گرمی", description: "سس ایتالیایی مینی" },
  { name: "سس عسل خردل", category: "سس سرد", size: "۲۰۰ گرمی", description: "سس عسل خردل مینی" },
  { name: "سس سیر", category: "سس سرد", size: "۲۰۰ گرمی", description: "سس سیر مینی" },
];

const ProductTable = () => {
  const mayonnaiseProducts = products.filter(p => p.category === "مایونز");
  const coldSauceProducts = products.filter(p => p.category === "سس سرد");

  return (
    <div className="space-y-8">
      {/* Mayonnaise Section */}
      <div className="bg-card rounded-lg shadow-md overflow-hidden border border-border">
        <div className="bg-primary px-6 py-4">
          <h2 className="text-2xl font-bold text-primary-foreground text-right">محصولات مایونز</h2>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary hover:bg-secondary">
                <TableHead className="text-right text-secondary-foreground font-bold">توضیحات</TableHead>
                <TableHead className="text-right text-secondary-foreground font-bold">سایز</TableHead>
                <TableHead className="text-right text-secondary-foreground font-bold">دسته‌بندی</TableHead>
                <TableHead className="text-right text-secondary-foreground font-bold">نام محصول</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mayonnaiseProducts.map((product, index) => (
                <TableRow key={index} className="hover:bg-accent transition-colors">
                  <TableCell className="text-right">{product.description}</TableCell>
                  <TableCell className="text-right font-medium">{product.size}</TableCell>
                  <TableCell className="text-right">
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {product.category}
                    </span>
                  </TableCell>
                  <TableCell className="text-right font-semibold">{product.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Cold Sauces Section */}
      <div className="bg-card rounded-lg shadow-md overflow-hidden border border-border">
        <div className="bg-primary px-6 py-4">
          <h2 className="text-2xl font-bold text-primary-foreground text-right">سس‌های سرد فرنگی‌ساز</h2>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary hover:bg-secondary">
                <TableHead className="text-right text-secondary-foreground font-bold">توضیحات</TableHead>
                <TableHead className="text-right text-secondary-foreground font-bold">سایز</TableHead>
                <TableHead className="text-right text-secondary-foreground font-bold">دسته‌بندی</TableHead>
                <TableHead className="text-right text-secondary-foreground font-bold">نام محصول</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {coldSauceProducts.map((product, index) => (
                <TableRow key={index} className="hover:bg-accent transition-colors">
                  <TableCell className="text-right">{product.description}</TableCell>
                  <TableCell className="text-right font-medium">{product.size}</TableCell>
                  <TableCell className="text-right">
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {product.category}
                    </span>
                  </TableCell>
                  <TableCell className="text-right font-semibold">{product.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
