import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SUPP_SUCCESS,
  NEWONNETMEDS_SUCCESS,
  COVIDESSENTIALS_SUCCESS,
  BESTSELLER_SUCCESS,
  FETCHFILTERDATA,
  CART_SUCCESS,
  ADMIN_LOGIN,
} from "./actionTypes";
export const initState = {
  isAuth2: false,
  isAuth: false,
  supplementData: [],
  newOnNetmeds: [],
  covidEssentials: [],
  bestSeller: [],
  filteredData: [],
  cart: [],
};
export const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
      };
    }
    case ADMIN_LOGIN: {
      return {
        ...state,
        isAuth2: true,
      };
    }

    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuth: false,
      };
    }

    case SUPP_SUCCESS: {
      return {
        ...state,
        supplementData: action.payload,
      };
    }

    case NEWONNETMEDS_SUCCESS: {
      return {
        ...state,
        newOnNetmeds: action.payload,
      };
    }

    case COVIDESSENTIALS_SUCCESS: {
      return {
        ...state,
        covidEssentials: action.payload,
      };
    }

    case BESTSELLER_SUCCESS: {
      return {
        ...state,
        bestSeller: action.payload,
      };
    }

    case FETCHFILTERDATA: {
      return {
        ...state,
        filteredData: action.payload,
      };
    }

    case CART_SUCCESS: {
      return {
        ...state,
        cart: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
