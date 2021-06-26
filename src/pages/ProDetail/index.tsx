import { useQuery } from '@apollo/client';
import classNames from 'classnames/bind';
import { FC, useMemo } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import DoctorIcon from './assets/doctor-icon.svg';
import NurseIcon from './assets/nurse-icon.svg';
import { Map } from './components/Map';
import { ProDetailItem } from './components/ProDetailItem';
import { ProServiceList } from './components/ProServiceList';
import { GET_PRO } from './graphql';
import { GetPro, GetProVariables } from './graphql/__generated__/GetPro';
import styleIdentifiers from './proDetail.scss';

const styles = classNames.bind(styleIdentifiers);

export type ProDetailRouteParams = {
  id: string;
};

export type ProDetailProps = RouteComponentProps<ProDetailRouteParams> & {};

export const ProDetail: FC<ProDetailProps> = ({
  match: {
    params: { id },
  },
}) => {
  const { data, loading, error } = useQuery<GetPro, GetProVariables>(GET_PRO, { skip: !id, variables: { id } });
  const pro = useMemo(() => data?.prosGetOne, [data]);

  const mapCoordinates = useMemo((): { x: number; y: number } | undefined => {
    if (!!pro && !!pro.localisation) {
      const [x, y] = pro.localisation.coordinates;
      return { x, y };
    }
  }, [pro]);

  const addressFormatted = useMemo(() => {
    if (!pro?.address) return '';
    const { city, zip, street, number } = pro?.address;
    return `${street} ${number}, ${zip} ${city}`;
  }, [pro]);

  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p className='text-center'>Error :(</p>;

  if (pro == null) return <p className='text-center'>Not found</p>;

  return (
    <div className={styles('ProDetail')}>
      <h1>{pro.titleMulti?.fr}</h1>
      <Fade transitionDuration={500} duration={2000} autoplay infinite pauseOnHover indicators>
        {pro.pictures?.map((picture, index) => (
          <img key={index} style={{ width: '100%' }} src={picture.picture.full ?? ''} alt='' />
        ))}
      </Fade>
      <h2 className={styles('heading')}>Employees</h2>
      <p>
        <img src={DoctorIcon} alt='' className={styles('icon')} />
        {`${pro?.employee_numbers ?? 0} vets`}
      </p>
      <p>
        <img src={NurseIcon} alt='' className={styles('icon')} />
        {`${pro?.numberOfASV ?? 0} assistants`}
      </p>
      <h2 className={styles('heading')}>Services</h2>
      <ProServiceList services={pro?.services ?? []} />
      <h2 className={styles('heading')}>For your visit</h2>
      <ProDetailItem
        label='Languages'
        value={pro.spokenLanguages?.map((lang, index) => (
          <div className={styles('tag')} key={index}>
            {lang}
          </div>
        ))}
      />
      <ProDetailItem
        label='Payment methods'
        value={pro.paymentMethods?.map((method, index) => (
          <div className={styles('tag')} key={index}>
            {method}
          </div>
        ))}
      />
      <h2 className={styles('heading')}>Contact</h2>
      <ProDetailItem label='Phone' value={pro.phone} />
      <ProDetailItem label='Mobile phone' value={pro.mobilePhone} />
      <ProDetailItem label='Email' value={!!pro.email && <a href={`mailto:${pro.email}`}>{pro.email}</a>} />
      <ProDetailItem label='Website' value={!!pro.website && <a href={pro.website}>{pro.website}</a>} />
      <ProDetailItem label='Address' value={addressFormatted} />
      {!!mapCoordinates && <Map className={styles('map')} {...mapCoordinates} />}
    </div>
  );
};
