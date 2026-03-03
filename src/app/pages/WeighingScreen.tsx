import { useNavigate } from "react-router";
import { StatusBar } from "../components/StatusBar";
import { useState, useEffect } from "react";

export function WeighingScreen() {
  const navigate = useNavigate();
  const [weight, setWeight] = useState(1.25);

  // Simulate weight changes for demo purposes
  useEffect(() => {
    const interval = setInterval(() => {
      setWeight(prev => Number((prev + (Math.random() - 0.5) * 0.1).toFixed(2)));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen bg-[#1a1d2e] flex flex-col items-center justify-between p-8 dark">
      {/* Status Bar */}
      <div className="w-full flex justify-end">
        <StatusBar />
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center flex-1">
        {/* Weight Display */}
        <div className="mb-12">
          <div className="text-white text-[5rem] font-bold tracking-tight">
            {weight.toFixed(2)}
            <span className="text-[3rem] ml-2 font-normal">kg</span>
          </div>
        </div>

        {/* Register Button */}
        <button
          onClick={() => navigate("/select-product", { state: { weight } })}
          className="bg-[#7ed957] hover:bg-[#6fc745] text-[#1a1d2e] px-24 py-6 rounded-2xl text-2xl font-bold uppercase tracking-wide transition-colors active:scale-95"
        >
          Register
        </button>
      </div>

      {/* Bottom Spacer */}
      <div className="h-8"></div>
    </div>
  );
}
