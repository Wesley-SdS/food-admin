import { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { Edit2, Trash2, MessageSquareText, CopyIcon, Phone, Truck, Edit } from "lucide-react";
import { Label } from "@radix-ui/react-select";
import { Input } from "../ui/input";

export default function OrderManager() {
  const ordersData = [
    {
      id: 1,
      channel: "Rappi",
      customerName: "João Silva",
      phone: "(11) 96092-4734",
      deliveryInfo:
        "Rua Grace Casseb 57 - JD Kuabara Taboão da Serra SP CEP: 06753-180",
      status: "Em andamento",
      order: "#1123",
      price: "R$ 47,90",
    },
    {
      id: 2,
      channel: "Instagram",
      customerName: "Maria Souza",
      phone: "987654321",
      deliveryInfo: "Avenida B, 456",
      status: "Em análise",
      order: "#1124",
      price: "R$ 32,50",
    },
    {
      id: 3,
      channel: "Loja Online",
      customerName: "Fernando Santos",
      phone: "(11) 12345-6789",
      deliveryInfo: "Rua Abc, 123 - São Paulo - SP - CEP: 12345-678",
      status: "Cancelado",
      order: "#1125",
      price: "R$ 25,00",
    },
    {
      id: 4,
      channel: "Ifood",
      customerName: "Kaua Santos",
      phone: "(11) 12345-6789",
      deliveryInfo: "Rua Abc, 123 - São Paulo - SP - CEP: 12345-678",
      status: "A Caminho",
      order: "#1125",
      price: "R$ 25,00",
    },
  ];

  const [orders, setOrders] = useState(ordersData);

  const changeStatus = (orderId: number, newStatus: string) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === orderId) {
        return { ...order, status: newStatus };
      }
      return order;
    });
    setOrders(updatedOrders);
  };
  <AlertDialog>
    <AlertDialogTrigger>Open</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>;

  return (
    <div className="container mx-auto px-4 py-2">
      <h1 className="text-2xl font-bold mb-4">Gestor de Pedidos</h1>
      <div className="grid gap-2">
        {orders.map((order) => (
          <div
            key={order.id}
            className={`border rounded-lg border-gray-200 p-4 flex flex-col w-full ${
              order.status === "Em andamento"
                ? "bg-yellow-100"
                : order.status === "A Caminho"
                ? "bg-blue-100"
                : order.status === "Finalizado"
                ? "bg-green-100"
                : order.status === "Em análise"
                ? "bg-purple-100"
                : order.status === "Cancelado"
                ? "bg-red-100"
                : ""
            }`}
          >
            <div className="flex items-center mb-4">
              <div className="mr-4">
                {order.channel === "Rappi" && (
                  <img
                    src="/images/rappi-logo.png"
                    alt="Channel Logo"
                    className="w-10 h-10"
                  />
                )}
                {order.channel === "Instagram" && (
                  <img
                    src="/images/instagram-logo.png"
                    alt="Channel Logo"
                    className="w-10 h-10"
                  />
                )}
                {order.channel === "Loja Online" && (
                  <img
                    src="/images/wills.png"
                    alt="Channel Logo"
                    className="w-10 h-10"
                  />
                )}
                {order.channel === "Ifood" && (
                  <img
                    src="/images/ifood-logo.png"
                    alt="Channel Logo"
                    className="w-10 h-10"
                  />
                )}
              </div>
              <div>
                <span className="font-semibold">{order.customerName}</span>
                <div className="flex items-center mt-2">
                  <span className="text-sm text-gray-600 mr-4">
                    {order.order}
                  </span>
                  <span className="text-sm font-bold">{order.price}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <Phone className="w-4 h-4 mr-2" />
              <span>{order.phone}</span>
            </div>
            <div className="flex items-center mb-2">
              <Truck className="w-4 h-4 mr-2" />
              <span>{order.deliveryInfo}</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="mr-2">Status:</span>
              <select
                title="Status"
                className={`flex w-[250px] border rounded px-3 py-1 ${
                  order.status === "Em andamento"
                    ? "bg-yellow-200 border-yellow-400"
                    : order.status === "A Caminho"
                    ? "bg-blue-200 border-blue-400"
                    : order.status === "Finalizado"
                    ? "bg-green-200 border-green-400"
                    : order.status === "Em análise"
                    ? "bg-purple-200 border-purple-400"
                    : order.status === "Cancelado"
                    ? "bg-red-200 border-red-400"
                    : "bg-white border-gray-300"
                }`}
                value={order.status}
                onChange={(e) => changeStatus(order.id, e.target.value)}
              >
                <option className="flex w-[250px]" value="Em andamento">
                  Em andamento
                </option>
                <option value="A Caminho">A Caminho</option>
                <option value="Finalizado">Finalizado</option>
                <option value="Em análise">Em análise</option>
                <option value="Cancelado">Cancelado</option>
              </select>
            </div>
            <div className="flex gap-2 justify-end items-center">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex gap-2 items-center border p-4 rounded-md bg-blue-400 text-white hover:bg-orange-300"
                    onClick={() => changeStatus(order.id, "Cancelado")}
                  >
                    Editar
                    <Edit className="w-4 h-4" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-white">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-red-600">
                      Você realmente deseja alterar o pedido?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Essa alteração mudará informações do cliente ou do pedido!
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-red-400">
                      Cancelar
                    </AlertDialogCancel>
                    <AlertDialogAction className="bg-green-400">
                      Continuar
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex gap-2 items-center border p-4 rounded-md bg-red-400 text-white hover:bg-orange-300"
                    onClick={() => changeStatus(order.id, "Cancelado")}
                  >
                    Excluir
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-white">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-red-600">
                      Você realmente deseja excluir o pedido?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Essa opção excluirá permanentemente o pedido!
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-red-400">
                      Cancelar
                    </AlertDialogCancel>
                    <AlertDialogAction className="bg-green-400">
                      Continuar
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <Dialog>
                <DialogTrigger>
                  <Button
                    className="flex gap-2 border border-slate-400 items-center p-2 rounded-md  hover:bg-orange-300"
                    onClick={() => changeStatus(order.id, "Cancelado")}
                  >
                    Falar com o cliente
                    <MessageSquareText className="w-4 h-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white">
                  <DialogHeader>
                    <DialogTitle className="text-red-500">
                      Chamando o Cliente
                    </DialogTitle>
                    <DialogDescription>
                      A partir de agora você entrará em contato com o cliente!
                      Deseja continuar pelo chat ou WhatsApp?
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
