/**
 * @file
 * Contains the definition of the behaviour testbehavior.
 */

(function ($, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.testbehavior = {
    attach: function (context, settings) {
      $('.views-exposed-form', context).once('testbehavior').append('<p>Test</p>');
      $('.form-item-severity', context).hide();

      $('input.myCustomBehavior', context).once('testbehavior').each(function () {
        // Apply the myCustomBehaviour effect to the elements only once.
      });
    //  console.log(myvar);
      var leftBorderWidth = 1;
      let myvar = 2;
      let persone = {
        name: 'ddd',
        age: 25,
        married: false,
      };
      let arr = ['apple', 'netflix', 'google'];
    //  console.log(arr[1]);

      let swither = null;
      if (swither) {
        console.log("work");
      }

      swither = 1;
      if (swither) {
      //  console.log("work 2");
      }

/*      let clas = {
        name: '9class',
        students: ['Vania', 'Tania', 'Vasia'],
        list() {
          this.students.forEach(
              student => alert(this.name + ': ' + student)
              // console.log(student => 'As:' + student)
            );
        }
      };
      clas.list();*/

     let incr = 10,
         decr = 10;


      let myradar = $(context).find('.views-exposed-form p').once('testbehavior');
      if (myradar.length) {

        console.log(3 ** 5);
      }






    }
  };
}) (jQuery, Drupal, drupalSettings);


