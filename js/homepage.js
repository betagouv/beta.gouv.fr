$(function initHomepage() {
    var currentIndex = 0,
        total = $('#presentation .startup-presentation').length;

    function selectorForIndex(index) {
        index %= total;
        return '#presentation .startup-presentation:nth-child(' + (index + 1) + ')';
    }

    function showExample(event) {
        $(selectorForIndex(currentIndex)).transition('hide');
        $(selectorForIndex(currentIndex + 1)).transition('fade right');

        currentIndex++;
    }

    $('#presentation .startup-presentation').transition('hide');
    $(selectorForIndex(currentIndex)).transition('show');

    document.getElementById('otherExample').addEventListener('click', showExample);
});
