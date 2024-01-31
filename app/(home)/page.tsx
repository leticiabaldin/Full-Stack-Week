import { Header } from "../components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import BookingItem from "../components/booking-item";
import BarberShopItem from "./_components/barbershop-item";
import { db } from "../lib/prisma";

export default async function Home() {
  const barbershops = await db.barbershop.findMany();

  return (
    <div>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Letícia!</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>
      <div className="px-5 mt-6">
        <Search />
      </div>
      <div className="px-5">
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3 mt-3">
          Agendamentos
        </h2>
        <BookingItem />
      </div>
      <div className="mt-6">
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3 mt-3 px-5">
          Recomendados
        </h2>
        <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      
      <div className="mt-6">
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3 mt-3 px-5">
          Populares
        </h2>
        <div className="flex gap-2 overflow-x-auto">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
            
    </div>
  );
}
