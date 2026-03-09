import ReactModal from "react-modal";
import { Calculator } from "lucide-react";
ReactModal.setAppElement("#root");

const CommonModal = ({ isOpen, onClose, children, width = "400%", maxWidth }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,          
        },
        content: {
          position: "relative",
          inset: "auto",
          width: width,
          maxWidth: maxWidth,
          padding: "30px",
          borderRadius: "16px",
          border: "none"
        }
      }}
    >          
      {children}
    </ReactModal>
  );
};

export default CommonModal;