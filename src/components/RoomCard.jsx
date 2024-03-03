
import React from 'react';
import { motion } from 'framer-motion';

const RoomCard = ({ roomName, roomDescription, roomImage, price }) => {
  return (
    <motion.div className="rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <img className="w-full h-48 object-cover" src={roomImage} alt={roomName} />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-sky-600">{roomName}</h3>
        <p className="text-gray-800">{roomDescription}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-700 text-sm" // Añade un elemento para mostrar el precio
            style={{
              marginRight: '10px' // Añade un margen a la derecha
            }}>
            Precio: ${price}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;

