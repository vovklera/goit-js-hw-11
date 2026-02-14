import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const container = document.querySelector(".gallery");
const loader = document.querySelector("#loader");

const lightBox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250
})

export function createGallery(images) {
    const markup = images.map(({ previewURL, tags, largeImageURL }) => `
        <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <img
                    class="gallery-image"
                    src="${previewURL}"
                    alt="${tags}"
                />
            </a>
        </li>
    `).join("");

    container.insertAdjacentHTML("beforeend", markup);

    lightBox.refresh();
};


export function clearGallery() { 
    container.innerHTML = '';
};

export function showLoader() { 
    loader.classList.remove("hidden")
};

export function hideLoader() { 
    loader.classList.add("hidden")
};