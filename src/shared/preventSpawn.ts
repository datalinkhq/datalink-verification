import { Players as playerService } from '@rbxts/services';


export default function main() {
    playerService.CharacterAutoLoads = false
    playerService.PlayerAdded.Connect(player => {
        const plr = player as Player
        plr.CharacterAdded.Connect(character => {
            const char = character.FindFirstChild("Humanoid") as Humanoid
            if (char) {
                char.Died.Connect(() => {
                    char.Destroy()
                    plr.Destroy()
                })
            }
        })
    })
}