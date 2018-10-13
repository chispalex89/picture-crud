import { FETCHING_PICTURE_LIST, FETCHING_PICTURE_LIST_FAILURE, FETCHING_PICTURE_LIST_SUCCESS,
    CREATE_PICTURE, CREATE_PICTURE_FAILURE, CREATE_PICTURE_SUCCESS, CLEAN_PICTURE_DATA } from "../config/consts";

//import axios from 'axios'

export function fetchPictures() {
    return (dispatch) => {
        dispatch(getPictures())
        fetch('/api/v1/pictures')
            .then(response => response.json())
            .then(json => dispatch(getPicturesSucess(json)))
            .catch(err => dispatch(getPicturesFailure(err)))
    }
}

export function addPicture(file, contact) {
    let data = new FormData()
    data.append('name', contact.name)
    data.append('email', contact.eMail)
    data.append('phone', contact.phone)
    data.append('file', file)
    return (dispatch) => {
        dispatch(createPicture())
        fetch.post('/api/contacts', data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then(json => {
            if(json.status === 201) dispatch(createPictureSuccess(json))
            else dispatch(createPictureFailure(json.statusText))
        })
        .catch(err => dispatch(createPictureFailure(err)))
    }
}

export function cleanData() {
    return {
        type: CLEAN_PICTURE_DATA
    }
}

function getPicturesSucess(data) {
    return {
        type: FETCHING_PICTURE_LIST_SUCCESS,
        data
    }
}

function getPicturesFailure(err) {
    console.error(err)
    return {
        type: FETCHING_PICTURE_LIST_FAILURE
    }
}

function getPictures() {
    return {
        type: FETCHING_PICTURE_LIST
    }
}

function createPicture() {
    return {
        type: CREATE_PICTURE
    }
}

function createPictureSuccess() {
    return {
        type: CREATE_PICTURE_SUCCESS,
    }
}

function createPictureFailure(data) {
    console.error(`[app] ${data}`)
    return {
        type: CREATE_PICTURE_FAILURE,
        data
    }
}