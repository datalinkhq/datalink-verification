import { validate } from "shared/checkPass";
import { $env } from "rbxts-transform-env";
import { Players as playerService } from "@rbxts/services"


print("Initializing Client...")

const kickEvent = game.Workspace.WaitForChild("Events").WaitForChild("kickEvent") as RemoteEvent;
const validatedEvent = game.Workspace.WaitForChild("Events").WaitForChild("validatedEvent") as RemoteEvent;

kickEvent.OnClientEvent.Connect(() => {
    print("Kicking player...")
})

print("Welcome" + " " + playerService.LocalPlayer.DisplayName + "!");


wait(5)
if (validate(playerService.LocalPlayer) === true) {
    print("User" + " " + playerService.LocalPlayer.DisplayName + " " + "owns the gamepass.");
    print("Validating User...")
    print($env("PRODUCTION"))
    if ($env("PRODUCTION") === "true") {
        const HttpService = game.GetService("HttpService");
        const HttpResponse = HttpService.PostAsync("https://verify.datalink.dev/validate", `{ "id": ${playerService.LocalPlayer.UserId}, "status": true, "secret": "hi" }`);
        print(HttpResponse)
        print("User validated!")
        validatedEvent.FireServer()
        print('Validated user.')
    } else if ($env("PRODUCTION") === "false") {
        print("User validated!")
        validatedEvent.FireServer()
        print('Validated user.')
    }


}