import React, {CSSProperties, FC} from 'react';
import {size} from '../themes/Metrics';

import Logo from '../assets/media/logo.svg';
import LoginThumb from '../assets/media/login_thumb.svg';
import EyeShow from '../assets/media/eye-preview-gray.svg';
import EyeHide from '../assets/media/eye-off-gray.svg';
import Gainer from '../assets/media/gainer_con.svg';
import Looser from '../assets/media/looser_con.svg';
import Delete from '../assets/media/delete.svg';
import Search from '../assets/media/search.svg';
import LeftArrow from '../assets/media/left-arrow.svg';
import RightArrow from '../assets/media/right-arrrow.svg';
import Right from '../assets/media/right.svg';
import True from '../assets/media/true.svg';

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
  gainer: Gainer,
  looser: Looser,
  delete: Delete,
  search: Search,
  leftArrow: LeftArrow,
  rightArrow: RightArrow,
  right: Right,
  true: True,
};

const SvgIcon: FC<SvgIconProps> = ({name, w = 20, h = 20, style, ...rest}) => {
  const IconView = IconList[name] || IconList['logo'];
  return <IconView width={size(w)} height={size(h)} style={style} {...rest} />;
};

export default SvgIcon;
