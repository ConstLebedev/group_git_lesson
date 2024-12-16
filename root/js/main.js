const tabs = document.querySelector('.tabs')
var instance = M.Tabs.init(tabs);
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});