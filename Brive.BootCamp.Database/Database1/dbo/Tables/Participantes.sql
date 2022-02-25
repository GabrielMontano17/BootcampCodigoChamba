CREATE TABLE [dbo].[Participantes] (
    [Id]              INT          IDENTITY (1, 1) NOT NULL,
    [Nombre]          VARCHAR (50) NOT NULL,
    [Edad]            INT          NOT NULL,
    [FechaNacimiento] DATETIME     NOT NULL,
    [FechaCreacion]   DATETIME     DEFAULT (getdate()) NOT NULL,
    CONSTRAINT [PK_Participantes] PRIMARY KEY CLUSTERED ([Id] ASC)
);

