export { };
const playerService = game.GetService("Players");
print("Initializing Server...")
const eventsFolder = new Instance("Folder", game.Workspace)
eventsFolder.Name = "Events"
const kickEvent = new Instance("RemoteEvent", game.Workspace);
kickEvent.Name = "kickEvent";
kickEvent.Parent = eventsFolder;
const validatedEvent = new Instance("RemoteEvent", game.Workspace);
validatedEvent.Name = "validatedEvent";
validatedEvent.Parent = eventsFolder;
const DatastoreService = game.GetService("DataStoreService");
const Datastore = DatastoreService.GetDataStore("KeyStore");

const secret = game.GetService("DataStoreService").GetDataStore("KeyStore").GetAsync("SECRET")[0]

if (!secret) {
    print("No secret found, firing kick event...")
    kickEvent.FireAllClients()
    playerService.PlayerAdded.Connect(player => {
        for (let player of playerService.GetPlayers()) {
            const plr = player as Player
            plr.Kick("Server failed to initialize! Rejoin to fix this.")
        }
    })

}

print("Ready!")

validatedEvent.OnServerEvent.Connect(() => {
    validatedEvent.FireAllClients()
})
