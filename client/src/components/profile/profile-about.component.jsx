import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <Fragment>
      <div className='profile-about bg-light p-2'>
        {bio && (
          <Fragment>
            <h2 className='text-primary'>{name.trim().split(' ')[0]}'s bio</h2>
            <p>{bio}</p>
            <div className='line'></div>
          </Fragment>
        )}

        <h2 className='text-primary'>Skill Set</h2>
        <div className='skills'>
          {skills.length > 0 ? (
            skills.map((skill, index) => (
              <div key={index} className='p-1'>
                &#10003;{skill}
              </div>
            ))
          ) : (
            <h4>No skills listed</h4>
          )}
        </div>
      </div>
    </Fragment>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
