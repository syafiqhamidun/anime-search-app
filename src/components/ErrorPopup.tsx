interface ErrorPopupProps {
    message: string;
    onClose: () => void;
  }
  
  const ErrorPopup = ({ message, onClose }: ErrorPopupProps) => {
    return (
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-start gap-3 max-w-sm">
          <span>⚠️</span>
          <div className="flex-1">
            <p className="font-semibold">Error</p>
            <p className="text-sm">{message}</p>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white">
            ✕
          </button>
        </div>
      </div>
    );
  };
  
  export default ErrorPopup;
  