import React from 'react';
import AutoComplete from '../common/AutoComplete';

const GameForm = ( {handleChange, handleSubmit, handlePlaceChange, game, errors
} ) => {
  const formInvalid = Object.keys(errors).some(key => errors[key]);
  // console.log(game);
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="homeTeam">Team Name</label>
        <input id="homeTeam" name="homeTeam" className="input" placeholder="Home Team"  onChange={handleChange} value={game.homeTeam || ''}/>
        {errors.homeTeam &&<small>{errors.homeTeam}</small>}
      </div>
      <div className="field">
        <label htmlFor="awayTeam">Team Name</label>
        <input id="awayTeam" name="awayTeam" className="input" placeholder="Away Team"  onChange={handleChange} value={game.awayTeam || ''}/>
        {errors.awayTeam &&<small>{errors.awayTeam}</small>}
      </div>
      <div className="field">
        <label htmlFor="info">Info</label>
        <input id="info" name="info" className="input" placeholder="Info"  onChange={handleChange} value={game.info || ''}/>
        {errors.info &&<small>{errors.info}</small>}
      </div>
      <div className="field">
        <label htmlFor="date">Date</label>
        <input id="date" name="date" className="input" placeholder="Date"  onChange={handleChange} value={game.date || ''}/>
        {errors.date &&<small>{errors.date}</small>}
      </div>
      <div className="field">
        <label htmlFor="kickOff">Kick Off</label>
        <input id="kickOff" name="kickOff" className="input" placeholder="Kick Off"  onChange={handleChange} value={game.kickOff || ''}/>
        {errors.kickOff &&<small>{errors.kickOff}</small>}
      </div>
      <div className="field">
        <label htmlFor="playerArrival">Player Arrival Time</label>
        <input id="playerArrival" name="playerArrival" className="input" placeholder="Player Arrival Time"  onChange={handleChange} value={game.playerArrival || ''}/>
        {errors.playerArrival &&<small>{errors.playerArrival}</small>}
      </div>
      <div className="field">
        <label htmlFor="gameDayAddress">Game Day Address</label>
        <AutoComplete
          id="gameDayAddress"
          name="gameDayAddress"
          className="input"
          placeholder="Game Day Address"
          handlePlaceChange={handlePlaceChange}
          value={game.gameDayAddress || ''}
          onChange={handleChange}
        />
        {errors.gameDayAddress &&<small>{errors.gameDayAddress}</small>}
      </div>
      <button disabled={formInvalid} className="button is-primary">Submit</button>
    </form>
  );
};

export default GameForm;
