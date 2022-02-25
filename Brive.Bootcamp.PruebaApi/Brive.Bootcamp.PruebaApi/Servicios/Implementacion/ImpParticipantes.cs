using Brive.Bootcamp.PruebaApi.Models;
using Brive.Bootcamp.PruebaApi.Repositorios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Brive.Bootcamp.PruebaApi.Servicios.Implementacion
{
    //Se ve todo lo del negocio
    public class ImpParticipantes : IParticipantes
    {
        private IParticipantesRepositorio _participantesRepository;

        public ImpParticipantes(IParticipantesRepositorio participantesRepository)
        {
            _participantesRepository = participantesRepository;
        }

        public bool GuardarParticipante(Participantes participante)
        {
            if (participante == null)
                return false;

            _participantesRepository.GuardarParticipante(participante);
            
            return true;
        }

        public Participantes[] ObtenerParticipantes()
        {
            return GenerarListadoDeParticipantes();
        }

        public Participantes[] ObtenerParticipantesMayoresDeEdad()
        {
            Participantes[] participantes = GenerarListadoDeParticipantes();

            return participantes.Where(participante => participante.Edad >= 18).ToArray();
        }

        private Participantes[] GenerarListadoDeParticipantes()
        {
            return _participantesRepository.ObtenerTodosLosParticipantes();
        }
    }
}
