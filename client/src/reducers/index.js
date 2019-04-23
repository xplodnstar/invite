const initialState = {
  carousel: [],
  sanctuary: [],
  first: '',
  last: '',
  email: '',
  phone: '',
  age: '',
  picture: '',
  thumbnail: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_PERSON':
      return {
        ...state,
        first: action.person.name.first,
        last: action.person.name.last,
        email: action.person.email,
        phone: action.person.phone,
        age: action.person.dob.age,
        picture: action.person.picture.large,
        thumbnail: action.person.picture.thumbnail,
      }
    case 'CAROUSEL':
      return {
        ...state,
        carousel: [action.carousel, ...state.carousel]
      }
    case 'SANCTUARY':
      return {
        ...state,
        sanctuary: [action.sanctuary, ...state.sanctuary]
      }
    default:
      return state
  }
}