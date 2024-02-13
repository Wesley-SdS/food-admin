'use client';
import { InputControl, InputPrefix, InputRoot } from "@/components/Input";
import OrderManager from "@/components/Order/orderManager";
import { Search } from "lucide-react";
import { CiFilter } from "react-icons/ci";


export default function Order() {
  return (
    <section className="">
      
      <div className="flex justify-end mr-28 p-5">
        <div className="flex gap-4 items-center">
          <p>Filtrar</p>
          <CiFilter size={24} />
        </div>
      </div>

      <div className="flex justify-center">
        <InputRoot className="flex w-1/2 h-10 p-2  items-center border rounded-md">
          <InputPrefix className="">
            <Search className="h-5 w-5 text-zinc-500 mr-2" />
          </InputPrefix>
          <InputControl
            className="w-48 focus:outline-none"
            placeholder="Procurando um pedido?"
          />
        </InputRoot>
      </div>
      <div className="flex justify-center mt-2">
        <select title="status" className=" bg-transparent border  w-1/2  border-slate-300 h-10 text-center rounded-lg text-orange-800 ">
          <option className="bg-transparent  " value="">
            Finalizados
          </option>
          <option className="bg-transparent  " value="">
            Em Andamento
          </option>
          <option className="bg-transparent  " value="">
            Em Analise
          </option>
        </select>
      </div>

      <div>
        <OrderManager />
      </div>
    </section>
  );
}
