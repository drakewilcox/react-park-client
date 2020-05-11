import parksReducer from '../../reducers/parks-reducer';
// import * as c from './../../actions/ActionTypes';

describe('parksReducer', () => {

  const defaultState = {
    isLoading: false, 
    parks: [], 
    error: null
  };

  test('should successfully return the default state if no action is passed into it', () => {
    expect(parksReducer(defaultState, {type: null})).toEqual(
      {
        isLoading: false, 
        parks: [],
        error: null
      }
    );
  });

})