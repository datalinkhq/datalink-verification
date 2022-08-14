import Roact from "@rbxts/roact";

interface player extends Instance {
    Kick(reason: string): void;
}

interface screengui extends defined {
    screengui: Instance;
}