describe('CreateStudentController', function() {
  beforeEach(module('ClassCreatorApp'))

  var $controller, $rootScope, controller
  beforeEach(inject(function(_$controller_, _$rootScope_) {
    // Define everything from angular with inject
    $controller = _$controller_
    $rootScope = _$rootScope_

    // include the specific controller we want to use
    controller = $controller('CreateStudentController', { $scope: {} })
    $controller('CreateClassController', { $scope: {} })
  }))

  it('starts with a default student', function () {
    var student = controller.student
    expect(student.grade).to.equal('C')
  })


  it('can assign a course to a student', function () {
    // Empty any students in the course
    var course = $rootScope.courses[0]
    course.students = []

    var testStudent = { name: 'Dr.Meatball', course_id: course.id }
    var student = controller.student
    student.name = testStudent.name
    student.course_id = testStudent.course_id
    controller.create()

    expect(course.students.length).to.equal(1)
    expect(course.students[0].name).to.equal(testStudent.name)
  })
})
