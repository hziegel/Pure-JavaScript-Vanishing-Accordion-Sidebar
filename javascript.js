var toggleVisibility = function(element) {
    if(element.style.display=='block'){
        element.style.display='none';
    } else {
        element.style.display='block';
    }
};

var toggleOn = function(element) {
                element.style.display='block';
};

var toggleOffAll = function() {
                var x = document.getElementsByTagName('nav');
                var j;
                for (j = 0; j<x.length;j++){
                x[j].style.display='none';
                };
};

var toggleSection = function(element) {
                var y = document.getElementsByClassName(element);
                var i;
                for (i = 0; i<y.length;i++){
                toggleVisibility(y[i]);
                };
};

var toggleSectionOff = function(element) {
                var y = document.getElementsByClassName(element);
                var i;
                for (i = 0; i<y.length;i++){
    y[i].style.display='none';
                };
};
