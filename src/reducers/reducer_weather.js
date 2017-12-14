import { FETCH_WEATHER } from '../actions';

export default function (state = null, action) {
  console.log('Action received: ', action);

  switch (action.type) {
    case FETCH_WEATHER:
      break;

    default:
      return state;
  }
}
