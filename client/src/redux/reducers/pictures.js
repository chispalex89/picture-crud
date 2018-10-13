import { FETCHING_PICTURE_LIST, FETCHING_PICTURE_LIST_FAILURE, FETCHING_PICTURE_LIST_SUCCESS,
    CREATE_PICTURE, CREATE_PICTURE_FAILURE, CREATE_PICTURE_SUCCESS, CLEAN_PICTURE_DATA } from "../config/consts";
const initialState = {
    isFetchingPictures: false,
    isCreating: false,
    isCreated: false,
    errorMessage: '',
    pictureList: []
}

export default function contactReducer(state = initialState, action) {
    switch(action.type){
        case FETCHING_PICTURE_LIST:
        return {
            ...state,
            isFetchingPictures: true,
            pictureList: []
        }
        case FETCHING_PICTURE_LIST_SUCCESS:
        return {
            ...state,
            isFetchingPictures: false,
            pictureList: action.data
        }
        case FETCHING_PICTURE_LIST_FAILURE: 
        return {
            ...state,
            isFetchingPictures: false,
            pictureList: []
        }
        case CREATE_PICTURE:
        return {
            ...state,
            isCreated: false,
            isCreating: true,
            errorMessage: ''
        }
        case CREATE_PICTURE_SUCCESS:
        return {
            ...state,
            isCreating: false,
            isCreated: true,
            errorMessage: ''
        }
        case CREATE_PICTURE_FAILURE:
        return {
            ...state,
            isCreating: false,
            isCreated: false,
            errorMessage: action.data
        }
        case CLEAN_PICTURE_DATA:
        return {
            ...state,
            isFetchingPictures: false,
            isCreating: false,
            isCreated: false,
            errorMessage: '',
        }
        default:
        return state
    }
}