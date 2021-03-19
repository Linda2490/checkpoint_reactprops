import React from 'react';

import PropTypes from 'prop-types'; 

function Profile({fullName, bio, profession, children,handleName,title}) {
       
    return (
        <div>
             
             {handleName}
             {children}
             <h1 style={{color:'red'}}>{fullName}</h1>
             <h2>{bio}</h2>
             <h1>{profession}</h1>
             <button onClick={() => handleName(fullName)}>Alert here !</button> 
             <br/>
             {title}
             
             
        </div>
    )

}
Profile.defaultProps = {
    title : 'default title',
};
Profile.propTypes = {
   fullName : PropTypes.string,
   bio : PropTypes.string,
   profession : PropTypes.string,
    handleName: PropTypes.func,
    title : PropTypes.string,
  };

export default Profile
