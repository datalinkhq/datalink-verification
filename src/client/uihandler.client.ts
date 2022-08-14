import { Players } from '@rbxts/services';

const playerGui = Players.LocalPlayer.FindFirstChild("PlayerGui") as PlayerGui;


const validatedEvent = game.Workspace.WaitForChild("Events").WaitForChild("validatedEvent") as RemoteEvent;
const CircleLoader1 = playerGui.WaitForChild("ScreenGuiRoot").WaitForChild("CircleLoader1") as Frame
const CircleLoader2 = playerGui.WaitForChild("ScreenGuiRoot").WaitForChild("CircleLoader2") as Frame
const CircleLoader3 = playerGui.WaitForChild("ScreenGuiRoot").WaitForChild("CircleLoader3") as Frame

let i = 0;
while (i < 1) {
    CircleLoader2.Transparency = 0.5
    wait(0.1)
    CircleLoader2.Transparency = 0.3
    wait(0.1)
    CircleLoader2.Transparency = 0
    wait(0.1)
    CircleLoader2.Transparency = 1
    wait(0.1)
    CircleLoader1.Transparency = 0.5
    wait(0.1)
    CircleLoader1.Transparency = 0.3
    wait(0.1)
    CircleLoader1.Transparency = 0
    wait(0.1)
    CircleLoader1.Transparency = 1
    wait(0.1)
    CircleLoader3.Transparency = 0.5
    wait(0.1)
    CircleLoader3.Transparency = 0.3
    wait(0.1)
    CircleLoader3.Transparency = 0
    wait(0.1)
    CircleLoader3.Transparency = 1
    wait(0.1)
}

validatedEvent.OnClientEvent.Connect(() => {
    print("Destroying loader...")
    CircleLoader1.Destroy()
    CircleLoader2.Destroy()
    CircleLoader3.Destroy()
})