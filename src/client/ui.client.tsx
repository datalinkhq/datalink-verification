import Roact from '@rbxts/roact';
import { Players } from '@rbxts/services';

const playerGui = Players.LocalPlayer.FindFirstChild("PlayerGui") as PlayerGui;

const element = (

    <screengui ResetOnSpawn={false} IgnoreGuiInset={true} Key={"ScreenGuiRoot"}>
        <frame Key={"RootFrame"} Position={new UDim2(0, 0, 0, 0)} Size={new UDim2(1, 0, 1, 0)} BackgroundColor3={new Color3(0, 0, 0)}>
            <frame Key={"CircleLoader1"} Size={new UDim2(0.012, 0, 0.032, 0)} Position={new UDim2(0.488, 0, 0.467, 0)} BackgroundColor3={new Color3(255, 255, 255)}>
                <uicorner CornerRadius={new UDim(1, 0)} />
            </frame>
            <frame Key={"CircleLoader2"} Size={new UDim2(0.012, 0, 0.032, 0)} Position={new UDim2(0.473, 0, 0.467, 0)} BackgroundColor3={new Color3(255, 255, 255)}>
                <uicorner CornerRadius={new UDim(1, 0)} />
            </frame>
            <frame Key={"CircleLoader3"} Size={new UDim2(0.012, 0, 0.032, 0)} Position={new UDim2(0.503, 0, 0.467, 0)} BackgroundColor3={new Color3(255, 255, 255)}>
                <uicorner CornerRadius={new UDim(1, 0)} />
            </frame>
        </frame>
    </screengui>

);



Roact.mount(element, playerGui, "UI"); 