import React from "react";
import "./ConfirmModal.css";

const ConfirmModal = ({
  setShowModal,
  handleProductRemove,
  itemData,
  title,
  message,
}) => {
    // console.log(itemData?._id);
  return (
    
     <div className="modal-confirm h-auto w-96 bg-gray-800 text-center">
        <div className="">
          <h3 className="text-white my-7 text-xl">{message}</h3>
          <h3 className="text-white my-7">{title}</h3>
        </div>
     <div className="flex justify-end p-7 gap-7">
         <button
           onClick={() => handleProductRemove(itemData?._id)}
           className="btn btn-sm btn-warning"
         >
           Delete
         </button>
         <button
           className="btn btn-sm btn-accent"
           onClick={() => setShowModal(false)}
         >
           Cancel
         </button>
       </div>
     </div>
  );
};

export default ConfirmModal;
