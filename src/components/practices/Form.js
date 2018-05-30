import React from 'react';
import AutoComplete from '../common/AutoComplete';

const PracticeForm = ( {handleChange, handleSubmit, handlePlaceChange, practice, errors
} ) => {
  const formInvalid = Object.keys(errors).some(key => errors[key]);
  // console.log(game);
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Title of Practice</label>
        <input id="title" name="title" className="input" placeholder="Title"  onChange={handleChange} value={practice.title || ''}/>
        {errors.title &&<small>{errors.title}</small>}
      </div>
      <div className="field">
        <label htmlFor="info">Info</label>
        <input id="info" name="info" className="input" placeholder="Info"  onChange={handleChange} value={practice.info || ''}/>
        {errors.info &&<small>{errors.info}</small>}
      </div>
      <div className="field">
        <label htmlFor="startTime">Kick Off</label>
        <input id="startTime" name="startTime" className="input" placeholder="Kick Off"  onChange={handleChange} value={practice.startTime || ''}/>
        {errors.startTime &&<small>{errors.startTime}</small>}
      </div>
      <div className="field">
        <label htmlFor="playerArrival">Image</label>
        <input id="playerArrival" name="playerArrival" className="input" placeholder="Player Arrival Time"  onChange={handleChange} value={practice.playerArrival || ''}/>
        {errors.playerArrival &&<small>{errors.playerArrival}</small>}
      </div>
      <div className="field">
        <label htmlFor="practiceAddress">Game Day Address</label>
        <AutoComplete
          id="practiceAddress"
          name="practiceAddress"
          className="input"
          placeholder="practiceAddress"
          handlePlaceChange={handlePlaceChange}
          value={practice.practiceAddress || ''}
          onChange={handleChange}
        />
        {errors.practiceAddress &&<small>{errors.practiceAddress}</small>}
      </div>
      <button disabled={formInvalid} className="button is-primary">Submit</button>
    </form>
  );
};

export default PracticeForm;
