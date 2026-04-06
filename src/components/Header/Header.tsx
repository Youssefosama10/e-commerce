
import { FaTag } from "react-icons/fa";


export default function Header({ title, desc, color }: { title: string; desc: string; color: string }) {
  return (
    <div className={ `bg-gradient-to-r ${color} text-white p-8 ` }   >
      
  
    <div className="text-sm mb-6 opacity-80">
      Home / <span className="font-medium">{title}</span>
    </div>

   
    <div className="flex items-center gap-4">
      
     
      <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-2xl backdrop-blur">
        <FaTag className="text-white text-2xl" />
      </div>

 
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-white/80 mt-1">
          {desc}
        </p>
      </div>

    </div>
  </div>
  );
}