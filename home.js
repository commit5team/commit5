let moveToTop = function () {
    document.body.scrollIntoView({ behavior: "smooth" });
};

/* 프로그레스바 */
let scrollTop = 0;
let bar = document.querySelector(".bar-ing"); // .bar-ing 요소를 찾는 코드

window.addEventListener("scroll", function () {
    scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let per = Math.ceil(
        (scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100
    );
    if (bar) {    // 프로그레스바가 있으면 width값 주기
        bar.style.width = per + "%";
    }
}, false);




$(document).ready(function () {
    $(".team-member").click(function () {
        let targetModal = $(this).data("target"); // 클릭한 이미지의 data-target 값 가져오기
        console.log("모달 오픈:", targetModal);

        $(targetModal).css("display", "flex"); // flex로 설정해서 중앙 정렬 유지
        $(targetModal).find(".modal").css("display", "block"); // 모달 내용도 보이게 설정
    });

    $(".close-btn, .modal-background").click(function (e) {
        if ($(e.target).hasClass("modal-background") || $(e.target).hasClass("close-btn")) {
            $(".modal-background").fadeOut(function () {
                $(this).css("display", "none"); // fadeOut 후 display: none; 설정
            });
        }
    });
});
