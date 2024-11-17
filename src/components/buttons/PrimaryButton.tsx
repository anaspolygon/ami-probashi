import { LoadingOutlined } from "@ant-design/icons";
import { FC, MouseEventHandler } from "react";

interface PrimaryButtonProps {
  disabled?: boolean;
  loading?: boolean;
  btnText: string;
  onClick?: MouseEventHandler;
  mt?: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  btnText,
  onClick,
  loading,
  disabled,
  mt,
}) => {
  return (
    <div className={`mt-${mt || 8} md:mt-[${mt || "88px"}]`}>
      <button
        className="barlow font-medium text-xl md:text-xl leading-8 text-white py-[13px] w-full bg-primary rounded-lg disabled:bg-[#CBD5E1] disabled:cursor-not-allowed"
        type="submit"
        onClick={onClick}
        disabled={disabled}
      >
        {loading && <LoadingOutlined className="mr-2" />}
        {btnText}
      </button>
    </div>
  );
};

export default PrimaryButton;
