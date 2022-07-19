import { nCol, ResponsiveInputValueType } from '@c3/css';
import { css } from 'styled-components';

export const gridListCss = (
  num: ResponsiveInputValueType,
  width: ResponsiveInputValueType,
  height: ResponsiveInputValueType,
  rgap: ResponsiveInputValueType = [0],
  cgap: ResponsiveInputValueType = [0]
) => {
  return css`
    .c3-list {
      ${nCol(num, width, height, rgap, cgap)}
    }
  `;
};