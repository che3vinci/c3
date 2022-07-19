import { rcss } from '@c3/css';
import React from 'react';
import { css } from 'styled-components';
import { BaseProps } from '../Common/index';
import { Col } from '../layout/Col';

export type ICardProps = BaseProps;
export const Card: React.FC<ICardProps> = ({
  children,
  borderRadius,
  css: _css,
  ...props
}) => {
  const _borderRadius = borderRadius ? { borderRadius } : {};
  return (
    <Col
      {...props}
      fx="stretch"
      {..._borderRadius}
      css={css`
        ${() => _css};
        & > *:first-child {
          ${borderRadius &&
          rcss({
            borderTopRightRadius: borderRadius,
            borderTopLeftRadius: borderRadius,
          })}
        }
        & > *:last-child {
          ${borderRadius &&
          rcss({
            borderBottomLeftRadius: borderRadius,
            borderBottomRightRadius: borderRadius,
          })}
        }
      `}
    >
      {children}
    </Col>
  );
};