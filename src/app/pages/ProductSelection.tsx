import { useNavigate, useLocation } from "react-router";
import { StatusBar } from "../components/StatusBar";
import { ArrowLeft, Search, Apple, Beef, Milk, Wheat } from "lucide-react";
import { useState } from "react";

interface Category {
  id: string;
  name: string;
  color: string;
  bgColor: string;
  icon: React.ReactNode;
}

interface Product {
  id: string;
  name: string;
  category: string;
  icon: string;
}

const categories: Category[] = [
  {
    id: "fruits",
    name: "Fruits & Vegetables",
    color: "#7ed957",
    bgColor: "bg-[#7ed957]",
    icon: <Apple className="w-5 h-5" />,
  },
  {
    id: "meats",
    name: "Meats & Poultry",
    color: "#e63946",
    bgColor: "bg-[#e63946]",
    icon: <Beef className="w-5 h-5" />,
  },
  {
    id: "dairy",
    name: "Dairy",
    color: "#4a90e2",
    bgColor: "bg-[#4a90e2]",
    icon: <Milk className="w-5 h-5" />,
  },
  {
    id: "grains",
    name: "Grains",
    color: "#b8860b",
    bgColor: "bg-[#b8860b]",
    icon: <Wheat className="w-5 h-5" />,
  },
];

const products: Product[] = [
  { id: "1", name: "Red Apple", category: "fruits", icon: "🍎" },
  { id: "2", name: "Potato", category: "fruits", icon: "🥔" },
  { id: "3", name: "Onion", category: "fruits", icon: "🧅" },
  { id: "4", name: "Tomato", category: "fruits", icon: "🍅" },
  { id: "5", name: "Carrot", category: "fruits", icon: "🥕" },
  { id: "6", name: "Banana", category: "fruits", icon: "🍌" },
  { id: "7", name: "Chicken Breast", category: "meats", icon: "🍗" },
  { id: "8", name: "Ground Beef", category: "meats", icon: "🥩" },
  { id: "9", name: "Pork Chops", category: "meats", icon: "🥓" },
  { id: "10", name: "Whole Milk", category: "dairy", icon: "🥛" },
  { id: "11", name: "Cheese", category: "dairy", icon: "🧀" },
  { id: "12", name: "White Rice", category: "grains", icon: "🍚" },
];

export function ProductSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const weight = location.state?.weight || 0;
  
  const [selectedCategory, setSelectedCategory] = useState("fruits");
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.category === selectedCategory &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleConfirm = () => {
    // In a real app, this would register the sale
    navigate("/");
  };

  return (
    <div className="w-screen h-screen bg-[#1a1d2e] flex flex-col dark">
      {/* Header */}
      <div className="bg-[#252836] px-8 py-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate("/")}
            className="text-white p-3 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-white text-2xl font-bold absolute left-1/2 transform -translate-x-1/2">
            Select Product
          </h1>
          <StatusBar />
        </div>
        
        {/* Logo */}
        <div className="flex justify-center">
          <div className="text-white text-lg font-bold">LA NUEVA FLORENCIA</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Column - Categories */}
        <div className="w-1/3 bg-[#252836] p-6 overflow-y-auto">
          <h2 className="text-white/60 text-sm uppercase tracking-wide mb-4">
            Product Type
          </h2>
          <div className="space-y-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSelectedProduct(null);
                }}
                className={`w-full ${category.bgColor} text-white px-6 py-5 rounded-xl text-left flex items-center gap-3 text-lg font-semibold transition-all hover:scale-105 active:scale-95 ${
                  selectedCategory === category.id ? "ring-4 ring-white/30" : ""
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Products */}
        <div className="flex-1 bg-[#1a1d2e] p-6 flex flex-col">
          <h2 className="text-white/60 text-sm uppercase tracking-wide mb-4">
            Select Specific Product
          </h2>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#252836] text-white px-12 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 text-lg"
            />
          </div>

          {/* Product List */}
          <div className="flex-1 overflow-y-auto space-y-3">
            {filteredProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(product.id)}
                className={`w-full bg-[#252836] hover:bg-[#2d303e] text-white px-6 py-5 rounded-xl text-left flex items-center gap-4 text-lg transition-all ${
                  selectedProduct === product.id
                    ? "ring-4 ring-white/30 bg-[#2d303e]"
                    : ""
                }`}
              >
                <span className="text-3xl">{product.icon}</span>
                <span className="font-medium">{product.name}</span>
              </button>
            ))}
          </div>

          {/* Weight Display */}
          <div className="mt-6 text-center text-white/60">
            <span className="text-lg">Weight: </span>
            <span className="text-2xl font-bold text-white">{weight.toFixed(2)} kg</span>
          </div>
        </div>
      </div>

      {/* Footer Button */}
      <div className="bg-[#252836] p-6">
        <button
          onClick={handleConfirm}
          disabled={!selectedProduct}
          className={`w-full px-12 py-6 rounded-2xl text-2xl font-bold uppercase tracking-wide transition-all ${
            selectedProduct
              ? "bg-[#4a90e2] hover:bg-[#3a7bc8] text-white active:scale-95"
              : "bg-gray-600 text-gray-400 cursor-not-allowed"
          }`}
        >
          Confirm Registration
        </button>
      </div>
    </div>
  );
}
