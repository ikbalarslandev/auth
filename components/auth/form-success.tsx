import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className="flex items-center space-x-2 text-emerald-500 bg-emerald-500/15 p-2">
      <CheckCircledIcon className="w-5 h-5" />
      <span>{message}</span>
    </div>
  );
};

export default FormSuccess;
