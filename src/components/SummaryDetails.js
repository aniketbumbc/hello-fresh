import styled from 'styled-components';
import css from '@styled-system/css';

export const DisplayPrice = styled.span`
  ${css({
    float: 'right',
  })}
`;

export const Divider = styled.hr`
  ${css({
    borderTopColor: '#E4E4E4',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
  })}
`;

export const TotalPrice = styled.p`
  ${css({
    fontSize: '16px',
    lineHeight: '27px',
    fontWeight: 600,
  })}
`;
