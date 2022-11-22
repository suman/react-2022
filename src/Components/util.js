// import { useDispatch } from 'react-redux';

function fetchCountApi() {
  console.log('Promise initiated ')
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Promise resolved ')
      // console.log("somehting happend bros")
      resolve({ data: [4] });
    }, 2000)
  })
}
// }
// export function fetchCount(amount = 1) {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve({ data: amount }), 500)
//   );
// }

// const dispatch = useDispatch();
// setTimeout(() => {
//     dispatch({ type: 'countUpdated', payload: { count: 16 } });
// }, 3000)

function GetCountData() {
  return async (dispatch) => {
    fetchCountApi().then((response) => {
      dispatch({ type: 'countUpdated', payload: response.data });
    });
  };
}
export default GetCountData;