const chrome = require('chrome-cookies-secure');
const sites = ["https://issuer.enforce.dev/", "https://auth.chainguard.dev/", "https://google.com/", "https://accounts.google.com/"]

async function main() {
	let cookies = "";
	for (const site of sites) {
		console.error("SITE: " + site);
		const siteCookies = await chrome.getCookiesPromised(site, "curl");
		cookies = cookies.concat(siteCookies);
	}
	console.log(cookies);
}

main();
