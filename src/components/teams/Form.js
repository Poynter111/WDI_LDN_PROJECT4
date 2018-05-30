import React from 'react';
import AutoComplete from '../common/AutoComplete';

const TeamsForm = ( {handleChange, handleSubmit, handlePlaceChange, team, errors
} ) => {
  const formInvalid = Object.keys(errors).some(key => errors[key]);
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="teamName">Team Name</label>
        <input id="teamName" name="teamName" className="input" placeholder="Team Name"  onChange={handleChange} value={team.teamName || ''}/>
        {errors.teamName &&<small>{errors.teamName}</small>}
      </div>
      <div className="field">
        <label htmlFor="info">Info</label>
        <input id="info" name="info" className="input" placeholder="Info"  onChange={handleChange} value={team.info || ''}/>
        {errors.info &&<small>{errors.info}</small>}
      </div>
      <div className="field">
        <label htmlFor="logo">Image</label>
        <input id="logo" name="logo" className="input" placeholder="Logo"  onChange={handleChange} value={team.logo || ''}/>
        {errors.logo &&<small>{errors.logo}</small>}
      </div>
      <div className="field">
        <label htmlFor="homeGroundAddress">HomeGround Address</label>
        <AutoComplete
          id="homeGroundAddress"
          name="homeGroundAddress"
          className="input"
          placeholder="Home Ground Address"
          handlePlaceChange={handlePlaceChange}
          value={team.homeGroundAddress || ''}
          onChange={handleChange}
        />
        {errors.homeGroundAddress &&<small>{errors.homeGroundAddress}</small>}
      </div>
      <button disabled={formInvalid} className="button is-primary">Submit</button>
    </form>
  );
};

export default TeamsForm;
