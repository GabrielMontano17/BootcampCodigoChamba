using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Brive.Bootcamp.PruebaApi.Models
{
    [Table("Participantes")]
    public class Participantes
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Column("Nombre")]
        public string Nombre { get; set;}
        [Column("Edad")]
        public int Edad { get; set; }
        [Column("FechaNacimiento")]
        public DateTime FechaNacimiento { get; set; }

    }
}
