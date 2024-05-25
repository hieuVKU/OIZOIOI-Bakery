document.addEventListener('DOMContentLoaded', function() {
    const listImage = document.querySelector('.list-images');
    const imgs = document.getElementsByTagName('img');
    const btnLeft = document.querySelector('.btn-left');
    const btnRight = document.querySelector('.btn-right');
    const length = imgs.length;
    let current = 0;

    if (!listImage || !btnLeft || !btnRight || length === 0) {
        console.error('One or more required elements are missing.');
        return;
    }

    const handleChangeSlide = () => {
        if (current == length - 1) {
            current = 0;
            let width = imgs[0].offsetWidth;
            listImage.style.transform = `translateX(0px)`;
            const active = document.querySelector('.active');
            if (active) {
                active.classList.remove('active');
            }
            const newActive = document.querySelector('.index-item-' + current);
            if (newActive) {
                newActive.classList.add('active');
            }
        } else {
            current++;
            let width = imgs[0].offsetWidth;
            listImage.style.transform = `translateX(${width * -1 * current}px)`;
            const active = document.querySelector('.active');
            if (active) {
                active.classList.remove('active');
            }
            const newActive = document.querySelector('.index-item-' + current);
            if (newActive) {
                newActive.classList.add('active');
            }
        }
    };

    let handleEventChangeSlide = setInterval(handleChangeSlide, 4000);

    btnRight.addEventListener('click', () => {
        clearInterval(handleEventChangeSlide);
        handleChangeSlide();
        handleEventChangeSlide = setInterval(handleChangeSlide, 4000);
    });

    btnLeft.addEventListener('click', () => {
        clearInterval(handleEventChangeSlide);
        if (current == 0) {
            current = length - 1;
            let width = imgs[0].offsetWidth;
            listImage.style.transform = `translateX(${width * -1 * current}px)`;
            const active = document.querySelector('.active');
            if (active) {
                active.classList.remove('active');
            }
            const newActive = document.querySelector('.index-item-' + current);
            if (newActive) {
                newActive.classList.add('active');
            }
        } else {
            current--;
            let width = imgs[0].offsetWidth;
            listImage.style.transform = `translateX(${width * -1 * current}px)`;
            const active = document.querySelector('.active');
            if (active) {
                active.classList.remove('active');
            }
            const newActive = document.querySelector('.index-item-' + current);
            if (newActive) {
                newActive.classList.add('active');
            }
        }
        handleEventChangeSlide = setInterval(handleChangeSlide, 4000);
    });
});
