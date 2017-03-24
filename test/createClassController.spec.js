describe('CreateClassController', function() {
  beforeEach(module('ClassCreatorApp'))

  var $controller, $rootScope, controller
  beforeEach(inject(function(_$controller_, _$rootScope_) {
    // Define everything from angular with inject
    $controller = _$controller_
    $rootScope = _$rootScope_

    // include the specific controller we want to use
    controller = $controller('CreateClassController', { $scope: {} })
  }))

  it('starts with a single course in it', function () {
    var courses = $rootScope.courses

    expect(courses.length).to.equal(1)
    expect(courses[0].name).to.equal('History')
  })

  it('can create a new class and store it in rootscope', function () {
    controller.course.name = 'Angular Testing'
    controller.course.teacher = 'Dr. Meatball'
    controller.create()

    var courses = $rootScope.courses
    expect(courses.length).to.equal(2)
    expect(courses[1].name).to.equal('Angular Testing')
    expect(courses[1].teacher).to.equal('Dr. Meatball')
  })
})
