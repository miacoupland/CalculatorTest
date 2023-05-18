using CalculatorTest.Controllers;
using CalculatorTest.Entities;

namespace CalculatorTest.Tests
{
    public class SimpleCalculatorControllerTests
    {
        [Fact]
        public void Add_Should_Return_Correct_Result()
        {
            // Arrange
            var controller = new SimpleCalculatorController();
            var request = new CalculatorRequest { Start = 2, Amount = 3 };

            // Act
            var result = controller.Add(request);

            // Assert
            Assert.Equal(5, result);
        }

        [Fact]
        public void Subtract_Should_Return_Correct_Result()
        {
            // Arrange
            var controller = new SimpleCalculatorController();
            var request = new CalculatorRequest { Start = 5, Amount = 3 };

            // Act
            var result = controller.Subtract(request);

            // Assert
            Assert.Equal(2, result);
        }
    }
}