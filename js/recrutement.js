$(function toggleView() {

    function toggle(event) {
        $('.view-more').transition('show');
        $('#toogle-view-button').remove();
    }

    document.getElementById('toogle-view-button').addEventListener('click', toggle);
});
