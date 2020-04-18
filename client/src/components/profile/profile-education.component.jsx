import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileEducation = ({ profile: { education } }) => {
  return (
    <Fragment>
      <div className='profile-edu bg-white p-2'>
        <h2 className='text-primary'>Education</h2>
        {education &&
          education.map((edu, index) => (
            <Fragment key={index}>
              <h3>{edu.school}</h3>
              <p>
                <Moment format='YYYY/MM/DD'>{moment.utc(edu.from)}</Moment> -{' '}
                {edu.to === null ? (
                  ' Current'
                ) : (
                  <Moment format='YYYY/MM/DD'>{moment.utc(edu.to)}</Moment>
                )}
              </p>
              <p>
                <strong>Degree: </strong>
                {edu.degree}
              </p>
              <p>
                <strong>Field Of Study: </strong>
                {edu.fieldofstudy}
              </p>
              <p>
                <strong>Description: </strong>
                {edu.description}
              </p>
            </Fragment>
          ))}
      </div>
    </Fragment>
  );
};

ProfileEducation.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileEducation;
