export default function main() {
    print("Initializing Server...")
    const eventsFolder = new Instance("Folder", game.Workspace)
    eventsFolder.Name = "Events"
    const kickEvent = new Instance("RemoteEvent", game.Workspace);
    kickEvent.Name = "kickEvent";
    kickEvent.Parent = eventsFolder;
    const validatedEvent = new Instance("RemoteEvent", game.Workspace);
    validatedEvent.Name = "validatedEvent";
    validatedEvent.Parent = eventsFolder;
}