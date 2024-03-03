
import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

// Crear un componente de formulario de reserva de hotel
function Reservas() {
  // Definir el estado inicial del formulario
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Usar el hook useForm para manejar la validación y el envío del formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Manejar el envío del formulario
  const onSubmit = (data) => {
    // Mostrar un indicador de carga
    setLoading(true);
    // Enviar una petición POST al servidor con los datos del formulario
    axios
      .post("http://localhost:5000/api/bookings", data)
      .then((response) => {
        // Si la petición tiene éxito, mostrar un mensaje de confirmación
        setLoading(false);
        setMessage(response.data.message);
      })
      .catch((error) => {
        // Si la petición falla, mostrar un mensaje de error
        setLoading(false);
        setMessage(error.response.data.message);
      });
  };

  // Definir las variantes de animación para el componente
  const variants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  };

  // Renderizar el componente
  return (
    <motion.div
      className="min-h-screen bg-gray-100 flex items-center justify-center"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-xl shadow-lg">
        <div>
          <h1 className="text-3xl font-bold text-center text-sky-600">
            Formulario de reserva de hotel
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                {...register("name", { required: true })}
                className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-sm text-red-500">Este campo es obligatorio</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-sm text-red-500">
                  Este campo es obligatorio y debe tener un formato válido
                </p>
              )}
            </div>
            <div className="flex space-x-4">
              <div>
                <label
                  htmlFor="arrivalDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Fecha de llegada
                </label>
                <input
                  type="date"
                  id="arrivalDate"
                  name="arrivalDate"
                  {...register("arrivalDate", { required: true })}
                  className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm ${
                    errors.arrivalDate ? "border-red-500" : ""
                  }`}
                />
                {errors.arrivalDate && (
                  <p className="text-sm text-red-500">
                    Este campo es obligatorio
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="departureDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Fecha de salida
                </label>
                <input
                  type="date"
                  id="departureDate"
                  name="departureDate"
                  {...register("departureDate", { required: true })}
                  className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm ${
                    errors.departureDate ? "border-red-500" : ""
                  }`}
                />
                {errors.departureDate && (
                  <p className="text-sm text-red-500">
                    Este campo es obligatorio
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="roomType"
                className="block text-sm font-medium text-gray-700"
              >
                Tipo de habitación
              </label>
              <select
                id="roomType"
                name="roomType"
                {...register("roomType", { required: true })}
                className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm ${
                  errors.roomType ? "border-red-500" : ""
                }`}
              >
                <option value="">Seleccione una opción</option>
                <option value="single">Doble</option>
                <option value="double">Suite</option>
                <option value="suite">Familiar</option>
              </select>
              {errors.roomType && (
                <p className="text-sm text-red-500">Este campo es obligatorio</p>
              )}
            </div>
            <div>
              <label
                htmlFor="specialRequests"
                className="block text-sm font-medium text-gray-700"
              >
                Solicitudes especiales
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                {...register("specialRequests")}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="paymentMethod"
                className="block text-sm font-medium text-gray-700"
              >
                Método de pago
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                {...register("paymentMethod", { required: true })}
                className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm ${
                  errors.paymentMethod ? "border-red-500" : ""
                }`}
              >
                <option value="">Seleccione una opción</option>
                <option value="creditCard">Tarjeta de crédito</option>
                <option value="paypal">Paypal</option>
                <option value="cash">Efectivo</option>
              </select>
              {errors.paymentMethod && (
                <p className="text-sm text-red-500">Este campo es obligatorio</p>
              )}
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
        {message && (
          <p className="mt-4 text-sm text-center text-green-500">{message}</p>
        )}
      </div>
    </motion.div>
  );
}

export default Reservas;
