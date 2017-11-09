app.directive('myDraggable', ['$document','$timeout', function($document, $timeout){
    return{
        template: '{{text}}',
        link: function(scope, element, attr){
            var startX = 0;
            var startY = 0;
            var x = 0;
            var y = 0;

        element.css({
            position: 'relative',
            backgroundColor: 'white',
            cursor: 'pointer'
        });
        scope.text="Ubicación";

        element.on('mouseup', function(event){
                event.preventDefault();
                startX = event.pageX;
                startY = event.pageY;
              

            minWidth= $(this).parent().width() / 3;
            minHeight= $(this).parent().height() /3;
            midWidth= minWidth * 2;
            midHeight= minHeight *2;
            fullWidth= $(this).parent().width();
            fullHeight= $(this).parent().height();


            if(startX < minWidth){
                
                if(startY < fullHeight){
                    scope.text ="Norteamerica";
                    scope.$apply();
                }
                else if(startY >= fullHeight && startY < midHeight){
                    scope.text ="Centroamerica";
                    scope.$apply();
                }
                else if(startY > minHeight){
                    scope.text ="Sudamerica";
                    scope.$apply();
                }
            }

            if(startX > minWidth && startX <= midWidth){
                debugger;
                if(startY < fullHeight){
                    scope.text ="Europa y Asia Occidental";
                    scope.$apply();
                }
                else if(startY >= fullHeight && startY < midHeight){
                    scope.text ="Norte de Africa";
                    scope.$apply();
                }
                else if(startY >= minHeight){
                    scope.text ="Sur de Africa";
                    scope.$apply();
                }
            }

            if(startX > midWidth && startX <= fullWidth){
                debugger;
                if(startY < fullHeight){
                    scope.text ="Asia Oriental";
                    scope.$apply();
                }
                else if(startY >= fullHeight && startY < midHeight){
                    scope.text ="Oceania";
                    scope.$apply();
                }
                else if(startY >= minHeight){
                    scope.text ="Australia";
                    scope.$apply();
                }
            }
        });
        
            element.on('mousedown', function(event) {
                // Prevent default dragging of selected content
                event.preventDefault();
                startX = event.pageX - x;
                startY = event.pageY - y;
                $document.on('mousemove', mousemove);
                $document.on('mouseup', mouseup);
            });

            function mousemove(event) {
                y = event.pageY - startY;
                x = event.pageX - startX;
                element.css({
                top: y + 'px',
                left:  x + 'px'
                });
            }

            function mouseup() {
                $document.off('mousemove', mousemove);
            //$document.off('mouseup', mouseup);
            }
        }
    };
}]);