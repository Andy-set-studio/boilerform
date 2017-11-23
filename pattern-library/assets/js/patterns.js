(function() {
    var componentSamples = [].slice.call(document.querySelectorAll('.ndpl-component__sample'));

    if(componentSamples.length) {
        componentSamples.map(function(item) {
            item.classList.add('boilerform');
        });
    }
}());