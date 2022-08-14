export function makeHello(name: string) {
	return `Hello from ${name}!`;
}

export function validate(user: Player) {
	const GamepassService = game.GetService("MarketplaceService");
	const ownsGamepass = GamepassService.UserOwnsGamePassAsync(user.UserId, 72958202);

	if (ownsGamepass === true) {
		return true
	} else if (ownsGamepass === false) {
		return false
	} else {
		return ownsGamepass
	}

}