import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CookiesService {

	constructor() { }

	set(cname, cvalue, days, path) {
		var d = new Date();
		d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	get(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	check(cname) {
		var cookieName = this.get(cname);
		if (cookieName != "") {
			console.log(cookieName + " - Cookie is available");
		} else {
			console.log("Cookie is not available");
		}
	}

	remove(cname) {
		this.set(cname, "", -1, "");
		console.log("Cookie has been removed");
	}

	getAll() {
		var cookies = document.cookie(";");
		var text = "";
		for(var i = 1; i <= cookies.length; i++){
			text += i + ": " + cookies[i-1] + "\n";
		}
		return console.log(text);
	}

}
