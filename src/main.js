import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import axios from "axios";

import { getImagesByQuery } from "./js/pixabay-api"

import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader
} from "./js/render-functions";

const form = document.querySelector(".form");
const formInput = document.querySelector(".formInput");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();

    const query = formInput.value.trim();
    
    if (!query) {
        iziToast.warning({
            title: 'Hey',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight'
        });
        return;
    }

    clearGallery();
    showLoader();
}


