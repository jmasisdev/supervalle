$(document).ready(function() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      });

    var options = {
        animateThreshold: 100
    };
    $('.aniview').AniView(options);

    $('.code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});