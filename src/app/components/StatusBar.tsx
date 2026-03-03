import { Wifi, Battery, Clock } from "lucide-react";

interface StatusBarProps {
  time?: string;
}

export function StatusBar({ time = "12:45" }: StatusBarProps) {
  return (
    <div className="flex items-center gap-3 text-white/80">
      <Wifi className="w-5 h-5" />
      <Battery className="w-5 h-5" />
      <Clock className="w-4 h-4" />
      <span className="text-sm">{time}</span>
    </div>
  );
}
