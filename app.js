 var app = angular.module("DocWriter", ['ngAnimate', 'ui.bootstrap']);
/**
 angular.module('DocWriter', ['MyDirectives']);

 angular.module('MyDirectives').
 directive('myDirective', function() {
    return{
        restrict: 'E',
        templateUrl: <div></div>
    }
 });
 */

app.config(['$compileProvider',
    function ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
}]);

 app.controller("MainCtrl", function ($scope, $modal, $log) {
    $scope.name = "Edwin";
    $scope.templates = [
     {
        category: 'Diagnostic',
        subcategories: [
         {
            subcategory: 'Clinical',
            subsubcategories: [
                {
                    subsubcategory: 'Initial Exam'
                },
                {
                    subsubcategory: 'Periodic Exam'
                },
                {
                    subsubcategory: 'Emergency Exam'
                }
            ]
         },
         {
            subcategory: 'Radiograph',
            subsubcategories: [
                {
                    subsubcategory: 'FMX'
                },
                {
                    subsubcategory: 'PA'
                },
                {
                    subsubcategory: '1 BW'
                },
                {
                    subsubcategory: '2 BW'
                },
                {
                    subsubcategory: '4 BW'
                },
            ]
         },
         {
            subcategory: 'Test Examination',
            subsubcategories: [
                {
                    subsubcategory: 'Pulp Vitality Test'
                },
                {
                    subsubcategory: 'Diagnostic Cast'
                }
            ]
         }
        ]
     },
     {
        category: 'Preventive',
        subcategories: [
         {
            subcategory: 'Propylaxis',
            subsubcategories: [
                {
                    subsubcategory: 'Adult'
                },
                {
                    subsubcategory: 'Child'
                }
            ]
         },
         {
            subcategory: 'Topical Fluoride',
            subsubcategories: [
                {
                    subsubcategory: 'Adult'
                },
                {
                    subsubcategory: 'Child'
                }
            ]
         },
         {
            subcategory: 'Other Preventive',
            subsubcategories: [
                {
                    subsubcategory: 'Oral Hygiene Instruction'
                },
                {
                    subsubcategory: 'Sealant'
                }
            ]
         },
         {
            subcategory: 'Space Maintenance',
            subsubcategories: [
                {
                    subsubcategory: 'Space Maintenance'
                }
            ]
         }
        ]
     },
     {
        category: 'Restoration',
        subcategories: [
         {
            subcategory: 'Amalgam',
            subsubcategories: [
                {
                    subsubcategory: 'One Surface'
                },
                {
                    subsubcategory: 'Two Surfaces'
                },
                {
                    subsubcategory: 'Three Surfaces'
                },
                {
                    subsubcategory: 'Four or more'
                }
            ]
         },
         {
            subcategory: 'Composite',
            subsubcategories: [
                {
                    subsubcategory: 'Post'
                },
                {
                    subsubcategory: 'Core'
                }
            ]
         },
         {
            subcategory: 'Crown',
            subsubcategories: [
                {
                    subsubcategory: 'Full porcelain crown'
                },
                {
                    subsubcategory: 'Porcelain fused to base metal'
                }
            ]
         }
        ]
     },
     {
        category: 'Endo',
        subcategories: [
         {
            subcategory: 'Root Canal Therapy',
            subsubcategories: [
                {
                    subsubcategory: 'One Canal'
                },
                {
                    subsubcategory: 'Two Canals'
                },
                {
                    subsubcategory: 'Three Canals'
                },
                {
                    subsubcategory: 'Four or more'
                }
            ]
         }
        ]
     },
     {
        category: 'Perio',
        subcategories: [
         {
            subcategory: 'Gingival Curettage',
            subsubcategories: [
                {
                    subsubcategory: 'Gingival Curettage'
                }
            ]
         },
         {
            subcategory: 'RPS',
            subsubcategories: [
                {
                    subsubcategory: 'Per Quadrant'
                },
                {
                    subsubcategory: 'In the Presence of Gingival Inflamation'
                }
            ]
         }
        ]
     },
     {
        category: 'Prosto',
        subcategories: [
         {
            subcategory: 'Complete Denture',
            subsubcategories: [
                {
                    subsubcategory: 'Complete Upper'
                },
                {
                    subsubcategory: 'Complete Lower'
                },
                {
                    subsubcategory: 'Immediate Upper'
                },
                {
                    subsubcategory: 'Immediate Lower'
                }

            ]
         },
         {
            subcategory: 'Partial Denture',
            subsubcategories: [
                {
                    subsubcategory: 'Upper Flipper'
                },
                {
                    subsubcategory: 'Lower Flipper'
                },
                {
                    subsubcategory: 'Upper Partial with Cast Base'
                },
                {
                    subsubcategory: 'Lower Partial with Cast Base'
                }

            ]
         },
         {
            subcategory: 'Repair',
            subsubcategories: [
                {
                    subsubcategory: 'Broken Denture Base'
                },
                {
                    subsubcategory: 'Missing Denture Teeth'
                },
                {
                    subsubcategory: 'Broken Cast Partial'
                },
                {
                    subsubcategory: 'Missing Teeth on Cast Partial'
                },
                {
                    subsubcategory: 'Add Tooth to Partial'
                },
                {
                    subsubcategory: 'Reline Complete Upper Denture (Chairside)'
                },
                {
                    subsubcategory: 'Reline Complete Lower Denture (Chairside)'
                }

            ]
         }
        ]
     },
     {
        category: 'Fixed Prosto',
        subcategories: [
         {
            subcategory: 'Pontic',
            subsubcategories: [
                {
                    subsubcategory: 'All Porcelain'
                },
                {
                    subsubcategory: 'Porcelain Fused to Metal'
                }
            ]
         },
         {
            subcategory: 'Bridge Retainer-Crowns',
            subsubcategories: [
                {
                    subsubcategory: 'All Porcelain'
                },
                {
                    subsubcategory: 'Porcelain Fused to Metal'
                }
            ]
         },
         {
            subcategory: 'Other Services',
            subsubcategories: [
                {
                    subsubcategory: 'Recement Bridge'
                },
                {
                    subsubcategory: 'Stress Breaker'
                },
                {
                    subsubcategory: 'Precision Attachment'
                }
            ]
         }
        ]
     },
     {
        category: 'Oral Surgery',
        subcategories: [
         {
            subcategory: 'Erupted Tooth',
            subsubcategories: [
                {
                    subsubcategory: 'Simple Extraction'
                },
                {
                    subsubcategory: 'Surgical Extraction'
                }
            ]
         },
         {
            subcategory: 'Impacted Tooth',
            subsubcategories: [
                {
                    subsubcategory: 'Surgical Soft Tissue Impaction'
                },
                {
                    subsubcategory: 'Surgical Bony Impaction'
                }
            ]
         }
        ]
     },
     {
        category: 'Unclassified',
        subcategories: [
         {
            subcategory: 'Palliative Treatment',
            subsubcategories: [
                {
                    subsubcategory: 'Palliative Treatment'
                }
            ]
         }
        ]
     }

    ];
    /**Opening first degree category*/
    $scope.thisindex = -1;
    $scope.thissubindex = -1;
    $scope.openCategory = function($index) {
        console.log("Category: " + $index);
        if($scope.thisindex == $index) {
            $scope.thisindex = -1;
            $scope.thissubindex = -1;
        }
        else{
            $scope.thisindex = $index;
        }
    };
    /**Opening second degree category*/
    $scope.openSubCategory = function($index) {
        console.log("SubCategory: " + $index);
        if($scope.thissubindex == $index) {
            $scope.thissubindex = -1;
        }
        else{
            $scope.thissubindex = $index;
        }
    };

    $scope.display = function() {
        console.log($scope.patient_name);
        $scope.note = '';
        $scope.saved = false;
    };

    /** All of the note will be saved here */
    $scope.note = '';
    $scope.saved = false;

    $scope.update = function(note){
        var content = note;
        var blob = new Blob([ content ], { type : 'text/plain' });
        $scope.url = (window.URL || window.webkitURL).createObjectURL( blob );
        $scope.saved = true;
    }
    

/** Modal to input patient name */
$scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.patient_name;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.patient_name = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
/** For Template modal*/
$scope.openTemplate = function (size, templateName) {

    var modalInstance2 = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myTemplateContent.html',
      controller: 'ModalInstanceTemplateCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.template;
        }
      }
    });

    modalInstance2.result.then(function (selectedItem) {
      $scope.patient_name = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });



  };
/** For the alerts */
  $scope.alerts = [

  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Note for ' + $scope.patient_name + ' has been created'});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

  $scope.showTemplateForm = false;

  /** Template controls */

    /** Adds a string to the DOM */
    function stringtoDOM(string) {
        var text = document.createElement("SPAN");
        var textnode = document.createTextNode(string);
        text.appendChild(textnode);
        document.getElementById("thistemplate").appendChild(text);
        

    };

    function inputDOM() {
        var input = document.createElement("INPUT");
        input.setAttribute("type", "text")
        input.setAttribute("id", "templateinput");
        input.setAttribute("name", "data_" + $scope.numberOfBoxes);
        document.getElementById("thistemplate").appendChild(input);
    };

    function addNewLine() {
        var text = document.createElement("BR");
        document.getElementById("thistemplate").appendChild(text);
    };


  $scope.openTemplateForm = function() {
    $scope.showTemplateForm = true;
    /** open up the text file */
    function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                
                
                $scope.template = allText;
            }
        }
    }
    rawFile.send(null);
}

readTextFile("/DocWriter/Templates/template.txt");

    var arrayOfLines = $scope.template.split("\n"); // arrayOfLines is array where every element is string of one line
    console.log(arrayOfLines);
    $scope.numberOfBoxes = 0;
    $scope.data = [{
      number: '0'
    }];
    console.log("data[0].number");
    console.log($scope.data[0].number);
    for(var i = 0; i < arrayOfLines.length; i++){
        var string = '';
        var thisarray = arrayOfLines[i];
        for(var j = 0; j < arrayOfLines[i].length; j++){
            
            if(thisarray.charAt(j) == '['){
                if($scope.numberOfBoxes != 0){
                  $scope.data.push({ number: '0'});
                }
                $scope.numberOfBoxes++;
                
                stringtoDOM(string);
                string = '';
                inputDOM();
                j = j + 1;
            }
            else{
                var character = thisarray.charAt(j);
                string = string + character;
            }
        }
        stringtoDOM(string);
        addNewLine();
    }

  };

  $scope.closeTemplateForm = function() {
    $scope.showTemplateForm = false;
    document.getElementById('thistemplate').innerHTML="";
  };

  $scope.addToNote = function() {
    $scope.note = $scope.note + "\n" + $scope.template;
    console.log(data_1);
    console.log($scope.data);
    $scope.showTemplateForm = false;

    document.getElementById('thistemplate').innerHTML="";
  };

  /** Edit and Save Button */
    $scope.openTemplateFormWithin = function() {
        $scope.showTemplateFormWithin = true;
    };

    $scope.data = [];
    $scope.numberOfBoxes = 0;

    $scope.closeTemplateFormWithin = function() {

    document.getElementById('thistemplate').innerHTML=""; //Delete all of the template's old html


    var arrayOfLines = $scope.template.split("\n"); // arrayOfLines is array where every element is string of one line
    console.log(arrayOfLines);
    $scope.numberOfBoxes = 0;
    $scope.data = [{
      number: '0'
    }];
    console.log("data[0].number");
    console.log($scope.data[0].number);
    for(var i = 0; i < arrayOfLines.length; i++){
        var string = '';
        var thisarray = arrayOfLines[i];
        for(var j = 0; j < arrayOfLines[i].length; j++){
            
            if(thisarray.charAt(j) == '['){
                if($scope.numberOfBoxes != 0){
                  $scope.data.push({ number: '0'});
                }
                $scope.numberOfBoxes++;
                
                stringtoDOM(string);
                string = '';
                inputDOM();
                j = j + 1;
            }
            else{
                var character = thisarray.charAt(j);
                string = string + character;
            }
        }
        stringtoDOM(string);
        addNewLine();
    }


        $scope.showTemplateFormWithin = false;
    };


    
}); /** End of js */

/** For Patient Name Modal */
angular.module('DocWriter').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.patient_name = '';

  $scope.ok = function () {
    $modalInstance.close($scope.patient_name);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

/**For Template Modal */

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('DocWriter').controller('ModalInstanceTemplateCtrl', function ($scope, $modalInstance, items) {

  $scope.template = 'This is a Template';

  

  function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                
                console.log(allText);
                $scope.template = allText;
            }
        }
    }
    rawFile.send(null);
}

readTextFile("/DocWriter/Templates/template.txt");



  $scope.ok = function () {
    $modalInstance.close($scope.template);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

    $scope.showTemplateForm = false;

    /** Edit and Save Button */
    $scope.openTemplateForm = function() {
        $scope.showTemplateForm = true;
    };

    $scope.closeTemplateForm = function() {
        $scope.showTemplateForm = false;
    };

});

