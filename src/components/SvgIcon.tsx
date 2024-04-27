import React, {CSSProperties, FC} from 'react';
import {size} from '../themes/Metrics';

import Logo from '../assets/media/logo.svg';
import LoginThumb from '../assets/media/login_thumb.svg';
import EyeShow from '../assets/media/eye-preview-gray.svg';
import EyeHide from '../assets/media/eye-off-gray.svg';
interface SvgIconProps {
  name: string;
  h?: number;
  w?: number;
  style?: CSSProperties;
}

const IconList: Record<string, React.ComponentType<any>> = {
  logo: Logo,
  loginThumb: LoginThumb,
  eyeShow: EyeShow,
  eyeHide: EyeHide,
};

const SvgIcon: FC<SvgIconProps> = ({name, w = 20, h = 20, style, ...rest}) => {
  const IconView = IconList[name] || IconList['logo'];
  return <IconView width={size(w)} height={size(h)} style={style} {...rest} />;
};

export default SvgIcon;
