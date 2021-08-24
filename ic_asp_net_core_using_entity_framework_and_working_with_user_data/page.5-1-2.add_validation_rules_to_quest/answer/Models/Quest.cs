using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace ForgingAhead.Models
{
  public class Quest
  {
    [Key]
    [MinLength(3)]
    [Required]
    public string Name { get; set; }

    [Display(Name = "Is Active")]
    [Required]
    public bool IsActive { get; set; }

    public List<Character> Characters { get; set; }
  }
}
