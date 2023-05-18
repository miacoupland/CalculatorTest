using CalculatorTest.Entities;
using Microsoft.AspNetCore.Mvc;

namespace CalculatorTest.Controllers;

[Route("api/[controller]")]
[ApiController]
public class SimpleCalculatorController : ControllerBase
{
    private static readonly SimpleCalculator Calculator = new();

    /// <summary>
    /// Controller for adding values
    /// </summary>
    /// <param name="request">User requested values</param>
    /// <returns>Integer result of addition</returns>
    [HttpPost("add")]
    public int Add([FromBody] CalculatorRequest request)
    {
        var start = request.Start;
        var amount = request.Amount;

        return Calculator.Add(start, amount);
    }

    /// <summary>
    /// Controller for subtracing values
    /// </summary>
    /// <param name="request">User requested values</param>
    /// <returns>Integer result of subtraction</returns>
    [HttpPost("subtract")]
    public int Subtract([FromBody] CalculatorRequest request)
    {
        var start = request.Start;
        var amount = request.Amount;

        return Calculator.Subtract(start, amount);
    }
}