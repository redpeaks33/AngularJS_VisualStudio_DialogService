var main = angular.module("app", ['ui.bootstrap','dialogs.main']);

main.controller('MyCtrl', function ($scope,dialogs) {
    $scope.Open = function () {
        dialogs.notify('Something Happened', 'Something happened at this point in the application that I wish to let you know about');
        //dialogs.error('Error', 'An unknown error occurred preventing the completion of the requested action.');
        //dialogs.wait('Creating User', 'Please wait while we attempt to create user "Michael Conroy."<br><br>This should only take a moment.', 50);
    }
});

