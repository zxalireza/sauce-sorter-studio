import mayonnaiseSauce1 from "@/assets/products/mayonnaise-sauce-1.jpg";
import mayonnaiseJar from "@/assets/products/mayonnaise-jar.jpg";
import mayonnaiseSqueeze from "@/assets/products/mayonnaise-squeeze.jpg";
import mayonnaiseGolden1 from "@/assets/products/mayonnaise-golden-1.jpg";
import mayonnaiseGolden2 from "@/assets/products/mayonnaise-golden-2.jpg";
import mayonnaiseGolden3 from "@/assets/products/mayonnaise-golden-3.jpg";
import honeyMustard from "@/assets/products/honey-mustard.jpg";
import frenchDressing from "@/assets/products/french-dressing.jpg";
import yogurtCucumber from "@/assets/products/yogurt-cucumber.jpg";
import caesar from "@/assets/products/caesar.jpg";
import thousandIsland from "@/assets/products/thousand-island.jpg";
import chipotle from "@/assets/products/chipotle.jpg";
import chiliMayonnaise from "@/assets/products/chili-mayonnaise.jpg";
import dijon from "@/assets/products/dijon.jpg";
import mustardYellow from "@/assets/products/mustard-yellow.jpg";
import mustard from "@/assets/products/mustard.jpg";
import mexican from "@/assets/products/mexican.jpg";
import mayonnaiseBottle from "@/assets/products/mayonnaise-bottle.jpg";
import lemon from "@/assets/products/lemon.jpg";
import garlic from "@/assets/products/garlic.jpg";
import honeyMustardMini from "@/assets/products/honey-mustard-mini.jpg";
import frenchMini from "@/assets/products/french-mini.jpg";
import yogurtMini from "@/assets/products/yogurt-mini.jpg";
import garlicMini from "@/assets/products/garlic-mini.jpg";
import thousandIslandMini from "@/assets/products/thousand-island-mini.jpg";
import chipotleMini from "@/assets/products/chipotle-mini.jpg";
import sausageMini from "@/assets/products/sausage-mini.jpg";
import dijonVegetableMini from "@/assets/products/dijon-vegetable-mini.jpg";
import mustardMini1 from "@/assets/products/mustard-mini-1.jpg";
import mustardMini2 from "@/assets/products/mustard-mini-2.jpg";
import mexican2 from "@/assets/products/mexican-2.jpg";
import mayonnaiseBottle2 from "@/assets/products/mayonnaise-bottle-2.jpg";
import lemon2 from "@/assets/products/lemon-2.jpg";
import caesar2 from "@/assets/products/caesar-2.jpg";

interface Product {
  name: string;
  category: string;
  image: string;
}

const products: Product[] = [
  { name: "سس مایونز", category: "سس سرد", image: mayonnaiseSauce1 },
  { name: "سس مایونز", category: "سس سرد", image: mayonnaiseJar },
  { name: "سس مایونز", category: "سس سرد", image: mayonnaiseSqueeze },
  { name: "سس مایونز طلایی", category: "سس سرد", image: mayonnaiseGolden1 },
  { name: "سس مایونز طلایی", category: "سس سرد", image: mayonnaiseGolden2 },
  { name: "سس مایونز طلایی", category: "سس سرد", image: mayonnaiseGolden3 },
  { name: "سس عسل خردل", category: "سس سرد", image: honeyMustard },
  { name: "سس فرانسوی", category: "سس سرد", image: frenchDressing },
  { name: "سس ماست و خیار", category: "سس سرد", image: yogurtCucumber },
  { name: "سس سزار", category: "سس سرد", image: caesar },
  { name: "سس هزار جزیره", category: "سس سرد", image: thousandIsland },
  { name: "سس چیپاتل", category: "سس سرد", image: chipotle },
  { name: "سس مایونز چیلی", category: "سس سرد", image: chiliMayonnaise },
  { name: "سس دیژون", category: "سس سرد", image: dijon },
  { name: "سس خردل زرد", category: "سس سرد", image: mustardYellow },
  { name: "سس خردل", category: "سس سرد", image: mustard },
  { name: "سس مکزیکن", category: "سس سرد", image: mexican },
  { name: "سس مایونز", category: "سس سرد", image: mayonnaiseBottle },
  { name: "سس لیمو", category: "سس سرد", image: lemon },
  { name: "سس سیر", category: "سس سرد", image: garlic },
  { name: "سس عسل خردل", category: "سس سرد", image: honeyMustardMini },
  { name: "سس فرانسوی", category: "سس سرد", image: frenchMini },
  { name: "سس ماست", category: "سس سرد", image: yogurtMini },
  { name: "سس سیر", category: "سس سرد", image: garlicMini },
  { name: "سس هزار جزیره", category: "سس سرد", image: thousandIslandMini },
  { name: "سس چیپاتل", category: "سس سرد", image: chipotleMini },
  { name: "سس کالباس", category: "سس سرد", image: sausageMini },
  { name: "سس دیژون وگتابل", category: "سس سرد", image: dijonVegetableMini },
  { name: "سس خردل", category: "سس سرد", image: mustardMini1 },
  { name: "سس خردل", category: "سس سرد", image: mustardMini2 },
  { name: "سس مکزیکن", category: "سس سرد", image: mexican2 },
  { name: "سس مایونز", category: "سس سرد", image: mayonnaiseBottle2 },
  { name: "سس لیمو", category: "سس سرد", image: lemon2 },
  { name: "سس سزار", category: "سس سرد", image: caesar2 },
];

const ProductTable = () => {
  return (
    <div className="w-full max-w-[21cm] mx-auto" dir="rtl">
      <div className="bg-card rounded-lg shadow-md overflow-hidden border border-border">
        <div className="bg-primary px-6 py-4">
          <h2 className="text-2xl font-bold text-primary-foreground text-center">محصولات سس های سرد نوولا</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg p-4 flex flex-col items-center justify-between hover:shadow-lg transition-shadow"
              >
                <div className="w-full aspect-square flex items-center justify-center mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-foreground">{product.name}</p>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary mt-2">
                    {product.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
