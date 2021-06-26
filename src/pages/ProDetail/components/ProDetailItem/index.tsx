import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import styleIdentifiers from '../../proDetail.scss';

const styles = classNames.bind(styleIdentifiers);

export type ProDetailItemProps = {
  label: ReactNode;
  value: ReactNode;
};

export const ProDetailItem: FC<ProDetailItemProps> = ({ label, value }) => {
  return (
    <>
      {!!value && (
        <>
          <div className={styles('label')}>{label}</div>
          <div className={styles('value')}>{value}</div>
        </>
      )}
    </>
  );
};
