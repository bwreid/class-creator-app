(function () {
  'use strict'

  angular.module('ClassCreatorApp')
    .controller('CreateClassController', CreateClassController)

  function CreateClassController ($rootScope) {
    $rootScope.id = 1

    $rootScope.courses = [
      {
        id: $rootScope.id++,
        name: 'HTML & CSS',
        teacher: 'Harlow Elmo',
        students: [
          { id: $rootScope.id++, name: 'Darien Alan', grade: 'B' },
          { id: $rootScope.id++, name: 'Sébastien Hartwin', grade: 'A-' },
          { id: $rootScope.id++, name: 'Prosper Mackenzie', grade: 'C+' }
        ]
      },
      {
        id: $rootScope.id++,
        name: 'JavaScript Fundamentals',
        teacher: 'Jaden Sosimo',
        students: [
          { id: $rootScope.id++, name: 'Gilbert Vadik', grade: 'A' },
          { id: $rootScope.id++, name: 'Ward Dalton', grade: 'A' },
          { id: $rootScope.id++, name: 'Adi Syd', grade: 'B+' },
          { id: $rootScope.id++, name: 'Lyosha Randell', grade: 'A-' },
          { id: $rootScope.id++, name: 'Connie Jae', grade: 'C-' }
        ]
      }
    ]

    this.course = initClass()

    this.create = () => {
      $rootScope.courses.push(this.course)
      this.course = initClass()
    }

    function initClass () {
      return {
        id: $rootScope.id++,
        name: '',
        teacher: '',
        students: []
      }
    }
  }
})()
