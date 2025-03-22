import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import edit from "../../assets/edit.png";
import borrar from "../../assets/delete.png";
import { Task } from "../../services/taskServices";

interface TaskMenuProps {
  isOpen: boolean;
  onClose: () => void;
  position: { x: number; y: number };
  onDelete: () => void;
  onEdit: () => void;
}

const TaskMenu: React.FC<TaskMenuProps> = ({ isOpen, onClose, position, onDelete,  onEdit }) => {

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="absolute bg-white shadow-lg rounded-lg p-2 w-40 border z-50"
        style={{
          left: `${position.x - 80}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, 0)",
        }}
      >
          <button
             onClick={() => onEdit()} 
            className="flex w-full text-left text-[10px] px-4 py-2 text-xs hover:bg-gray-200 rounded"
          >
            <img src={edit} alt="" className="mr-4 w-[10px] h-auto object-contain" />
            Editar Tarea
          </button>
        
        <button
          onClick={() => setIsDeleteModalOpen(true)}
          className="flex w-full text-left text-[10px] px-4 py-2 text-xs hover:bg-red-200 rounded text-red-600"
        >
          <img src={borrar} alt="" className="mr-4 w-[10px] h-auto object-contain" />
          Borrar
        </button>
      </div>

      {/* Modal de Confirmación */}
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          onClose();
        }}
        onConfirm={() => {
          onDelete();
          setIsDeleteModalOpen(false);
          onClose();
        }}
      />
    </>
  );
};

export default TaskMenu;
