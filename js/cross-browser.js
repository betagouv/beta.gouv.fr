if (! Modernizr.flexwrap) {
    // Semantic UI implements grid row breaks with flex-wrap, and breaks if browser doesn't support it
    // see https://github.com/sgmap/beta.gouv.fr/issues/78
    [ 'grid', 'cards' ].forEach(function(offendingClass) {
        Array.prototype.forEach.call(document.querySelectorAll('.' + offendingClass), function(offender) {
            offender.className = offender.className.replace(offendingClass, '');
        });
    });
}
