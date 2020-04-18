import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileExperience = ({ profile: { experience } }) => {
  return (
    <Fragment>
      <div className='profile-exp bg-white p-2'>
        <h2 className='text-primary'>Experience</h2>
        {experience.length > 0 ? (
          experience.map((exp, index) => (
            <div key={index}>
              <h3 className='text-dark'>{exp.company}</h3>
              <p>
                <Moment format='YYYY/MM/DD'>{moment.utc(exp.from)}</Moment> -{' '}
                {exp.to === null ? (
                  ' Current'
                ) : (
                  <Moment format='YYYY/MM/DD'>{moment.utc(exp.to)}</Moment>
                )}
              </p>
              <p>
                <strong>Position: </strong>
                {exp.title}
              </p>
              <p>
                <strong>Description: </strong>
                {exp.description}
              </p>
            </div>
          ))
        ) : (
          <h4>No experience listed</h4>
        )}
      </div>
    </Fragment>
  );
};

ProfileExperience.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileExperience;
