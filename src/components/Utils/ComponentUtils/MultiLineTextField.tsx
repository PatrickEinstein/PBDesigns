import { ChangeEvent } from "react";


interface MultiLineTextFieldProps {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  caption: string;
}

const MultiLineTextField: React.FC<MultiLineTextFieldProps> = ({
  onChange,
  caption
}) => {
  return (
    <div>
      <textarea
        autoComplete="true"
        placeholder="Today is has been a great day so far for me"
        rows={3}
        onChange={onChange}
        className="w-full px-4 py-3"
        value={caption}
      />
    </div>
  );
};

export default MultiLineTextField;
