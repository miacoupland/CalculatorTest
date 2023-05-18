using System.ComponentModel.DataAnnotations;

namespace CalculatorTest.Entities;

public class CalculatorRequest
{
    [Required]
    public int Start { get; set; }

    [Required]
    public int Amount { get; set; }
}