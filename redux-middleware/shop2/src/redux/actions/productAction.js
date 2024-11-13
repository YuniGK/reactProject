import { productActions } from "../reducers/productSlice";

function getProducts(searchQuery){
    //getState - state상태를 가져온다.
    return async (dispatch, getState)=>{
        let url = `http://localhost:4000/products?q=${searchQuery}`;

        let response = await fetch(url);
        let data = await response.json();

        dispatch(productActions.getAllProducts({data}));
    };
}


function getProductDetail(id){
    return async(dispatch, getState) => {
        let url = `http://localhost:4000/products/${id}`;

        let response = await fetch(url);
        let data = await response.json();

        dispatch(productActions.getSingleProducts({data}));
    }
}

export const productAction={getProductDetail};