import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

export const FormError: React.FC<FormErrorProps> = ({ message }) => {
  return (
    <div className="flex items-center space-x-2 text-red-500 bg-red-100 p-2">
      <ExclamationTriangleIcon className="w-5 h-5" />
      <span>{message}</span>
    </div>
  );
};

export default FormError;
