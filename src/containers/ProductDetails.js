import React, {useEffect} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProduct } from '../redux/actions/productActions';

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const {image, title, price,category, description} = product;
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(productId);

    const fetchProductDetail = async () => {
        const response = await axios
        .get('https://fakestoreapi.com/products/${productId}')
        .catch((err) => {
            console.log('Err ',err);
        });
        dispatch(selectedProduct(response.data));
    return (
        <div>
            <h1>ProductDetails</h1>
        </div>
    );
};
};

export default ProductDetails;