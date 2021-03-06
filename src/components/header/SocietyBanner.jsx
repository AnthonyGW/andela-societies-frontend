import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import OptionsIcon from '../svgIcons/headerIcons/Options';
import InvictusLogo from '../bannerLogos/Invictus';
import IstelleLogo from '../bannerLogos/Istelle';
import PhoenixLogo from '../bannerLogos/Phoenix';
import SparksLogo from '../bannerLogos/Sparks';
import societyImage from '../../assets/images/andelaSociety.jpg';

/**
 * @name SocietyBanner
 * @summary Renders the SocietyBanner
 * @property society
 * @return {jsx} React node for a society banner
 */

const SocietyBanner = (props) => {
  const { society } = props;
  const bannerLogos = {
    invictus: InvictusLogo,
    istelle: IstelleLogo,
    phoenix: PhoenixLogo,
    sparks: SparksLogo,
  };
  // select society banner from bannerLogos object by key
  const BannerLogo = society.name && bannerLogos[society.name.toLowerCase()];
  const hasBanner = () => (
    Object.keys(bannerLogos).find(name => name === society.name.toLowerCase())
  );

  return (
    <div className='societyBanner__wrapper'>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.85)), url(${
            society.image || societyImage
          })`,
          backgroundSize: '100%',
          display: 'cover',
          height: '32rem',
        }}
      >
        <span className='societyBanner__name'>{society.name}</span>
        <span className='societyBanner__points'>{society.remainingPoints}</span>
        <span className='societyBanner__pointsLabel'>points</span>
      </div>
      <div className='societyBanner__navbar'>
        <div className='societyBanner__logo'>
          {hasBanner() ? <BannerLogo /> : null}
        </div>
        <ul className='societyBanner__nav'>
          <li className='societyBanner__nav--item'>
            <Link to='/' className='societyBanner__link societyBanner__link--active'>Activities</Link>
          </li>
          <li className='societyBanner__nav--item'>
            <Link to='/' className='societyBanner__link'>Leadership</Link>
          </li>
          <li className='societyBanner__nav--item'>
            <a href='/' className='societyBanner__options societyBanner__link'><OptionsIcon /></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

SocietyBanner.propTypes = {
  society: PropTypes.shape({
    name: PropTypes.string.isRequired,
    remainingPoints: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default SocietyBanner;
