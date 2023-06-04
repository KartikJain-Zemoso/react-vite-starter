import * as React from "react";

type IconProps = {
  src: string;
  sx?: object;
  onClick?: () => void;
};

const Icon: React.FC<IconProps> = ({ src, sx, onClick }: IconProps) => {
  return <img data-testid="icon" src={src} style={sx} onClick={onClick} />;
};
export default Icon;
