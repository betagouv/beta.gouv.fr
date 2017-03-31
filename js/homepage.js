(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:336128,hjsv:5};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');

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
