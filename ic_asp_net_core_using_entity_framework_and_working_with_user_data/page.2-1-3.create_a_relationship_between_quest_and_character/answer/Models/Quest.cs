using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ForgingAhead.Models
{
  public class Quest
  {
    [Key]
    public string Name { get; set; }
    public bool IsActive { get; set; }

    // set up relationship here
    public List<Character> Characters { get; set; }
  }
}
