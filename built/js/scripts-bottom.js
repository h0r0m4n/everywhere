// @codekit-prepend "../../bower_components/jquery/dist/jquery.js"
// @codekit-prepend "../../bower_components/jquery.cookie/jquery.cookie.js"
// @codekit-prepend "../../bower_components/jquery-placeholder/jquery.placeholder.js"
// @codekit-prepend "../../bower_components/fastclick/lib/fastclick.js"
// @codekit-prepend "../../bower_components/foundation/js/foundation.min.js"

// Foundation
$(document)
  .foundation()

  .foundation({
    "magellan-expedition": {
      destination_threshold: 0
    }
  })

  .foundation({
    interchange: {
      reflow: true
    }
  })

  .on('replace', 'img', function() {
    $(this).foundation({
      equalizer : {
        equalize_on_stack: true,
        reflow: true
      }
    });
  })
;