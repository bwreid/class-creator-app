describe('CreateStudentController', function() {
  beforeEach(module('ClassCreatorApp'))

  var $controller, $rootScope, controller
  beforeEach(inject(function(_$controller_, _$rootScope_) {
    // Define everything from angular with inject
    $controller = _$controller_
    $rootScope = _$rootScope_

    // include the specific controller we want to use
    controller = $controller('CreateStudentController', { $scope: {} });
    $controller('CreateClassController', { $scope: {} });
  }))

  it('starts with a default student', function () {
    var student = controller.student
    expect(student.grade).to.equal('C')
  })


  it('can assign a course to a student', function () {
    var student = controller.student
    student.name = 'Dr. Meatball'
    student.course_id = $rootScope.courses[0].id
    controller.create()

    expect($rootScope.courses[0].students.length).to.equal(3)
  })
})
