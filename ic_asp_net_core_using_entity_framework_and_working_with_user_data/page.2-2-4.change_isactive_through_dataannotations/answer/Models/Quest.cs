using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace ForgingAhead.Models
{
  public class Quest
  {
    [Key]
    public string Name { get; set; }

    [Display(Name="Is Active")]
    public bool IsActive { get; set; }

    public List<Character> Characters { get; set; }
  }
}
