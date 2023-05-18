using CalculatorTest.Contracts;

namespace CalculatorTest;

public class SimpleCalculator : ISimpleCalculator
{
    public SimpleCalculator()
    { }

    // Add two values
    // No error handling as int is nullable
    public int Add(int start, int amount)
    {
        return start + amount;
    }

    // Subtract two values
    public int Subtract(int start, int amount)
    {
        return start - amount;
    }
}