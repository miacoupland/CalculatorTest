using CalculatorTest;
using FluentAssertions;

namespace Tests;

public class SimpleCalculatorTests
{
    [Fact]
    public void Add_GreenPass_ReturnsCorrectValue()
    {
        // Arrange
        var simpleCalc = new SimpleCalculator();

        // Act
        var result = simpleCalc.Add(1, 2);

        // Assert
        result.Should().Be(3);
    }

    [Fact]
    public void Subtract_GreenPass_ReturnsCorrectValue()
    {
        // Arrange
        var simpleCalc = new SimpleCalculator();

        // Act
        var result = simpleCalc.Subtract(3, 2);

        // Assert
        result.Should().Be(1);
    }
}