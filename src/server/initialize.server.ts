import { Players as playerService } from '@rbxts/services';
import preventSpawn from 'shared/preventSpawn';
import initializeEvents from 'shared/initializeEvents';
try {
    preventSpawn();
    initializeEvents();
    const DatastoreService = game.GetService("DataStoreService");
    const Datastore = DatastoreService.GetDataStore("KeyStore");
    const secret = Datastore.GetAsync("SECRET")[0]
    const kickEvent = game.Workspace.WaitForChild("Events").WaitForChild("kickEvent") as RemoteEvent;

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
} catch (e) {
    print(error)
}


