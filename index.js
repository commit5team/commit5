$(document).ready(function () {
    $(".team-member").click(function () {
        let targetModal = $(this).data("target");
        $(targetModal).fadeIn();
    });

    $(".close-btn, .modal-background").click(function (e) {
        if ($(e.target).hasClass("modal-background") || $(e.target).hasClass("close-btn")) {
            $(".modal-background").fadeOut();
        }
    });
});
