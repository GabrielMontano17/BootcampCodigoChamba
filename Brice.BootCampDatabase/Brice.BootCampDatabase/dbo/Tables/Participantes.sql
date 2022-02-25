CREATE TABLE [dbo].[Participantes]
(
	[Id] INT  Identity(1,1) NOT NULL, 
    [Nombre] VARCHAR(50) NOT NULL, 
    [Edad] INT NOT NULL, 
    [FechaNacimiento] DATETIME NOT NULL,
    [FechaCreacion] DATETIME NOT NULL Default(GETDATE()),
    CONSTRAINT [PK_Participantes] PRIMARY KEY CLUSTERED ([id] ASC)
);
GO