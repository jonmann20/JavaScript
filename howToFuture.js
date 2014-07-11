function foo() {
  var deferred = $.Deferred();

  mainDiv.animate({ opacity: 0 }, function () {
    
  
    deferred.resolve();
  });

  return deferred.promise();
}
