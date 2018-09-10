export const ADD_USER_NUM = 'ADD_USER_NUM';

export function addUser (num: any) {
    console.log(num);
    return {
        type: ADD_USER_NUM,
        payload: {
            USER_NUM: num
        }
    };
}

export function getClassRooms () {
    return {
        type: 'GET_CLASS_ROOMS',
        payload: {
            USER_NUM: [1, 2, 3, 4, 5]
        }
    };
 }