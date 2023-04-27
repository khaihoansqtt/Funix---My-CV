const infoBtn = document.querySelector('.info-btn');
const infoForm = document.querySelector('.info-form');
const infoEl = document.querySelector('.info');
const inputEl = document.querySelector('.info-input')
const infoMessage = document.querySelector('.info-message');

infoBtn.onclick = (e) => {
    e.preventDefault();
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const value = inputEl.value;
    if (value.match(regex)) {
        infoEl.classList.remove('hide')
        infoForm.classList.add('hide')
    } else {
        infoMessage.textContent = 'Bạn đã nhập sai email. Vui lòng nhập lại';
        infoMessage.style.color = 'red'
    }
}

const viewMoreBtn = document.querySelectorAll('.view-more')
viewMoreBtn.forEach((item) => {
    item.onclick = () => {
        console.log(123)
        item.nextElementSibling.classList.remove('hide')
        item.classList.add('hide')
    }
})

const viewLessBtn = document.querySelectorAll('.view-less')
viewLessBtn.forEach((item) => {
    item.onclick = () => {
        item.parentNode.classList.add('hide')
        item.parentElement.previousElementSibling.classList.remove('hide')
    }
})