import classNames from 'classnames/bind';
import { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styleIdentifiers from './proDetail.scss';
const styles = classNames.bind(styleIdentifiers);

export type ProDetailRouteParams = {
  id: string;
};

export type ProDetailProps = RouteComponentProps<ProDetailRouteParams> & {};

export const ProDetail: FC<ProDetailProps> = ({ match: { params } }) => {
  return (
    <div className={styles('proDetail')}>
      <h1>Pro Detail Page {params?.id ? `(${params.id})` : null}</h1>
      <p>Please update this page to display some details of the pro</p>
    </div>
  );
};
