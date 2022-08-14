export { };

const validatedEvent = game.Workspace.WaitForChild("Events").WaitForChild("validatedEvent") as RemoteEvent;

validatedEvent.OnServerEvent.Connect(() => {
    validatedEvent.FireAllClients()
})
