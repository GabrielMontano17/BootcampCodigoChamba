using Brive.Bootcamp.PruebaApi.DataAccess;
using Brive.Bootcamp.PruebaApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Brive.Bootcamp.PruebaApi.Repositorios.Implementacion
{
    public class ImpParticipantesRepositorio : IParticipantesRepositorio
    {
        private readonly ProjectContext _contextDB;

        public ImpParticipantesRepositorio(ProjectContext contextDB)
        {
            _contextDB = contextDB;
        }

        public void GuardarParticipante(Participantes participante)
        {
            _contextDB.Participantes.Add(participante);
            _contextDB.SaveChanges();
        }

        public Participantes[] ObtenerTodosLosParticipantes()
        {
            return _contextDB.Participantes.ToArray();

        }
    }
}
