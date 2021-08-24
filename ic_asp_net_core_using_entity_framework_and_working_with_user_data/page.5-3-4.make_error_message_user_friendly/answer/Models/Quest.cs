using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace ForgingAhead.Models
{
  public class Quest
  {
    [Key]
    [Required(ErrorMessage = "Name cannot be null or empty")]
    [MinLength(3)]
    public string Name { get; set; }

    [Required]
    [Display(Name = "Is Active")]
    public bool IsActive { get; set; }

    public List<Character> Characters { get; set; }
  }
}
