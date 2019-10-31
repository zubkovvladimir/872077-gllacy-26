var feedback = document.querySelector(".address__btn");
var popup = document.querySelector(".modal");
var popupwrap = document.querySelector(".modal-wrap");
var popupclose = document.querySelector(".modal__btn-close");
var popupform = document.querySelector(".modal__form");
var username = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");

feedback.addEventListener("click",function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    popupwrap.classList.add("modal-wrap__show");
    username.focus();
});

popupclose.addEventListener("click",function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popupwrap.classList.remove("modal-wrap__show");
    popup.classList.remove("modal-error");
});

popupwrap.addEventListener("click",function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popupwrap.classList.remove("modal-wrap__show");
});

popupform.addEventListener("submit",function (evt) {
    if(!username.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
    }
});