using RefactorCourse;
using Xunit;

namespace RefactorCourseTests
{
    public class OrderTests
    {
        [Fact]
        public void GetTaxes_CorrectResults()
        {
            //Arrange
            var order = new Order(100);
            var expected = 6;

            //Act
            var actual = order.GetTaxes();

            //Assert
            Assert.True(actual == expected);
        }
    }
}